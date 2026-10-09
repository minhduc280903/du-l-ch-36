/**
 * ==============================================================================
 * LOGIC ĐIỀU HƯỚNG, HIỆU ỨNG CHUYỂN ĐỘNG & BÀI VIẾT (main.js)
 * Cổng Thông Tin Quảng Bá Du Lịch Tỉnh Thanh Hóa
 * ==============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. KHỞI TẠO BIẾN DỮ LIỆU & TRẠNG THÁI
  const data = window.ThanhHoaData;
  if (!data) {
    console.error("Lỗi: Không tìm thấy tệp data.js!");
    return;
  }

  let currentGalleryIndex = 0;
  let activeGalleryList = [];

  // ============================================================================
  // 2. HIỆU ỨNG MỞ TRANG (INTRO MÁY BAY)
  // ============================================================================
  const initIntroScreen = () => {
    const introScreen = document.getElementById("intro-screen");
    const skipBtn = document.getElementById("btn-skip-intro");
    if (!introScreen) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isIntroShown = sessionStorage.getItem("thanhhoa_intro_shown");

    // Nếu đã xem trong phiên hoặc bật chế độ giảm chuyển động -> bỏ qua ngay
    if (isIntroShown || prefersReducedMotion) {
      introScreen.style.display = "none";
      animateHeroHeadline();
      return;
    }

    const closeIntro = () => {
      introScreen.classList.add("fade-out");
      sessionStorage.setItem("thanhhoa_intro_shown", "true");
      setTimeout(() => {
        introScreen.style.display = "none";
        animateHeroHeadline();
      }, 600);
    };

    // Tự động kết thúc sau 3.6 giây khi máy bay bay khuất
    const timer = setTimeout(closeIntro, 3600);

    if (skipBtn) {
      skipBtn.addEventListener("click", () => {
        clearTimeout(timer);
        closeIntro();
      });
    }
  };

  // Hiệu ứng chữ rơi cho tiêu đề Hero sau khi intro kết thúc
  const animateHeroHeadline = () => {
    const heroTitle = document.querySelector(".hero-title");
    if (!heroTitle) return;
    heroTitle.style.opacity = "1";
  };

  // ============================================================================
  // 3. CON TRỎ CHUỘT TÙY BIẾN (CUSTOM CURSOR - DESKTOP ONLY)
  // ============================================================================
  const initCustomCursor = () => {
    const dot = document.querySelector(".custom-cursor-dot");
    const ring = document.querySelector(".custom-cursor-ring");
    if (!dot || !ring || window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    const renderRing = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      requestAnimationFrame(renderRing);
    };
    requestAnimationFrame(renderRing);

    // Mở rộng vòng tròn khi hover qua phần tử tương tác
    const interactiveElements = document.querySelectorAll("a, button, input, .destination-card, .gallery-item, .cuisine-card");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => ring.classList.add("cursor-hover"));
      el.addEventListener("mouseleave", () => ring.classList.remove("cursor-hover"));
    });
  };

  // ============================================================================
  // 4. HEADER CỐ ĐỊNH, THANH TIẾN TRÌNH & MENU MOBILE
  // ============================================================================
  const initHeaderAndNav = () => {
    const header = document.getElementById("main-header");
    const progressBar = document.getElementById("reading-progress-bar");
    const backToTopBtn = document.getElementById("back-to-top");
    const hamburgerBtn = document.getElementById("btn-hamburger");
    const mobileDrawer = document.getElementById("mobile-drawer");
    const mobileBackdrop = document.getElementById("mobile-backdrop");
    const closeDrawerBtn = document.getElementById("btn-close-drawer");
    const mobileLinks = document.querySelectorAll(".mobile-nav-link");

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      // 1. Chuyển màu nền header
      if (scrollY > 60) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }

      // 2. Cập nhật thanh tiến trình đọc
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0 && progressBar) {
        const scrolledPercent = (scrollY / docHeight) * 100;
        progressBar.style.width = `${scrolledPercent}%`;
      }

      // 3. Hiện nút Back To Top khi cuộn quá 500px
      if (backToTopBtn) {
        if (scrollY > 500) {
          backToTopBtn.classList.add("visible");
        } else {
          backToTopBtn.classList.remove("visible");
        }
      }
    });

    if (backToTopBtn) {
      backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // Xử lý đóng mở Menu mobile
    const toggleMobileMenu = (open) => {
      if (open) {
        mobileDrawer.classList.add("open");
        mobileBackdrop.classList.add("open");
        document.body.style.overflow = "hidden";
      } else {
        mobileDrawer.classList.remove("open");
        mobileBackdrop.classList.remove("open");
        document.body.style.overflow = "";
      }
    };

    if (hamburgerBtn) hamburgerBtn.addEventListener("click", () => toggleMobileMenu(true));
    if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", () => toggleMobileMenu(false));
    if (mobileBackdrop) mobileBackdrop.addEventListener("click", () => toggleMobileMenu(false));

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => toggleMobileMenu(false));
    });
  };

  // ============================================================================
  // 5. HERO SLIDER & TÌM KIẾM ĐIỂM ĐẾN TỰ ĐỘNG
  // ============================================================================
  const initHeroSliderAndSearch = () => {
    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".slider-dot");
    let currentSlide = 0;
    const totalSlides = slides.length;

    const showSlide = (index) => {
      slides.forEach((s) => s.classList.remove("active"));
      dots.forEach((d) => d.classList.remove("active"));
      slides[index].classList.add("active");
      dots[index].classList.add("active");
      currentSlide = index;
    };

    // Tự động chuyển 5 giây / ảnh
    setInterval(() => {
      const nextSlide = (currentSlide + 1) % totalSlides;
      showSlide(nextSlide);
    }, 5000);

    dots.forEach((dot, idx) => {
      dot.addEventListener("click", () => showSlide(idx));
    });

    // Xử lý ô tìm kiếm điểm đến
    const searchInput = document.getElementById("hero-search-input");
    const searchDropdown = document.getElementById("search-dropdown");

    if (searchInput && searchDropdown) {
      searchInput.addEventListener("input", (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (query.length < 2) {
          searchDropdown.classList.remove("active");
          searchDropdown.innerHTML = "";
          return;
        }

        const matches = data.destinations.filter(
          (d) =>
            d.name.toLowerCase().includes(query) ||
            d.location.toLowerCase().includes(query) ||
            d.categoryName.toLowerCase().includes(query)
        );

        if (matches.length > 0) {
          searchDropdown.innerHTML = matches
            .map(
              (m) => `
              <div class="search-result-item" data-slug="${m.slug}">
                <img src="${m.coverImage}" alt="${m.name}" class="search-result-thumb" />
                <div>
                  <div class="search-result-title">${m.name}</div>
                  <div class="search-result-category">${m.categoryName} · ${m.location}</div>
                </div>
              </div>
            `
            )
            .join("");
          searchDropdown.classList.add("active");

          // Bắt sự kiện chọn điểm đến từ gợi ý
          searchDropdown.querySelectorAll(".search-result-item").forEach((item) => {
            item.addEventListener("click", () => {
              const slug = item.getAttribute("data-slug");
              window.location.hash = `#/diem-den/${slug}`;
              searchDropdown.classList.remove("active");
              searchInput.value = "";
            });
          });
        } else {
          searchDropdown.innerHTML = `
            <div style="padding: 16px; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
              Không tìm thấy điểm đến phù hợp với từ khóa "${query}"
            </div>
          `;
          searchDropdown.classList.add("active");
        }
      });

      // Ẩn dropdown khi bấm ra ngoài
      document.addEventListener("click", (e) => {
        if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
          searchDropdown.classList.remove("active");
        }
      });
    }
  };

  // ============================================================================
  // 6. HIỆU ỨNG BỘ ĐẾM SỐ NỔI BẬT (COUNTER ANIMATION)
  // ============================================================================
  const initCounters = () => {
    const statsContainer = document.getElementById("stats-container");
    if (!statsContainer) return;

    // Render các thẻ thống kê từ data
    statsContainer.innerHTML = data.overviewStats
      .map(
        (st) => `
        <div class="stat-card">
          <div class="stat-number-wrap">
            <span class="counter-val" data-target="${st.number}">0</span>${st.suffix}
          </div>
          <div class="stat-label">${st.label}</div>
        </div>
      `
      )
      .join("");

    let countersStarted = false;

    const startCounting = () => {
      const counters = document.querySelectorAll(".counter-val");
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute("data-target"), 10);
        const duration = 2000;
        const stepTime = 20;
        const totalSteps = duration / stepTime;
        const increment = target / totalSteps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.innerText = target.toLocaleString("vi-VN");
            clearInterval(timer);
          } else {
            counter.innerText = Math.floor(current).toLocaleString("vi-VN");
          }
        }, stepTime);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countersStarted) {
            countersStarted = true;
            startCounting();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(statsContainer);
  };

  // ============================================================================
  // 7. RENDER & LỌC ĐIỂM ĐẾN NỔI BẬT (BENTO / MASONRY GRID)
  // ============================================================================
  const initDestinationsSection = () => {
    const grid = document.getElementById("destinations-grid");
    const filterButtons = document.querySelectorAll(".filter-btn");
    if (!grid) return;

    // Render toàn bộ thẻ điểm đến
    const renderDestinations = (category = "all") => {
      const filtered =
        category === "all"
          ? data.destinations
          : data.destinations.filter((d) => d.category === category);

      grid.innerHTML = filtered
        .map(
          (d, idx) => `
          <article class="destination-card reveal-on-scroll delay-${(idx % 4) + 1}" data-slug="${d.slug}">
            <div class="card-media-wrap">
              <img 
                src="${d.coverImage}" 
                alt="${d.name} - ${d.location}" 
                class="card-media" 
                loading="lazy" 
                referrerpolicy="no-referrer"
              />
              <span class="card-category-badge">${d.categoryName}</span>
              <span class="card-read-time">${d.readTime}</span>
            </div>
            <div class="card-body">
              <div class="card-location">
                <i class="fa-solid fa-location-dot"></i>
                <span>${d.location}</span>
              </div>
              <h3 class="card-title">${d.name}</h3>
              <p class="card-desc">${d.shortDesc}</p>
              <div class="card-footer">
                <span class="card-cta-link">
                  Khám phá bài viết <i class="fa-solid fa-arrow-right"></i>
                </span>
                <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 500;">
                  ${d.bestTime.split("(")[0]}
                </span>
              </div>
            </div>
          </article>
        `
        )
        .join("");

      // Gắn sự kiện click mở bài viết trọn vẹn
      grid.querySelectorAll(".destination-card").forEach((card) => {
        card.addEventListener("click", () => {
          const slug = card.getAttribute("data-slug");
          window.location.hash = `#/diem-den/${slug}`;
        });

        // Hiệu ứng nghiêng 3D (Tilt) nhẹ trên desktop
        if (!window.matchMedia("(pointer: coarse)").matches) {
          card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -4;
            const rotateY = ((x - centerX) / centerX) * 4;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
          });

          card.addEventListener("mouseleave", () => {
            card.style.transform = "";
          });
        }
      });

      // Kích hoạt animation xuất hiện
      setTimeout(() => {
        grid.querySelectorAll(".reveal-on-scroll").forEach((el) => el.classList.add("revealed"));
      }, 50);
    };

    renderDestinations("all");

    // Xử lý chuyển tab bộ lọc
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const category = btn.getAttribute("data-filter");
        renderDestinations(category);
      });
    });
  };

  // ============================================================================
  // 8. CAROUSEL ẨM THỰC ĐẶC SẢN
  // ============================================================================
  const initCuisineCarousel = () => {
    const track = document.getElementById("cuisine-track");
    const prevBtn = document.getElementById("btn-cuisine-prev");
    const nextBtn = document.getElementById("btn-cuisine-next");
    if (!track) return;

    // Render danh sách món ăn từ data.foods
    track.innerHTML = data.foods
      .map(
        (food) => `
        <div class="cuisine-card">
          <div class="cuisine-thumb-wrap">
            <img 
              src="${food.image}" 
              alt="${food.name}" 
              class="cuisine-thumb" 
              loading="lazy" 
              referrerpolicy="no-referrer"
            />
          </div>
          <div class="cuisine-content">
            <span class="cuisine-category">${food.category}</span>
            <h3 class="cuisine-name">${food.name}</h3>
            <p class="cuisine-desc">${food.description}</p>
            <div class="cuisine-price">${food.priceRange}</div>
            <div class="cuisine-address">
              <i class="fa-solid fa-map-pin"></i> ${food.origin}
            </div>
          </div>
        </div>
      `
      )
      .join("");

    const scrollAmount = 360;

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        track.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    }

    // Hỗ trợ kéo chuột kéo thả (Mouse drag scroll)
    let isDown = false;
    let startX;
    let scrollLeft;

    track.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    });
    track.addEventListener("mouseleave", () => {
      isDown = false;
    });
    track.addEventListener("mouseup", () => {
      isDown = false;
    });
    track.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.5;
      track.scrollLeft = scrollLeft - walk;
    });
  };

  // ============================================================================
  // 9. DÒNG THỜI GIAN LỄ HỘI & VĂN HÓA (TIMELINE)
  // ============================================================================
  const initFestivalsTimeline = () => {
    const container = document.getElementById("festivals-timeline");
    if (!container) return;

    container.innerHTML = data.festivals
      .map(
        (fest) => `
        <div class="timeline-item reveal-on-scroll">
          <div class="timeline-dot"></div>
          <div class="timeline-card">
            <span class="timeline-time">${fest.time}</span>
            <h3 class="timeline-title">${fest.name}</h3>
            <div class="timeline-location">
              <i class="fa-solid fa-location-dot"></i> ${fest.location}
            </div>
            <p class="timeline-desc">${fest.desc}</p>
          </div>
        </div>
      `
      )
      .join("");
  };

  // ============================================================================
  // 10. LỊCH TRÌNH GỢI Ý & MODAL LỊCH TRÌNH CHI TIẾT
  // ============================================================================
  const initItineraries = () => {
    const grid = document.getElementById("itineraries-grid");
    const modal = document.getElementById("itinerary-modal");
    const modalDialog = document.getElementById("itinerary-modal-dialog");
    if (!grid) return;

    grid.innerHTML = data.itineraries
      .map(
        (it) => `
        <div class="itinerary-card reveal-on-scroll">
          <span class="itinerary-duration-badge">${it.duration}</span>
          <h3 class="itinerary-title">${it.title}</h3>
          <div class="itinerary-target"><i class="fa-solid fa-users"></i> Phù hợp: ${it.suitableFor}</div>
          <p class="itinerary-highlight">${it.highlight}</p>
          <button class="btn-itinerary-detail" data-id="${it.id}">
            Chi tiết từng ngày <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      `
      )
      .join("");

    // Sự kiện mở modal chi tiết lịch trình
    grid.querySelectorAll(".btn-itinerary-detail").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const itinerary = data.itineraries.find((item) => item.id === id);
        if (!itinerary || !modal || !modalDialog) return;

        modalDialog.innerHTML = `
          <button class="modal-close-btn" id="btn-close-itinerary-modal"><i class="fa-solid fa-xmark"></i></button>
          <span class="itinerary-duration-badge">${itinerary.duration}</span>
          <h2 style="font-family: var(--font-heading); font-size: 1.8rem; margin: 12px 0 8px; color: var(--dark);">${itinerary.title}</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 24px;">${itinerary.highlight}</p>
          
          <div class="modal-schedule-list">
            ${itinerary.schedule
              .map(
                (day) => `
              <div class="day-schedule-card">
                <h3 class="day-schedule-title">${day.day}</h3>
                <div>
                  ${day.activities
                    .map(
                      (act) => `
                    <div class="day-activity-item">
                      <i class="fa-regular fa-clock" style="color: var(--primary); margin-top: 4px;"></i>
                      <span>${act}</span>
                    </div>
                  `
                    )
                    .join("")}
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        `;

        modal.classList.add("open");
        document.body.style.overflow = "hidden";

        document.getElementById("btn-close-itinerary-modal").addEventListener("click", () => {
          modal.classList.remove("open");
          document.body.style.overflow = "";
        });
      });
    });

    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.classList.remove("open");
          document.body.style.overflow = "";
        }
      });
    }
  };

  // ============================================================================
  // 11. CẨM NANG DU LỊCH BENTO GRID
  // ============================================================================
  const initTravelGuide = () => {
    const seasonsContainer = document.getElementById("guide-seasons");
    const transportContainer = document.getElementById("guide-transport");
    const stayContainer = document.getElementById("guide-stay");
    const tipsContainer = document.getElementById("guide-tips");

    if (seasonsContainer) {
      seasonsContainer.innerHTML = data.travelGuide.seasons
        .map(
          (s) => `
          <div class="guide-list-item">
            <h4>${s.title}</h4>
            <p>${s.desc}</p>
          </div>
        `
        )
        .join("");
    }

    if (transportContainer) {
      transportContainer.innerHTML = data.travelGuide.transportation
        .map(
          (t) => `
          <div class="guide-list-item">
            <h4>${t.type}</h4>
            <p>${t.desc}</p>
          </div>
        `
        )
        .join("");
    }

    if (stayContainer) {
      stayContainer.innerHTML = data.travelGuide.stays
        .map(
          (s) => `
          <div class="guide-list-item">
            <h4>${s.type}</h4>
            <p>${s.desc}</p>
          </div>
        `
        )
        .join("");
    }

    if (tipsContainer) {
      tipsContainer.innerHTML = data.travelGuide.tips
        .map(
          (tip) => `
          <li style="margin-bottom: 12px; display: flex; align-items: flex-start; gap: 8px;">
            <i class="fa-solid fa-check" style="color: var(--primary); margin-top: 4px;"></i>
            <span style="font-size: 0.92rem; color: #334E68;">${tip}</span>
          </li>
        `
        )
        .join("");
    }
  };

  // ============================================================================
  // 12. THƯ VIỆN ẢNH NGHỆ THUẬT & LIGHTBOX
  // ============================================================================
  const initGalleryAndLightbox = () => {
    const grid = document.getElementById("gallery-grid");
    const lightbox = document.getElementById("lightbox-modal");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const closeBtn = document.getElementById("lightbox-close");
    const prevBtn = document.getElementById("lightbox-prev");
    const nextBtn = document.getElementById("lightbox-next");

    if (!grid || !lightbox) return;

    activeGalleryList = data.gallery;

    grid.innerHTML = activeGalleryList
      .map(
        (item, index) => `
        <div class="gallery-item reveal-on-scroll" data-index="${index}">
          <img 
            src="${item.image}" 
            alt="${item.title}" 
            class="gallery-img" 
            loading="lazy" 
            referrerpolicy="no-referrer"
          />
          <div class="gallery-overlay">
            <div class="gallery-caption">${item.title}</div>
          </div>
        </div>
      `
      )
      .join("");

    const openLightbox = (index, list = data.gallery) => {
      activeGalleryList = list;
      currentGalleryIndex = index;
      const current = activeGalleryList[currentGalleryIndex];
      if (!current) return;

      lightboxImg.src = current.image;
      lightboxCaption.innerText = current.title || "";
      lightbox.classList.add("open");
      document.body.style.overflow = "hidden";
    };

    const updateLightboxImage = () => {
      const current = activeGalleryList[currentGalleryIndex];
      if (!current) return;
      lightboxImg.src = current.image;
      lightboxCaption.innerText = current.title || "";
    };

    grid.querySelectorAll(".gallery-item").forEach((item) => {
      item.addEventListener("click", () => {
        const idx = parseInt(item.getAttribute("data-index"), 10);
        openLightbox(idx, data.gallery);
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove("open");
      document.body.style.overflow = "";
    };

    if (closeBtn) closeBtn.addEventListener("click", closeLightbox);

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        currentGalleryIndex = (currentGalleryIndex - 1 + activeGalleryList.length) % activeGalleryList.length;
        updateLightboxImage();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        currentGalleryIndex = (currentGalleryIndex + 1) % activeGalleryList.length;
        updateLightboxImage();
      });
    }

    // Điều khiển bằng bàn phím (Mũi tên & Esc)
    window.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft" && prevBtn) prevBtn.click();
      if (e.key === "ArrowRight" && nextBtn) nextBtn.click();
    });

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    // Cho phép các module khác gọi mở lightbox
    window.openCustomLightbox = openLightbox;
  };

  // ============================================================================
  // 13. FORM ĐĂNG KÝ NHẬN TIN & THÔNG BÁO TOAST
  // ============================================================================
  const initNewsletterAndToast = () => {
    const form = document.getElementById("newsletter-form");
    const input = document.getElementById("newsletter-email");

    const showToast = (message, icon = "fa-circle-check") => {
      let toastContainer = document.querySelector(".toast-container");
      if (!toastContainer) {
        toastContainer = document.createElement("div");
        toastContainer.className = "toast-container";
        document.body.appendChild(toastContainer);
      }

      const toast = document.createElement("div");
      toast.className = "toast-message";
      toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
      toastContainer.appendChild(toast);

      setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 300);
      }, 3500);
    };

    window.showAppToast = showToast;

    if (form && input) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = input.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !emailRegex.test(email)) {
          showToast("Vui lòng nhập địa chỉ email hợp lệ!", "fa-triangle-exclamation");
          return;
        }

        showToast("Cảm ơn bạn! Đăng ký nhận cẩm nang du lịch Thanh Hóa thành công.");
        input.value = "";
      });
    }
  };

  // ============================================================================
  // 14. TRANG / MODAL BÀI VIẾT CHI TIẾT (FULL ARTICLE VIEW & ROUTER)
  // ============================================================================
  const initArticleViewAndRouter = () => {
    const overlay = document.getElementById("article-overlay");
    const backBtn = document.getElementById("btn-back-home");
    const shareFbBtn = document.getElementById("btn-share-fb");
    const shareZaloBtn = document.getElementById("btn-share-zalo");
    const shareCopyBtn = document.getElementById("btn-share-copy");

    if (!overlay) return;

    // Đóng trang bài viết và trở về trang chủ
    const closeArticle = () => {
      overlay.classList.remove("open");
      document.body.style.overflow = "";
      window.location.hash = "";
      document.title = "Du lịch Thanh Hóa - Nơi Biển Xanh Gặp Núi Rừng";
    };

    if (backBtn) backBtn.addEventListener("click", closeArticle);

    // Mở và render bài viết hoàn chỉnh từ Slug
    const openArticle = (slug) => {
      const dest = data.destinations.find((d) => d.slug === slug);
      if (!dest) {
        console.warn("Không tìm thấy điểm đến:", slug);
        return;
      }

      // 1. Cập nhật Meta Title và SEO động
      document.title = `${dest.name} - Cẩm Nang Du Lịch Thanh Hóa Đầy Đủ Chi Tiết`;

      // 2. Render Hero Cover
      const coverImg = document.getElementById("article-cover-img");
      const titleMain = document.getElementById("article-title-main");
      const subtitleMain = document.getElementById("article-subtitle-main");
      const categoryTag = document.getElementById("article-category-tag");
      const readTime = document.getElementById("article-read-time");

      if (coverImg) coverImg.src = dest.coverImage;
      if (titleMain) titleMain.innerText = dest.name;
      if (subtitleMain) subtitleMain.innerText = dest.subtitle;
      if (categoryTag) categoryTag.innerText = dest.categoryName;
      if (readTime) readTime.innerText = dest.readTime;

      // 3. Render Quick Info Box
      const quickInfoBox = document.getElementById("article-quick-info");
      if (quickInfoBox) {
        quickInfoBox.innerHTML = `
          <div class="info-item">
            <div class="info-icon"><i class="fa-solid fa-map-location-dot"></i></div>
            <div>
              <div class="info-label">Địa chỉ hành chính</div>
              <div class="info-value">${dest.location}</div>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon"><i class="fa-solid fa-clock"></i></div>
            <div>
              <div class="info-label">Giờ mở cửa</div>
              <div class="info-value">${dest.openingHours}</div>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon"><i class="fa-solid fa-ticket"></i></div>
            <div>
              <div class="info-label">Giá vé tham quan</div>
              <div class="info-value">${dest.ticketPrice}</div>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon"><i class="fa-solid fa-sun"></i></div>
            <div>
              <div class="info-label">Thời điểm lý tưởng</div>
              <div class="info-value">${dest.bestTime}</div>
            </div>
          </div>
        `;
      }

      // 4. Render Nội dung bài viết đầy đủ (Article Body)
      const contentContainer = document.getElementById("article-content-container");
      if (contentContainer) {
        contentContainer.innerHTML = `
          ${dest.content}

          <!-- Album ảnh trong bài -->
          <div class="article-gallery-section">
            <h3 style="font-family: var(--font-heading); font-size: 1.4rem; margin-bottom: 16px;">
              Khoảnh khắc đẹp tại ${dest.name}
            </h3>
            <div class="article-gallery-grid">
              ${dest.gallery
                .map(
                  (imgSrc, gIdx) => `
                <div class="article-gallery-item" data-img="${imgSrc}">
                  <img src="${imgSrc}" alt="${dest.name}" loading="lazy" />
                </div>
              `
                )
                .join("")}
            </div>
          </div>

          <!-- Bản đồ chỉ đường -->
          <div class="article-map-section">
            <h3 style="font-family: var(--font-heading); font-size: 1.4rem; margin-bottom: 16px;">
              Vị trí trên bản đồ vệ tinh
            </h3>
            <div class="article-map-wrap">
              <iframe 
                src="${dest.mapEmbedUrl}" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>

          <!-- Điểm đến cùng chuyên mục gợi ý -->
          <div class="related-destinations-section">
            <h3 style="font-family: var(--font-heading); font-size: 1.5rem; color: var(--dark); margin-bottom: 8px;">
              Điểm đến cùng hành trình
            </h3>
            <p style="color: var(--text-muted); font-size: 0.95rem;">Gợi ý các địa danh nổi bật lân cận bạn không nên bỏ lỡ</p>
            <div class="related-grid" id="related-grid"></div>
          </div>
        `;

        // Gắn sự kiện click mở Lightbox cho ảnh trong bài viết
        contentContainer.querySelectorAll(".article-gallery-item").forEach((gItem) => {
          gItem.addEventListener("click", () => {
            const list = dest.gallery.map((g) => ({ image: g, title: dest.name }));
            if (window.openCustomLightbox) {
              window.openCustomLightbox(0, list);
            }
          });
        });

        // Render 3 điểm đến liên quan
        const relatedGrid = document.getElementById("related-grid");
        if (relatedGrid) {
          const related = data.destinations
            .filter((d) => d.id !== dest.id && (d.category === dest.category || true))
            .slice(0, 3);

          relatedGrid.innerHTML = related
            .map(
              (r) => `
              <div class="destination-card" data-slug="${r.slug}">
                <div class="card-media-wrap" style="aspect-ratio: 16 / 9;">
                  <img src="${r.coverImage}" alt="${r.name}" class="card-media" loading="lazy" />
                  <span class="card-category-badge">${r.categoryName}</span>
                </div>
                <div class="card-body" style="padding: 16px;">
                  <h4 style="font-family: var(--font-heading); font-size: 1.15rem; margin-bottom: 8px; color: var(--dark);">${r.name}</h4>
                  <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 12px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${r.shortDesc}</p>
                  <span style="font-size: 0.85rem; color: var(--primary); font-weight: 600;">Xem chi tiết &rarr;</span>
                </div>
              </div>
            `
            )
            .join("");

          relatedGrid.querySelectorAll(".destination-card").forEach((rc) => {
            rc.addEventListener("click", () => {
              const rSlug = rc.getAttribute("data-slug");
              window.location.hash = `#/diem-den/${rSlug}`;
              overlay.scrollTo({ top: 0, behavior: "smooth" });
            });
          });
        }
      }

      // 5. Tự động sinh Mục lục (Table of Contents - TOC) từ các thẻ h2
      const tocList = document.getElementById("article-toc-list");
      if (tocList && contentContainer) {
        const headings = contentContainer.querySelectorAll(".article-body h2");
        tocList.innerHTML = "";
        headings.forEach((heading, hIdx) => {
          const headingId = `heading-section-${hIdx}`;
          heading.id = headingId;

          const tocItem = document.createElement("a");
          tocItem.className = "toc-link";
          tocItem.href = `#${headingId}`;
          tocItem.innerText = heading.innerText;
          tocItem.addEventListener("click", (e) => {
            e.preventDefault();
            heading.scrollIntoView({ behavior: "smooth" });
          });
          tocList.appendChild(tocItem);
        });
      }

      // Mở overlay và cuộn lên đầu bài
      overlay.classList.add("open");
      overlay.scrollTo({ top: 0, behavior: "auto" });
      document.body.style.overflow = "hidden";
    };

    // Bắt sự kiện chia sẻ
    if (shareCopyBtn) {
      shareCopyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
          if (window.showAppToast) {
            window.showAppToast("Đã sao chép liên kết bài viết vào bộ nhớ đệm!");
          }
        });
      });
    }

    if (shareFbBtn) {
      shareFbBtn.addEventListener("click", () => {
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
          "_blank"
        );
      });
    }

    if (shareZaloBtn) {
      shareZaloBtn.addEventListener("click", () => {
        window.open(
          `https://sp.zalo.me/share?url=${encodeURIComponent(window.location.href)}`,
          "_blank"
        );
      });
    }

    // Bắt phím Esc để đóng bài viết
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay.classList.contains("open")) {
        closeArticle();
      }
    });

    // Lắng nghe thay đổi Hash URL (Router)
    const handleHashRoute = () => {
      const hash = window.location.hash;
      const match = hash.match(/^#\/diem-den\/([a-z0-9-]+)$/);
      if (match && match[1]) {
        openArticle(match[1]);
      } else if (!hash || hash === "#") {
        if (overlay.classList.contains("open")) {
          closeArticle();
        }
      }
    };

    window.addEventListener("hashchange", handleHashRoute);
    handleHashRoute(); // Kiểm tra khi tải trang ban đầu
  };

  // ============================================================================
  // 15. HIỆU ỨNG REVEAL KHI CUỘN TRANG (INTERSECTION OBSERVER)
  // ============================================================================
  const initScrollReveals = () => {
    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    if (!revealElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((el) => observer.observe(el));
  };

  // ============================================================================
  // KHỞI CHẠY TẤT CẢ CÁC MODULE
  // ============================================================================
  initIntroScreen();
  initCustomCursor();
  initHeaderAndNav();
  initHeroSliderAndSearch();
  initCounters();
  initDestinationsSection();
  initCuisineCarousel();
  initFestivalsTimeline();
  initItineraries();
  initTravelGuide();
  initGalleryAndLightbox();
  initNewsletterAndToast();
  initArticleViewAndRouter();
  initScrollReveals();
});
