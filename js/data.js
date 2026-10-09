/**
 * ==============================================================================
 * DỮ LIỆU CỔNG DU LỊCH TỈNH THANH HÓA (data.js)
 * Cung cấp thông tin chi tiết các điểm đến, bài viết hoàn chỉnh, ẩm thực,
 * lễ hội truyền thống, lịch trình gợi ý và cẩm nang du lịch.
 * ==============================================================================
 */

window.ThanhHoaData = {
  // 1. Thống kê nhanh giới thiệu Thanh Hóa
  overviewStats: [
    { number: 102, suffix: "km", label: "Đường bờ biển cát vàng thoai thoải" },
    { number: 1535, suffix: "+", label: "Di tích lịch sử - văn hóa danh lam" },
    { number: 1, suffix: "", label: "Di sản Văn hóa Thế giới UNESCO (Thành Nhà Hồ)" },
    { number: 7, suffix: "", label: "Dân tộc anh em cùng chung sống hòa hợp" }
  ],

  // 2. Danh sách 10 điểm đến trọng điểm với bài viết trọn vẹn (700 - 1000 từ mỗi bài)
  destinations: [
    {
      id: "sam-son",
      slug: "bien-sam-son",
      name: "Biển Sầm Sơn",
      subtitle: "Bản tình ca sóng biển miền nhiệt đới bên dãy Trường Lệ thơ mộng",
      category: "bien-dao",
      categoryName: "Biển đảo",
      location: "phường Sầm Sơn, tỉnh Thanh Hóa",
      shortDesc: "Bãi biển nghỉ dưỡng trứ danh bậc nhất Bắc Trung Bộ với bãi cát thoai thoải, sóng vỗ êm dịu cùng quần thể di tích núi Trường Lệ linh thiêng.",
      coverImage: "assets/images/sam-son.jpg",
      gallery: [
        "assets/images/sam-son.jpg",
        "assets/images/hai-tien.jpg",
        "assets/images/hon-me.jpg"
      ],
      bestTime: "Tháng 4 – Tháng 8 (mùa biển hè lộng gió)",
      ticketPrice: "Miễn phí vé tắm biển",
      openingHours: "Mở cửa tự do 24/7",
      howToGetThere: "Cách TP. Thanh Hóa 16km về phía Đông; từ Hà Nội đi cao tốc Bắc Nam chỉ mất 1h45 phút theo nút giao QL47.",
      highlights: [
        "Bãi cát thoai thoải dài hơn 6km với độ dốc vừa phải, nước biển trong xanh giàu khoáng chất",
        "Di tích danh thắng quốc gia núi Trường Lệ: Đền Độc Cước, Đền Cô Tiên, Hòn Trống Mái",
        "Tổ hợp vui chơi giải trí Sun World Sam Son và quần thể nghỉ dưỡng biển FLC Sam Son Beach & Golf Resort",
        "Ngắm bình minh rực rỡ và trải nghiệm chợ hải sản tươi sống họp ngay trên mép nước lúc bình minh"
      ],
      foods: ["Gỏi cá nhệch", "Mực nháy nướng than hoa", "Cua ghẹ hấp xả", "Nem chua Thanh Hóa"],
      tips: [
        "Nên tắm vào sáng sớm hoặc sau 16h chiều để tránh nắng gắt mùa hè.",
        "Nên hỏi giá niêm yết trước khi sử dụng dịch vụ dù các bãi biển đã quy hoạch rất chuẩn chỉ.",
        "Đừng quên leo lên Hòn Trống Mái vào sáng sớm để đón luồng gió biển tinh khiết và chụp ảnh sống ảo."
      ],
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.492576974102!2d105.8998822!3d19.7427845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136511a2f6fb39f%3A0xe4ca73f98c6cb4f1!2zQsOjaSBiaeG7g24gU-G6p20gU8ahbg!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s",
      readTime: "7 phút đọc",
      content: `
        <div class="article-body">
          <p class="lead-text">
            Nằm thoai thoải bên bờ vịnh Bắc Bộ với dải cát vàng mịn màng trải dài hơn 6 cây số, <strong>Biển Sầm Sơn</strong> từ hơn một thế kỷ trước đã được người Pháp tôn vinh là chốn nghỉ dưỡng lý tưởng bậc nhất xứ Đông Dương. Nơi đây không chỉ có làn nước mát lành và những con sóng bạc đầu tràn đầy sinh lực, mà còn ôm trọn trong lòng dãy núi Trường Lệ huyền thoại với những câu chuyện cổ tích thấm đượm tình người.
          </p>

          <h2>1. Giới thiệu tổng quan về thiên đường biển Sầm Sơn</h2>
          <p>
            Biển Sầm Sơn tọa lạc tại phường Sầm Sơn, tỉnh Thanh Hóa, cách trung tâm thành phố Thanh Hóa chừng 16km và cách thủ đô Hà Nội chỉ khoảng 160km. Bãi tắm Sầm Sơn được thiên nhiên ưu ái chia thành 4 phân khu A, B, C, D nối liền nhau, phù hợp với mọi lứa tuổi và nhu cầu nghỉ dưỡng. Bãi A dốc thoai thoải, sóng êm với những rặng dừa xanh mướt; bãi B thích hợp cho các hoạt động tắm biển gia đình; bãi C và D sôi động với chuỗi nhà hàng ven biển, quán cà phê đón gió và các môn thể thao nước mạo hiểm như mô tô nước, dù bay.
          </p>
          <p>
            Về mặt địa hình, sự kết hợp độc đáo giữa bờ cát mịn thoai thoải và núi đá Trường Lệ nhô hẳn ra biển đã tạo nên một bức tranh sơn thủy hữu tình hiếm có. Không khí tại Sầm Sơn luôn mang vị mặn mòi tràn đầy năng lượng tươi mới, giúp xua tan mọi mỏi mệt của nhịp sống đô thị.
          </p>

          <h2>2. Lịch sử và truyền thuyết nghìn năm bên bờ sóng</h2>
          <p>
            Vào năm 1906, các chuyên gia khí tượng và y tế người Pháp sau nhiều đợt khảo sát bờ biển miền Trung đã chính thức khẳng định Sầm Sơn là nơi có điều kiện khí hậu điều dưỡng lý tưởng nhất Đông Dương nhờ hàm lượng muối khoáng cân bằng và nồng độ ozone cao. Hàng loạt biệt thự nghỉ dưỡng cổ kính của quan chức Pháp và Hoàng gia Triều Nguyễn xưa kia đã được xây dựng dọc sườn núi Trường Lệ.
          </p>
          <p>
            Gắn liền với Sầm Sơn là những huyền tích dân gian rung động lòng người. Nổi tiếng nhất là sự tích <em>Hòn Trống Mái</em> - tượng trưng cho mối tình thủy chung sắt son vượt qua giông bão của đôi vợ chồng nghèo nguyện hóa thành đá để mãi mãi bên nhau. Bên cạnh đó là <em>Đền Độc Cước</em> - nơi thờ vị thần khổng lồ xẻ đôi thân mình, một nửa ở lại đất liền canh giữ mùa màng, một nửa vươn ra biển khơi đánh đuổi thủy quái bảo vệ ngư dân làng chài.
          </p>

          <h2>3. Những điểm nhấn không thể bỏ lỡ khi ghé thăm</h2>
          <h3>Núi Trường Lệ và quần thể di tích tâm linh</h3>
          <p>
            Cung đường uốn lượn ven sườn núi Trường Lệ rợp bóng thông xanh reo vi vu sẽ dẫn bạn đến Đền Độc Cước ngự trên đỉnh Cổ Rùa chênh vênh mép sóng. Tiếp đó là Đền Cô Tiên - nơi du khách cầu bình an và may mắn, và dừng chân tại Hòn Trống Mái để chiêm ngưỡng kiệt tác điêu khắc của tạo hóa.
          </p>
          <h3>Quảng trường biển và tổ hợp Sun World Sam Son</h3>
          <p>
            Hiện nay, Sầm Sơn khoác lên mình diện mạo của một đô thị du lịch thông minh, văn minh và hiện đại. Quảng trường biển rộng lớn với trục đại lộ lễ hội, đài phun nước nghệ thuật ánh sáng và công viên nước giải trí quy mô quốc tế Sun World Sam Son tạo nên chuỗi trải nghiệm bất tận suốt ngày đêm.
          </p>
          <h3>Bình minh làng chài và chợ hải sản trên cát</h3>
          <p>
            Hãy thức giấc lúc 5 giờ sáng để bước chân trần trên cát mát rượi, ngắm vầng mặt trời đỏ ối nhô lên từ chân trời. Khi những chiếc thuyền nan, bè mảng cập bờ, bạn sẽ được hòa mình vào không khí mua bán hải sản tươi rói nhộn nhịp của ngư dân bản địa - một trải nghiệm văn hóa vô cùng sống động.
          </p>

          <h2>4. Thời điểm lý tưởng để du lịch Sầm Sơn</h2>
          <p>
            Thời điểm tuyệt vời nhất để du ngoạn Sầm Sơn là từ <strong>tháng 4 đến tháng 8 hàng năm</strong>. Lúc này trời trong, nắng vàng giòn rã, biển xanh ngắt và sóng êm dịu rất thích hợp cho các hoạt động tắm biển và vui chơi ngoài trời. Nếu yêu thích sự tĩnh lặng, bạn cũng có thể ghé thăm Sầm Sơn vào mùa thu (tháng 9 - tháng 10) để tận hưởng không gian biển vắng lãng mạn và thưởng thức hải sản mùa béo ngậy.
          </p>

          <h2>5. Hướng dẫn đường đi thuận tiện nhất</h2>
          <p>
            Nhờ tuyến cao tốc Bắc - Nam đoạn Mai Sơn - Quốc lộ 45 đã hoàn thành, hành trình từ Hà Nội về Sầm Sơn chỉ còn vỏn vẹn <strong>1 giờ 45 phút</strong> đi ô tô cá nhân hoặc xe khách Limousine chất lượng cao. Nếu đi bằng tàu hỏa, bạn dừng tại Ga Thanh Hóa, sau đó đón xe buýt tuyến số 01 hoặc taxi chừng 20 phút là tới trung tâm bãi biển. Đối với du khách từ miền Nam hoặc Tây Nguyên, các chuyến bay thẳng hạ cánh xuống Cảng hàng không Thọ Xuân chỉ cách Sầm Sơn khoảng 45km đường nhựa thông thoáng.
          </p>

          <h2>6. Thưởng thức phong vị ẩm thực biển</h2>
          <p>
            Đến Sầm Sơn, bạn nhất định phải nếm thử món <em>gỏi cá nhệch</em> cuốn lá sung chấm chẻo cay nồng đậm đà; mực trứng hấp gừng giòn ngọt; cua ghẹ hấp sả gạch son; hàu nướng mỡ hành thơm nức; và không thể thiếu những phong nem chua Thanh Hóa thơm giòn làm quà biếu đầy ý nghĩa.
          </p>

          <h2>7. Kinh nghiệm thực tế và lưu ý quan trọng</h2>
          <ul>
            <li>Tất cả các cơ sở kinh doanh dịch vụ tại Sầm Sơn đều bắt buộc niêm yết giá công khai theo quy định của chính quyền địa phương, du khách hoàn toàn an tâm sử dụng dịch vụ.</li>
            <li>Hãy chuẩn bị kem chống nắng, kính râm và áo khoác mỏng nếu đi dạo biển đêm gió lộng.</li>
            <li>Khi tắm biển, vui lòng tuân thủ biển cảnh báo của đội cứu hộ và không bơi vượt khỏi phao giới hạn an toàn.</li>
          </ul>
        </div>
      `
    },
    {
      id: "pu-luong",
      slug: "khu-bao-ton-pu-luong",
      name: "Khu bảo tồn thiên nhiên Pù Luông",
      subtitle: "Xứ sở mây ngàn, ruộng bậc thang dát vàng và bản làng người Thái yên bình",
      category: "nui-rung",
      categoryName: "Núi rừng",
      location: "xã Thành Lâm, tỉnh Thanh Hóa",
      shortDesc: "Chốn bồng lai tiên cảnh giữa đại ngàn miền Tây xứ Thanh, nổi bật với ruộng bậc thang trập trùng, suối thác mát lạnh và những nếp nhà sàn mộc mạc.",
      coverImage: "assets/images/pu-luong.jpg",
      gallery: [
        "assets/images/pu-luong.jpg",
        "assets/images/ben-en.jpg",
        "assets/images/cam-luong.jpg"
      ],
      bestTime: "Tháng 5 - 6 (vụ chiêm) và Tháng 9 - 10 (mùa lúa chín vàng ươm)",
      ticketPrice: "Miễn phí tham quan bản làng (một số điểm suối thác thu vé 10.000đ - 20.000đ)",
      openingHours: "Mở cửa quanh năm",
      howToGetThere: "Cách TP. Thanh Hóa 130km về phía Tây Bắc, đi theo QL217 hoặc QL15 qua thị trấn Cành Nàng.",
      highlights: [
        "Thung lũng ruộng bậc thang Bản Đôn, Bản Hiêu, Bản Kho Mường rực rỡ vào mùa lúa chín",
        "Thác Hiêu hùng vĩ với dòng nước nguồn trong vắt có khả năng vôi hóa cây cối kỳ thú",
        "Guồng nước khổng lồ (cọn nước) bên bờ suối Chăm - kiệt tác cơ học dân gian người Thái",
        "Hệ sinh thái rừng nguyên sinh nhiệt đới trên núi đá vôi với hệ động thực vật quý hiếm bậc nhất"
      ],
      foods: ["Vịt Cổ Lũng nướng than", "Cá suối nướng úp gắp", "Cơm lam nếp nương", "Măng đắng xào thịt lợn mán"],
      tips: [
        "Nên đặt phòng homestay hoặc resort sinh thái trước 1-2 tháng nếu đi vào mùa lúa chín cao điểm tháng 10.",
        "Nên thuê xe máy tại homestay để tự do luồn lách qua các con đường dốc quanh co ngắm lúa.",
        "Buổi sáng nhớ dậy sớm đón biển mây trắng bồng bềnh ùa qua ô cửa sổ nhà sàn."
      ],
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.896740683457!2d105.1582236!3d20.4789531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31346bebb92b5133%3A0x6b4a3cce8c5a472c!2zS2h1IELhuqNvIFThu5NuIFRoacOqbiBOaGnDqm4gUMO5IEx1w7RuZw!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s",
      readTime: "8 phút đọc",
      content: `
        <div class="article-body">
          <p class="lead-text">
            Cách xa ồn ào khói bụi của chốn thị thành, <strong>Khu bảo tồn thiên nhiên Pù Luông</strong> (theo tiếng địa phương của đồng bào Thái có nghĩa là <em>“đỉnh núi cao nhất vùng”</em>) mở ra như một bức tranh thủy mặc ngút ngàn xanh. Nơi đây quyến rũ lữ khách bởi những dải ruộng bậc thang tầng tầng lớp lớp uốn lượn ôm lấy sườn núi, làn sương sớm bảng lảng và tiếng suối róc rách reo vui giữa bản làng đồng bào Thái, Mường mến khách.
          </p>

          <h2>1. Giới thiệu chốn thiên đường sinh thái Pù Luông</h2>
          <p>
            Nằm trên địa bàn xã Thành Lâm cùng các xã lân cận thuộc miền Tây tỉnh Thanh Hóa, Pù Luông trải rộng trên diện tích hơn 17.600 ha. Nhờ địa hình thung lũng đá vôi khép kín ở độ cao từ 600m đến 1.700m so với mực nước biển, nơi đây sở hữu nền vi khí hậu ôn đới mát mẻ quanh năm, nhiệt độ mùa hè luôn thấp hơn vùng đồng bằng từ 3 đến 5 độ C.
          </p>
          <p>
            Pù Luông không chỉ là khu bảo tồn hệ sinh thái rừng trên núi đá vôi có giá trị toàn cầu với hàng trăm loài động thực vật quý hiếm nằm trong Sách Đỏ, mà còn là bức tranh sinh hoạt văn hóa độc đáo nơi đồng bào các dân tộc thiểu số bao đời gắn bó keo sơn với thiên nhiên.
          </p>

          <h2>2. Bức tranh văn hóa và nhịp sống vùng cao</h2>
          <p>
            Đến Pù Luông, hình ảnh quen thuộc lay động lòng người chính là những nếp nhà sàn lợp mái cọ mộc mạc nép mình bên triền đồi, làn khói lam chiều bảng lảng quyện vào sương núi. Người Thái ở Pù Luông nổi tiếng thuần hậu, hiếu khách và giữ gìn trọn vẹn những nét văn hóa ngàn xưa: từ nghề dệt thổ cẩm rực rỡ hoa văn, điệu xòe nồng say bên chén rượu cần, đến kỹ nghệ dựng cọn nước dẫn nguồn tưới mát cho mùa màng bội thu.
          </p>

          <h2>3. Những điểm đến mê hoặc lòng người ở Pù Luông</h2>
          <h3>Bản Đôn - Trái tim ruộng bậc thang</h3>
          <p>
            Bản Đôn được coi là tâm điểm ngắm cảnh ngoạn mục nhất Pù Luông. Từ ban công các khu nghỉ dưỡng sinh thái hay hiên nhà sàn, bạn có thể phóng tầm mắt bao quát toàn bộ thung lũng lúa chín óng ả, phía xa là những rặng núi đá trập trùng ẩn hiện trong mây.
          </p>
          <h3>Bản Hiêu và dòng thác nước chuyển màu</h3>
          <p>
            Thác Hiêu bắt nguồn từ sâu trong dãy núi đá vôi Pù Luông, đổ xuống những ghềnh đá nhiều tầng bậc tạo nên dòng nước mát lạnh quanh năm. Điểm kỳ lạ là do nước chứa lượng khoáng canxi cao nên đáy suối không hề trơn trượt mà kết tủa thành một lớp vôi hóa mộc mạc, cho phép du khách tha hồ lội suối tắm thác an toàn.
          </p>
          <h3>Bản Kho Mường và Hang Dơi kỳ vĩ</h3>
          <p>
            Nằm sâu trong một thung lũng trũng hoàn toàn biệt lập, Bản Kho Mường mang vẻ đẹp hoang sơ tựa thế giới cổ tích. Đi sâu vào bản là Hang Dơi (Hang Kho Mường) - hang đá tự nhiên khổng lồ với những khối thạch nhũ muôn hình vạn trạng và là nơi trú ngụ của hàng vạn cá thể dơi bản địa.
          </p>
          <h3>Guồng nước suối Chăm (Cọn nước)</h3>
          <p>
            Dọc đôi bờ suối Chăm, hàng chục chiếc guồng nước tre khổng lồ quay đều đặn ngày đêm không ngừng nghỉ. Đây là biểu tượng của trí tuệ lao động bản địa, mang nước từ dòng suối thấp lên những mương dẫn cao tưới tắm cho từng thửa ruộng.
          </p>

          <h2>4. Mùa vàng Pù Luông: Khi nào đẹp nhất?</h2>
          <p>
            Pù Luông mỗi năm có hai vụ lúa chín rực rỡ nhất:
          </p>
          <ul>
            <li><strong>Mùa lúa vụ Chiêm (Cuối tháng 5 - đầu tháng 6):</strong> Những thửa ruộng bậc thang chuyển từ sắc xanh non mơn mởn sang vàng ươm, tiết trời trong veo, thác nước đầy ắp.</li>
            <li><strong>Mùa lúa vụ Mùa (Tháng 9 - tháng 10):</strong> Thời điểm Pù Luông quyến rũ nhất năm. Cả thung lũng như một dải lụa vàng lấp lánh khổng lồ dệt nên giữa núi rừng, khí hậu se lạnh tuyệt đối dễ chịu.</li>
          </ul>

          <h2>5. Hướng dẫn di chuyển đến Pù Luông</h2>
          <p>
            Từ Hà Nội, bạn có thể đi theo tuyến Quốc lộ 6 qua Hòa Bình đến thị trấn Mai Châu rồi rẽ sang Quốc lộ 15C tiến vào Pù Luông (khoảng 170km, mất chừng 4 giờ chạy xe). Nếu xuất phát từ thành phố Thanh Hóa, bạn đi theo Quốc lộ 217 qua Cẩm Thủy rồi rẽ vào vùng đệm khu bảo tồn (khoảng 130km). Cung đường đèo dốc uốn lượn tuyệt đẹp nhưng đòi hỏi tay lái vững vàng.
          </p>

          <h2>6. Thưởng thức đặc sản vùng cao đại ngàn</h2>
          <p>
            Ẩm thực Pù Luông là bản hòa tấu hương vị của núi rừng. Nổi tiếng nhất là <em>vịt Cổ Lũng</em> - giống vịt xương nhỏ, thịt chắc, nạc thơm được chăn thả tự nhiên bên dòng suối mát, tẩm ướp hạt dổi rừng rồi nướng than hoa vàng giòn. Đi kèm là đĩa măng đắng chấm chẩm chéo cay xè, cá suối nướng thơm nức mũi và bát xôi ngũ sắc nếp nương dẻo quánh.
          </p>

          <h2>7. Cẩm nang và lưu ý khi trekking Pù Luông</h2>
          <ul>
            <li>Hãy mang theo giày thể thao hoặc giày leo núi chống trơn trượt có độ bám tốt để thuận tiện đi bộ trên những bờ ruộng đất dốc.</li>
            <li>Chuẩn bị thuốc chống côn trùng, xịt chống muỗi rừng và áo khoác gió mỏng vì đêm vùng cao nhiệt độ hạ thấp nhanh.</li>
            <li>Hãy là du khách văn minh: tôn trọng nếp sống sinh hoạt của đồng bào bản địa, không xả rác và không tự ý hái lúa bẻ cành.</li>
          </ul>
        </div>
      `
    },
    {
      id: "thanh-nha-ho",
      slug: "di-san-thanh-nha-ho",
      name: "Thành Nhà Hồ (Tây Đô)",
      subtitle: "Kiệt tác thành đá cổ vĩ đại - Di sản Văn hóa Thế giới được UNESCO vinh danh",
      category: "di-san",
      categoryName: "Di sản - Lịch sử",
      location: "xã Vĩnh Tiến, tỉnh Thanh Hóa",
      shortDesc: "Công trình kiến trúc quân sự bằng đá độc nhất vô nhị ở Đông Nam Á, minh chứng cho đỉnh cao kỹ nghệ xây dựng đá khối đại tảng của người Việt thế kỷ 14.",
      coverImage: "assets/images/thanh-nha-ho.jpg",
      gallery: [
        "assets/images/thanh-nha-ho.jpg",
        "assets/images/lam-kinh.jpg",
        "assets/images/ham-rong.jpg"
      ],
      bestTime: "Quanh năm (đặc biệt đẹp vào mùa thu đông từ tháng 9 đến tháng 3 mát mẻ)",
      ticketPrice: "40.000 VNĐ / người lớn; 20.000 VNĐ / trẻ em",
      openingHours: "7h30 – 17h00 hàng ngày",
      howToGetThere: "Cách TP. Thanh Hóa 45km về phía Tây Bắc, men theo QL45 hướng qua huyện Yên Định cũ đến xã Vĩnh Tiến.",
      highlights: [
        "4 cổng thành vòm cuốn bằng đá xanh nguyên khối kỳ vĩ tồn tại hơn 600 năm sương gió",
        "Kỹ thuật xây ghép đá đại tảng nặng từ 10 - 20 tấn không dùng vữa kết dính đầy bí ẩn",
        "Khu trưng bày hiện vật khảo cổ học phong phú: đạn đá thần công, gạch in chữ Hán, gốm sứ thời Hồ",
        "Di chỉ đàn tế Nam Giao trên núi Đồn Sơn - đàn tế hoàng gia trọn vẹn nhất Việt Nam"
      ],
      foods: ["Chè lam Phủ Quảng", "Bánh răng bừa", "Nem chua", "Cơm cà pháo mắm tôm"],
      tips: [
        "Nên thuê hướng dẫn viên tại điểm để nghe thuyết minh chi tiết về triều đại Hồ Quý Ly và bí ẩn xây thành.",
        "Khuôn viên thành nội rất rộng rãi, bạn có thể thuê xe điện để di chuyển tham quan 4 cổng Đông - Tây - Nam - Bắc.",
        "Nhớ nếm thử chè lam Phủ Quảng dẻo thơm cay nồng gừng tươi ngay tại cổng thành Nam."
      ],
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.195204481009!2d105.6027131!3d20.0768923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313677469a4c5ce7%3A0x7d6a5c2d3a364be7!2zVGjDoG5oIE5ow6AgSOG7kw!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s",
      readTime: "9 phút đọc",
      content: `
        <div class="article-body">
          <p class="lead-text">
            Sừng sững giữa bình nguyên trù phú của lưu vực sông Mã và sông Bưởi, <strong>Thành Nhà Hồ</strong> (còn có tên gọi là thành Tây Đô, thành An Tôn) là biểu tượng chói lọi của trí tuệ và sức mạnh quật cường của dân tộc Việt Nam. Được UNESCO chính thức ghi danh là <em>Di sản Văn hóa Thế giới</em> vào năm 2011, tòa thành đá hơn 600 năm tuổi này là công trình kiến trúc bằng đá cổ duy nhất còn sót lại ở Đông Nam Á.
          </p>

          <h2>1. Bối cảnh lịch sử ra đời tòa kinh thành bằng đá</h2>
          <p>
            Vào cuối thế kỷ 14, trước nguy cơ xâm lăng của nhà Minh và sự suy tàn của triều Trần, quyền thần Hồ Quý Ly đã quyết định dời đô từ Thăng Long (Hà Nội) về đất An Tôn (nay thuộc xã Vĩnh Tiến, tỉnh Thanh Hóa) để xây dựng một trung tâm chính trị, quân sự hiểm yếu kiên cố.
          </p>
          <p>
            Kỳ diệu thay, toàn bộ công trình kinh thành đồ sộ này chỉ được xây dựng thần tốc trong vỏn vẹn <strong>3 tháng</strong> (từ tháng giêng đến tháng 3 năm Đinh Sửu 1397). Sau khi hoàn thành, Hồ Quý Ly lên ngôi hoàng đế, lập nên vương triều Hồ và đặt quốc hiệu là Đại Ngu. Dù triều đại chỉ tồn tại 7 năm, nhưng tòa thành đá mà ông để lại đã trở thành một di sản bất tử cho muôn đời sau.
          </p>

          <h2>2. Kỹ nghệ xây dựng đá khối đại tảng đầy kinh ngạc</h2>
          <p>
            Điều khiến giới kiến trúc sư và các nhà khảo cổ học quốc tế thán phục nhất ở Thành Nhà Hồ chính là quy mô của các phiến đá và kỹ thuật ghép nối. Toàn bộ tường thành cao từ 7 đến 8 mét, chu vi hơn 3,5km được ghép từ hàng vạn khối đá vôi xanh nguyên khối, có những khối đá dài trên 6 mét và nặng tới <strong>20 tấn</strong>.
          </p>
          <p>
            Các phiến đá được đẽo gọt phẳng phiu vuông vức bốn mặt, xếp chồng khít lên nhau hoàn toàn <strong>không sử dụng vữa kết dính</strong>. Trải qua hơn 6 thế kỷ oằn mình trước mưa bom bão đạn và thiên tai khắc nghiệt, các vòm cuốn cổng thành hình bán nguyệt vẫn đứng vững như bàn thạch, các mạch ghép khít đến mức mũi dao mỏng cũng không lọt qua.
          </p>

          <h2>3. Những cấu trúc tiêu biểu cần chiêm ngưỡng</h2>
          <h3>Cổng Tiền (Cổng Nam)</h3>
          <p>
            Đây là cổng thành lớn nhất và nguyên vẹn nhất với 3 cửa vòm cuốn uy nghi. Cửa vòm giữa dành riêng cho Hoàng đế, hai cửa bên dành cho quan lại và binh lính. Đứng trước Cổng Nam, du khách như cảm nhận rõ nét bóng dáng một kinh thành vương giả rực rỡ thuở nào.
          </p>
          <h3>Ba cổng Đông, Tây, Bắc</h3>
          <p>
            Mỗi cổng đều có 1 cửa vòm cuốn bằng đá nguyên khối hướng ra các vùng đất trù phú, kết nối với hệ thống hào nước sâu bảo vệ và bức tường thành đất kiên cố bao quanh.
          </p>
          <h3>Đàn tế Nam Giao trên núi Đồn Sơn</h3>
          <p>
            Nằm cách thành Tây Đô khoảng 2,5km về phía Đông Nam, Đàn tế Nam Giao là nơi vua Hồ tế trời cầu cho quốc thái dân an. Đây là đàn tế hoàng gia còn nguyên vẹn mặt bằng và nền móng đá bậc tam cấp cổ nhất Việt Nam được phát lộ.
          </p>
          <h3>Khu trưng bày hiện vật súng thần công và đạn đá</h3>
          <p>
            Tại nhà trưng bày di sản, du khách sẽ được tận mắt chiêm ngưỡng những viên đạn đá hình cầu nhẵn bóng dùng cho loại súng thần công - sáng chế quân sự kiệt xuất của danh tướng Hồ Nguyên Trừng (con trai Hồ Quý Ly).
          </p>

          <h2>4. Thời gian thích hợp để tham quan</h2>
          <p>
            Bạn có thể ghé thăm Thành Nhà Hồ vào bất cứ mùa nào trong năm. Đẹp nhất là từ tháng 9 đến tháng 4 năm sau khi thời tiết mát mẻ, nắng nhẹ, rất thuận tiện cho việc tản bộ khám phá khuôn viên di sản rộng lớn và chụp những bức ảnh lưu niệm đậm chất hoài cổ bên cổng thành đá rêu phong.
          </p>

          <h2>5. Hướng dẫn di chuyển thuận lợi</h2>
          <p>
            Từ trung tâm TP. Thanh Hóa, bạn đi theo Quốc lộ 45 chừng 45km là tới di tích. Đường đi bằng phẳng, xe ô tô 45 chỗ lưu thông dễ dàng. Nếu di chuyển từ sân bay Thọ Xuân, khoảng cách tới Thành Nhà Hồ chỉ chừng 35km.
          </p>

          <h2>6. Thưởng thức đặc sản Chè lam Phủ Quảng</h2>
          <p>
            Đến Thành Nhà Hồ, không ai có thể bỏ qua phong vị <em>chè lam Phủ Quảng</em> - món bánh tiến vua nức tiếng của vùng đất Vĩnh Lộc xưa. Miếng chè lam dẻo thơm nếp cái hoa vàng, ngọt dịu mật mía, bùi béo lạc rang và cay nồng ấm bụng của gừng tươi già, thưởng thức cùng chén trà xanh nóng thì không gì thú bằng.
          </p>

          <h2>7. Lời khuyên hữu ích cho chuyến đi</h2>
          <ul>
            <li>Nên mang theo ô (dù) che nắng và nón lá vì khuôn viên thành nội rất rộng rãi và ít bóng cây cao che phủ.</li>
            <li>Đừng quên ghé thăm ngôi làng cổ Tây Giai nằm ngay cạnh cổng Tây thành để chiêm ngưỡng những ngôi nhà rường gỗ cổ kính hàng trăm năm tuổi.</li>
          </ul>
        </div>
      `
    },
    {
      id: "ben-en",
      slug: "vuon-quoc-gia-ben-en",
      name: "Vườn quốc gia Bến En",
      subtitle: "Hạ Long trên cạn của xứ Thanh - viên ngọc bích giữa rừng đại ngàn",
      category: "nui-rung",
      categoryName: "Núi rừng",
      location: "xã Hải Long, tỉnh Thanh Hóa",
      shortDesc: "Vùng đất sinh thái tráng lệ với hồ Sông Mực mênh mông ôm lấy 21 hòn đảo xanh biếc cùng hệ động thực vật nhiệt đới nguyên sinh trù phú.",
      coverImage: "assets/images/ben-en.jpg",
      gallery: [
        "assets/images/ben-en.jpg",
        "assets/images/pu-luong.jpg",
        "assets/images/tu-thuc.jpg"
      ],
      bestTime: "Mùa thu và mùa xuân (tháng 9 – tháng 4 khí hậu ôn hòa mát rượi)",
      ticketPrice: "40.000 VNĐ / người lớn; vé thuyền dạo hồ: 60.000 – 100.000 VNĐ / người",
      openingHours: "7h00 – 18h00 hàng ngày",
      howToGetThere: "Cách TP. Thanh Hóa 45km về phía Tây Nam theo tuyến QL45 rẽ đường tỉnh 520.",
      highlights: [
        "Du thuyền lướt trên mặt hồ Sông Mực rộng hơn 4.000 ha trong veo màu ngọc bích",
        "Khám phá 21 hòn đảo lớn nhỏ rợp bóng rừng nguyên sinh như Đảo Tình Yêu, Đảo Dừa",
        "Cây Lim ngàn năm tuổi (Cây Lim Xanh cổ thụ) - biểu tượng di sản sinh thái Bến En",
        "Trải nghiệm cắm trại camping ven hồ, chèo thuyền kayak và ngắm hoàng hôn ráng vàng lộng lẫy"
      ],
      foods: ["Cá mè sông Mực om dưa", "Gà đồi nướng mọi", "Rau sắng rừng nấu canh cua", "Thịt trâu gác bếp"],
      tips: [
        "Nên đi thuyền vào lúc sáng sớm hoặc hoàng hôn để cảm nhận trọn vẹn sự tĩnh lặng mộng mơ của hồ nước.",
        "Nếu cắm trại qua đêm, cần chuẩn bị lều bạt chống ẩm và đăng ký với ban quản lý rừng quốc gia.",
        "Đừng quên mang ống nhòm để quan sát các đàn chim hoang dã bay về tổ lúc chiều tà."
      ],
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.241328906734!2d105.5262334!3d19.6190471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136f56a0aa5e31d%3A0xe54d6fa33c30f40d!2zVsaw4budbiBRdeG7kWMgR2lhIELhur9uIEVu!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s",
      readTime: "7 phút đọc",
      content: `
        <div class="article-body">
          <p class="lead-text">
            Được mệnh danh là <em>“Vịnh Hạ Long trên cạn của xứ Thanh”</em>, <strong>Vườn quốc gia Bến En</strong> hiện lên như một thế giới cổ tích kỳ diệu nơi thiên nhiên hòa quyện giữa non xanh nước biếc. Với mặt hồ Sông Mực mênh mông phẳng lặng như gương điểm xuyết bởi 21 hòn đảo xanh rì, Bến En là điểm hẹn lý tưởng cho những ai muốn tìm về với sự an yên nguyên sơ của đất trời.
          </p>

          <h2>1. Tổng quan về lá phổi xanh Bến En</h2>
          <p>
            Vườn quốc gia Bến En thuộc địa phận xã Hải Long và các vùng lân cận, tỉnh Thanh Hóa, cách trung tâm thành phố Thanh Hóa khoảng 45km về phía Tây Nam. Được thành lập vào năm 1992, vườn quốc gia có tổng diện tích tự nhiên lên đến hơn 14.300 ha, trong đó nổi bật là hồ nước nhân tạo Sông Mực rộng hơn 4.000 ha với nguồn nước trong xanh màu ngọc bích.
          </p>
          <p>
            Bến En sở hữu hệ sinh thái rừng nhiệt đới gió mùa phong phú bậc nhất với hơn 1.400 loài thực vật bậc cao (trong đó có lim xanh quý hiếm, chò chỉ, lát hoa) và hàng trăm loài động vật hoang dã như vượn đen má trắng, gấu ngựa, báo gấm, các loài chim thủy cầm phong phú.
          </p>

          <h2>2. Trải nghiệm du thuyền lướt sóng hồ Sông Mực</h2>
          <p>
            Hành trình tuyệt vời nhất tại Bến En chính là ngồi trên chiếc thuyền máy lướt êm ái trên mặt hồ Sông Mực. Gió hồ mát rượi thổi qua làn tóc, mặt nước gợn sóng lăn tăn phản chiếu bầu trời xanh ngắt và những đám mây trắng lững lờ. Thuyền sẽ đưa bạn len lỏi qua 21 hòn đảo lớn nhỏ với những cái tên thơ mộng: Đảo Tình Yêu, Đảo Dừa, Đảo Tượng, Đảo Bồ Đề... Mỗi hòn đảo lại mang một sắc thái thực vật riêng biệt, gợi trí tò mò khám phá.
          </p>

          <h2>3. Chiêm ngưỡng Cây Lim Ngàn Năm và hang Ngọc</h2>
          <h3>Cây Lim Xanh cổ thụ</h3>
          <p>
            Đây là niềm tự hào của rừng Bến En. Cây lim có tuổi đời ước tính ngàn năm tuổi, thân cây đồ sộ mấy người ôm không xuể, tán lá xum xuê vươn thẳng lên trời cao. Đứng dưới bóng cây cổ thụ nghìn năm, ta như cảm nhận được nhịp thở trường tồn vĩnh cửu của rừng già.
          </p>
          <h3>Hang Ngọc huyền bí</h3>
          <p>
            Nằm ẩn sâu trong lòng núi đá vôi, Hang Ngọc lấp lánh với những khối thạch nhũ muôn hình, giọt nước nguồn tí tách buông rơi tạo nên thanh âm ngân vang giữa chốn tĩnh mịch.
          </p>

          <h2>4. Mùa nào đẹp nhất để ghé Bến En?</h2>
          <p>
            Thời điểm lý tưởng nhất để du lịch Bến En là từ <strong>tháng 9 đến tháng 4 năm sau</strong>. Vào mùa thu, rừng cây thay lá ngả sắc vàng soi bóng xuống mặt hồ mờ ảo sương khói. Mùa xuân, cây cối đâm chồi nảy lộc tràn đầy nhựa sống, chim muông đua nhau cất tiếng hót vang lừng đón chào du khách.
          </p>

          <h2>5. Hướng dẫn di chuyển thuận tiện</h2>
          <p>
            Từ TP. Thanh Hóa, bạn đi theo Quốc lộ 45 khoảng 35km đến thị trấn Bến Sung cũ, sau đó rẽ theo biển chỉ dẫn vào đường tỉnh 520 chừng 10km là tới khu trung tâm đón tiếp của Vườn quốc gia. Tuyến đường được rải nhựa êm thuận, rất thích hợp cho chuyến đi trong ngày hoặc dã ngoại cuối tuần.
          </p>

          <h2>6. Đặc sản cá mè sông Mực trứ danh</h2>
          <p>
            Nhờ nguồn thức ăn tự nhiên dồi dào trong lòng hồ rộng lớn, <em>cá mè sông Mực</em> tại Bến En có kích thước khổng lồ (nhiều con nặng từ 10 - 20kg), thịt trắng ngần thơm ngọt và không hề có mùi tanh. Món cá mè om dưa chua béo ngậy ăn kèm bún tươi, hoặc cá mè nướng than chấm muối ớt cay xè sẽ khiến bạn nhớ mãi không quên.
          </p>

          <h2>7. Những kinh nghiệm bỏ túi</h2>
          <ul>
            <li>Nên mang theo đồ bơi, áo phao và đồ chống muỗi nếu có ý định chèo thuyền kayak khám phá các nhánh hồ nhỏ.</li>
            <li>Bến En hiện có các điểm cắm trại ven hồ rất thơ mộng, hãy nhớ dọn sạch rác trước khi rời đi để bảo vệ môi trường sinh thái nguyên sơ.</li>
          </ul>
        </div>
      `
    },
    {
      id: "cam-luong",
      slug: "suoi-ca-than-cam-luong",
      name: "Suối cá Thần Cẩm Lương",
      subtitle: "Bí ẩn tâm linh ngàn đời bên dòng suối mát dưới chân núi Trường Sinh",
      category: "tam-linh",
      categoryName: "Tâm linh",
      location: "xã Cẩm Lương, tỉnh Thanh Hóa",
      shortDesc: "Dòng suối kỳ bí độc nhất vô nhị dài hơn 100 mét với hàng ngàn con cá dốc to lớn sinh sống hiền hòa, gắn liền với tín ngưỡng linh thiêng của người Mường.",
      coverImage: "assets/images/cam-luong.jpg",
      gallery: [
        "assets/images/cam-luong.jpg",
        "assets/images/pu-luong.jpg",
        "assets/images/lam-kinh.jpg"
      ],
      bestTime: "Mùa xuân và mùa hè (tháng 1 – tháng 7 khi nước suối trong vắt và lễ hội diễn ra)",
      ticketPrice: "20.000 VNĐ / người lớn; 10.000 VNĐ / trẻ em",
      openingHours: "7h00 – 17h30 hàng ngày",
      howToGetThere: "Cách TP. Thanh Hóa 80km về phía Tây Bắc, đi theo QL45 hoặc QL217 đến xã Cẩm Lương.",
      highlights: [
        "Hàng ngàn con cá dốc (cá Thần) vảy óng ánh bơi lượn dày đặc trong dòng nước trong vắt",
        "Miệng hang đá Ngọc sâu thẳm trong lòng núi Trường Sinh - nơi đàn cá thần ra vào kỳ bí",
        "Đền thờ Thần Tứ Phủ Long Vương linh thiêng của đồng bào dân tộc Mường",
        "Trải nghiệm đưa tay vuốt ve lưng cá thân thiện mà không hề bị cắn hay hoảng sợ"
      ],
      foods: ["Cơm lam muối vừng", "Măng rừng luộc chấm muối ớt", "Gà đồi nướng", "Rượu cần men lá Mường"],
      tips: [
        "Tuyệt đối không bắt cá, không thả thức ăn ôi thiu xuống suối để bảo vệ nguồn nước trong sạch.",
        "Bạn có thể mua vài gói bỏng ngô hoặc rau muống sạch từ người dân địa phương để cho đàn cá ăn.",
        "Sau khi ngắm suối cá, hãy leo lên Động Cây Đăng trên sườn núi để chiêm ngưỡng thạch nhũ rủ tuyệt đẹp."
      ],
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.208197775945!2d105.3787123!3d20.1583095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136691459a589cf%3A0xe13ca2efb7654a1a!2zU3Xhu5FpIEPDoSBUaOG6p24gQ-G6q20gTMawxqFuZw!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s",
      readTime: "6 phút đọc",
      content: `
        <div class="article-body">
          <p class="lead-text">
            Nằm ẩn mình dưới chân dãy núi Trường Sinh hùng vĩ thuộc xã Cẩm Lương, <strong>Suối cá Thần Cẩm Lương</strong> (người Mường gọi là suối Ngọc hay Moọc Kính) là một trong những hiện tượng thiên nhiên kỳ thú và bí ẩn bậc nhất Việt Nam. Dòng suối chỉ dài hơn 100 mét, rộng chừng 3-4 mét nhưng lại là nơi quần tụ của hàng ngàn con cá lớn nhỏ bơi lội chen chúc, gắn liền với những câu chuyện tâm linh huyền bí truyền đời.
          </p>

          <h2>1. Hiện tượng kỳ bí của đàn cá Thần</h2>
          <p>
            Đàn cá ở suối Cẩm Lương thuộc loài cá dốc (tên khoa học là <em>Spinibarbus denticulatus</em>, cùng họ với cá chép). Mỗi con cá nặng từ 2 đến 8kg, cá chúa có thể nặng tới 10-20kg với lớp vảy ánh lên màu đồng đỏ hoặc xanh thẫm, miệng cá có đốm hồng rất lạ mắt.
          </p>
          <p>
            Điều kỳ lạ là dù số lượng cá dày đặc đến mức kín cả lòng suối, nhưng nước ở suối Ngọc lúc nào cũng trong vắt như mắt mèo, không hề có mùi tanh. Hàng ngàn năm qua, đồng bào Mường bản Lương Ngọc coi đàn cá là hiện thân của thần linh ban phát phúc lành, bảo vệ cuộc sống mưa thuận gió hòa nên không ai đánh bắt ăn thịt cá.
          </p>

          <h2>2. Huyền tích chàng cá và đền thờ Tứ Phủ Long Vương</h2>
          <p>
            Chuyện xưa kể rằng, một đôi vợ chồng già hiếm muộn nhặt được một quả trứng lạ bên suối mang về ấp nở ra một chú rắn nhỏ hiền lành. Chú rắn quấn quýt với trẻ con trong làng và thường xuyên lặn lội giúp người dân đắp đập ngăn lũ. Sau một đêm giông bão lớn, người ta thấy xác chàng rắn dạt vào chân núi Trường Sinh. Tiếc thương ân nhân cứu bản, dân làng lập đền thờ phụng và được thần báo mộng phong là Tứ Phủ Long Vương. Kể từ đó, dưới chân núi xuất hiện dòng suối trong vắt và đàn cá thần nghìn con bơi lượn không rời.
          </p>

          <h2>3. Những trải nghiệm độc đáo khi đến Cẩm Lương</h2>
          <h3>Chạm tay vào đàn cá thân thiện</h3>
          <p>
            Khác với cá ngoài tự nhiên luôn nhút nhát lẩn trốn, cá thần Cẩm Lương rất thân thiện với con người. Du khách có thể ngồi bên bờ đá thoải mái thả rau luộc, bỏng ngô và nhẹ nhàng đưa tay vuốt ve lên lưng cá mà chúng vẫn thong thả bơi lội quanh bàn tay bạn.
          </p>
          <h3>Khám phá Động Cây Đăng kỳ vĩ</h3>
          <p>
            Men theo bậc thang đá rợp bóng cây cổ thụ lên sườn núi Trường Sinh, bạn sẽ đến Động Cây Đăng. Hang động mát lạnh với muôn vàn cột nhũ đá hoa văn lấp lánh tựa như cung điện dưới lòng đất.
          </p>

          <h2>4. Mùa lý tưởng ghé thăm</h2>
          <p>
            Từ tháng 1 đến tháng 7 là mùa suối cá đẹp nhất, trùng với dịp Lễ hội Khai hạ của đồng bào Mường (mùng 8 - mùng 9 tháng Giêng âm lịch) rộn rã cồng chiêng, hát xường và các trò chơi dân gian ném còn, bắn nỏ náo nhiệt.
          </p>

          <h2>5. Hướng dẫn đường đi</h2>
          <p>
            Từ TP. Thanh Hóa, bạn đi theo Quốc lộ 45 qua Vĩnh Lộc, Yên Định đến thị trấn Cẩm Thủy cũ rồi rẽ vào cầu Cẩm Lương bắc qua sông Mã là tới khu di tích suối cá. Toàn bộ cung đường dài khoảng 80km, đường đẹp dễ đi.
          </p>

          <h2>6. Hương vị ẩm thực Mường mộc mạc</h2>
          <p>
            Đến bản Lương Ngọc, hãy nếm thử món cơm lam nếp nương nướng ống nứa chấm muối vừng thơm lừng, thịt gà đồi nướng mắc khén, măng rừng xào cay và nhấp ngụm rượu cần men lá thơm nồng say đắm.
          </p>

          <h2>7. Lưu ý ứng xử văn minh</h2>
          <ul>
            <li>Người dân bản địa coi cá thần là biểu tượng linh thiêng, tuyệt đối không được có hành vi trêu chọc thô bạo hay bắt trộm cá.</li>
            <li>Khi đi vào khu vực đền thờ, nên ăn mặc lịch sự, trang nghiêm.</li>
          </ul>
        </div>
      `
    },
    {
      id: "lam-kinh",
      slug: "khu-di-tich-lam-kinh",
      name: "Khu di tích lịch sử Lam Kinh",
      subtitle: "Đất phát tích vương triều Hậu Lê hào hùng - Thánh địa thiêng liêng chốn Lam Sơn",
      category: "di-san",
      categoryName: "Di sản - Lịch sử",
      location: "xã Xuân Lam, tỉnh Thanh Hóa",
      shortDesc: "Cố đô tâm linh và lăng mộ các bậc đế vương triều Hậu Lê, ẩn mình giữa cánh rừng cổ thụ ngút ngàn với kiến trúc cung điện hoàng gia uy nghi tráng lệ.",
      coverImage: "assets/images/lam-kinh.jpg",
      gallery: [
        "assets/images/lam-kinh.jpg",
        "assets/images/thanh-nha-ho.jpg",
        "assets/images/ham-rong.jpg"
      ],
      bestTime: "Mùa thu (đặc biệt dịp Lễ hội Lam Kinh 21 - 22 tháng 8 Âm lịch)",
      ticketPrice: "30.000 VNĐ / người lớn; 15.000 VNĐ / trẻ em",
      openingHours: "7h30 – 17h00 hàng ngày",
      howToGetThere: "Cách TP. Thanh Hóa 50km về phía Tây Bắc men theo QL47 hoặc đường mòn Hồ Chí Minh.",
      highlights: [
        "Điện Lam Kinh bằng gỗ lim nguyên khối đồ sộ bậc nhất Việt Nam với nghệ thuật chạm khắc tinh xảo",
        "Bia Vĩnh Lăng do danh nhân văn hóa thế giới Nguyễn Trãi phụng soạn khắc trên rùa đá xanh",
        "Cầu Bạch uyển chuyển bắc qua sông Ngọc thơ mộng dẫn vào sân rồng uy nghiêm",
        "Cây đa - thị quấn quýt hàng trăm năm tuổi và lăng mộ vua Lê Thái Tổ linh thiêng"
      ],
      foods: ["Bánh gai Tứ Trụ", "Nem chua Thanh Hóa", "Gà đồi nướng rơm", "Chè hạt sen Lam Kinh"],
      tips: [
        "Nên đến vào dịp ngày giỗ vua Lê Thái Tổ (21 - 22/8 Âm lịch) để hòa mình vào đại lễ hội Lam Kinh tái hiện hào khí Bình Ngô.",
        "Khuôn viên rừng di tích rất râm mát và trang nghiêm, hãy giữ yên lặng khi viếng lăng mộ các vị hoàng đế.",
        "Đừng quên mua bánh gai Tứ Trụ nóng hổi của làng nghề truyền thống ngay kề bên về làm quà."
      ],
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.563842194639!2d105.4194432!3d19.9056234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136625aa521d09b%3A0x892a0e309cb32e01!2zS2h1IERpIFTDrWNoIEzhu4tjaCBT4butIExhbSBLaW5o!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s",
      readTime: "8 phút đọc",
      content: `
        <div class="article-body">
          <p class="lead-text">
            <em>“Bình Ngô đại cáo vang trời đất / Lam Kinh rạng rỡ nét tiền nhân”</em>. Nằm giữa thung lũng xanh mướt của vùng đất cổ Lam Sơn thuộc xã Xuân Lam, <strong>Khu di tích lịch sử quốc gia đặc biệt Lam Kinh</strong> (còn gọi là Tây Kinh) là chốn địa linh nhân kiệt, nơi phát tích cuộc khởi nghĩa Lam Sơn lẫy lừng của vị anh hùng dân tộc Lê Lợi, quét sạch quân xâm lược nhà Minh giành lại nền độc lập tự chủ cho non sông Đại Việt.
          </p>

          <h2>1. Cố đô tâm linh của vương triều Hậu Lê</h2>
          <p>
            Sau khi đại thắng quân Minh và lên ngôi hoàng đế tại kinh thành Thăng Long vào năm 1428, vua Lê Thái Tổ (Lê Lợi) đã cho xây dựng tại quê hương Lam Sơn một kinh đô thứ hai mang tên Lam Kinh. Nơi đây là trung tâm tế tự tổ tiên, nơi an nghỉ vĩnh hằng của các vị hoàng đế, hoàng thái hậu triều Hậu Lê và là chốn hành cung để các vua ngự giá mỗi lần về bái yết tiên tổ.
          </p>
          <p>
            Khu di tích rộng hơn 200 ha được bao bọc bởi cánh rừng nguyên sinh xanh tốt, phía trước có sông Ngọc uốn lượn, phía sau tựa lưng vào núi Dầu vững chãi, tạo nên thế đất phong thủy <em>“tọa sơn hướng thủy”</em> vượng khí ngút ngàn.
          </p>

          <h2>2. Những kiệt tác kiến trúc và bảo vật quốc gia</h2>
          <h3>Chính điện Lam Kinh uy nghi</h3>
          <p>
            Chính điện Lam Kinh được phục dựng công phu theo đúng quy thức kiến trúc thời Lê sơ với quy mô đồ sộ bằng 100% gỗ lim quý hiếm. Tòa điện gồm ba tòa Tiền điện, Quang Đức và Diên Khánh nối nhau hình chữ Công (工), chạm khắc hàng ngàn hình tượng rồng, phượng, hoa cúc sống động đỉnh cao của nghệ thuật điêu khắc gỗ cổ truyền.
          </p>
          <h3>Cầu Bạch và sông Ngọc</h3>
          <p>
            Chiếc cầu Bạch vòm cong thanh thoát bắc qua dòng sông Ngọc êm đềm là lối dẫn chính vào cung điện. Mặt cầu lát ván gỗ lim, thành cầu trang trí họa tiết mây cuộn uyển chuyển soi bóng xuống làn nước trong veo.
          </p>
          <h3>Bia Vĩnh Lăng - Bảo vật quốc gia vô giá</h3>
          <p>
            Bia Vĩnh Lăng dựng bên lăng mộ vua Lê Thái Tổ, được tạc từ một khối đá trầm tích xanh nguyên khối khổng lồ, đặt trên lưng con rùa đá dũng mãnh. Nội dung bia do chính danh nhân văn hóa thế giới Nguyễn Trãi phụng thảo, khắc ghi cô đọng toàn bộ cuộc đời, sự nghiệp chiến đấu oanh liệt và tư tưởng nhân nghĩa cao cả của vua Lê Thái Tổ.
          </p>
          <h3>Cây ổi cười kỳ lạ và cây đa - thị trăm năm</h3>
          <p>
            Ngay trước khuôn viên lăng vua Lê có một cây ổi đặc biệt: chỉ cần nhẹ nhàng gãi vào nách hoặc thân cây, toàn bộ cành lá trên ngọn sẽ rung rinh như đang cười khúc khích. Bên cạnh đó là hình ảnh cây đa và cây thị quấn lấy nhau sinh trưởng hàng thế kỷ, tạo nên biểu tượng gắn bó thủy chung kỳ diệu của tự nhiên.
          </p>

          <h2>3. Thời điểm lý tưởng viếng thăm Lam Kinh</h2>
          <p>
            Thời điểm tráng lệ và náo nức nhất là dịp <strong>Lễ hội Lam Kinh</strong> diễn ra vào ngày 21 - 22 tháng 8 Âm lịch hàng năm (ngày giỗ vua Lê Thái Tổ). Cả vùng Lam Sơn rực rỡ cờ hoa, tiếng trống trận rền vang, các màn tái hiện lịch sử hào hùng cùng các trò diễn Xuân Phả, múa đèn quy tụ hàng vạn du khách bốn phương tề tựu.
          </p>

          <h2>4. Tuyến đường di chuyển</h2>
          <p>
            Lam Kinh cách trung tâm TP. Thanh Hóa 50km về phía Tây theo đường Quốc lộ 47. Đặc biệt, di tích chỉ cách Cảng hàng không Thọ Xuân chừng 10km, vô cùng thuận tiện cho các đoàn khách bay từ TP. Hồ Chí Minh hay Đà Nẵng kết hợp tham quan trong lộ trình.
          </p>

          <h2>5. Bánh gai Tứ Trụ - Đậm đà phong vị xứ Lam</h2>
          <p>
            Rời Lam Kinh, đừng quên ghé qua làng Tứ Trụ (xã Thọ Diên kề bên) để thưởng thức món <em>bánh gai Tứ Trụ</em> tiến vua trứ danh. Chiếc bánh gói bằng lá chuối khô, vỏ bánh đen óng dẻo quánh từ lá gai và bột nếp, nhân bánh thơm lừng mùi đậu xanh ngào đường mía, cùi dừa nạo và dầu chuối nồng nàn.
          </p>

          <h2>6. Cẩm nang ghi nhớ</h2>
          <ul>
            <li>Lam Kinh là chốn tôn nghiêm hoàng gia, hãy giữ trang phục trang nhã, không dẫm lên bờ bia đá hay tự ý sờ vào hiện vật cổ.</li>
            <li>Có dịch vụ xe điện phục vụ đưa đón du khách qua các điểm lăng tẩm trong rừng lim râm mát.</li>
          </ul>
        </div>
      `
    },
    {
      id: "hai-tien",
      slug: "bien-hai-tien",
      name: "Biển Hải Tiến",
      subtitle: "Bờ biển thanh bình rợp bóng phi lao - Nét duyên thầm dịu dàng ven sóng",
      category: "bien-dao",
      categoryName: "Biển đảo",
      location: "xã Hoằng Tiến, tỉnh Thanh Hóa",
      shortDesc: "Bãi biển nghỉ dưỡng sinh thái mới nổi với dải cát dài 12km thoai thoải, rặng phi lao xanh rì và nhịp sống làng chài mộc mạc nguyên sơ.",
      coverImage: "assets/images/hai-tien.jpg",
      gallery: [
        "assets/images/hai-tien.jpg",
        "assets/images/sam-son.jpg",
        "assets/images/hon-me.jpg"
      ],
      bestTime: "Tháng 4 đến tháng 9 hàng năm",
      ticketPrice: "Miễn phí tắm biển tự do",
      openingHours: "Mở cửa tự do cả ngày",
      howToGetThere: "Cách TP. Thanh Hóa 18km về phía Đông Bắc; từ Hà Nội đi cao tốc rẽ nút giao QL1A chỉ mất 2 giờ.",
      highlights: [
        "Bờ biển cát vàng thoai thoải dài 12km không có phù sa ngập bùn, sóng êm an toàn",
        "Cầu cảng Hải Tiến sơn trắng phong cách châu Âu vươn ra biển - điểm check-in cực phẩm",
        "Rặng phi lao chắn cát xanh ngắt trải dài tít tắp tạo bóng râm lãng mạn ven bờ",
        "Chợ hải sản làng chài sớm mai họp ngay trên bãi cát với ghẹ, mực vừa cất lưới tươi roi rói"
      ],
      foods: ["Mực nhảy hấp sả", "Cua gạch biển Hải Tiến", "Bè mảng tôm tít", "Nước mắm Khúc Phụ cổ truyền"],
      tips: [
        "Thích hợp cho gia đình có trẻ nhỏ và người cao tuổi nhờ bãi biển êm đềm và không gian thoáng đãng.",
        "Nên mua hải sản trực tiếp tại thuyền bè làng chài lúc 5h30 sáng rồi nhờ nhà hàng chế biến hộ với giá rất rẻ.",
        "Đừng quên ghé thăm xưởng nước mắm Khúc Phụ truyền thống để mua đặc sản nước mắm cá cơm thơm ngon nức tiếng."
      ],
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.489230589134!2d105.9082334!3d19.8390451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136573dfd7328bf%3A0xe5362a342416f731!2zQsOjaSBiaeG7g24gSOG6o2kgVGnhur9u!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s",
      readTime: "6 phút đọc",
      content: `
        <div class="article-body">
          <p class="lead-text">
            Nếu Sầm Sơn là khúc ca rộn ràng sôi động thì <strong>Biển Hải Tiến</strong> (xã Hoằng Tiến, tỉnh Thanh Hóa) lại giống như một thiếu nữ e ấp, dịu dàng giữa làn gió biển phương Nam. Với bờ cát dài thoai thoải phẳng lì, những rặng phi lao xanh rì rì rào khúc hát đại dương cùng bầu không khí sinh thái trong lành, Hải Tiến là chốn dừng chân hoàn hảo cho những kỳ nghỉ dưỡng an yên của gia đình.
          </p>

          <h2>1. Nét duyên mộc mạc của bãi biển Hải Tiến</h2>
          <p>
            Nằm cách trung tâm thành phố Thanh Hóa khoảng 18km về hướng Đông Bắc và cách Hà Nội 155km, Hải Tiến sở hữu đường bờ biển dài tới 12km. Khác biệt lớn nhất của Hải Tiến là bãi biển thoai thoải, đáy cát sạch, sóng vỗ êm đềm và đặc biệt là dải rừng phi lao ngút ngàn chạy dọc suốt mép nước, tạo nên bóng râm tự nhiên mát rượi ngay giữa trưa hè.
          </p>

          <h2>2. Những điểm check-in không thể bỏ qua</h2>
          <h3>Cầu cảng Hải Tiến</h3>
          <p>
            Được thiết kế theo phong cách kiến trúc ven biển cổ điển châu Âu với gam màu trắng nổi bật vươn mình ra biển khơi, cầu cảng Hải Tiến là tọa độ chụp ảnh sống ảo được giới trẻ săn đón nhiều nhất. Đứng từ đầu cầu cảng nhìn về đất liền, bạn sẽ thu trọn vào tầm mắt toàn cảnh vịnh biển cong vút như một vành trăng khuyết.
          </p>
          <h3>Chùa Bụt (Chùa Hồi Long) và núi Linh Trường</h3>
          <p>
            Phía Bắc bãi biển là dãy núi Linh Trường sừng sững ôm lấy biển khơi. Tại đây có bãi dù lượn Hải Tiến dành cho những ai mê cảm giác mạnh, bay lượn trên bầu trời ngắm toàn cảnh đại dương mênh mông và làng chài mộc mạc phía dưới.
          </p>

          <h2>3. Thời điểm lý tưởng du lịch Hải Tiến</h2>
          <p>
            Thời điểm đẹp nhất để đến Hải Tiến là từ tháng 4 đến tháng 8, khi thời tiết nắng ráo, biển trong vắt và hải sản phong phú nhất.
          </p>

          <h2>4. Hướng dẫn di chuyển</h2>
          <p>
            Từ Hà Nội, bạn chỉ cần theo đường cao tốc Mai Sơn - Quốc lộ 45, rẽ ra nút giao hướng về Hoằng Hóa chỉ mất đúng 2 giờ chạy xe êm ái. Hệ thống đường sá thông thoáng, biển báo rõ ràng.
          </p>

          <h2>5. Hải sản tươi ngon làng chài</h2>
          <p>
            Hải Tiến nổi tiếng với các món bề bề (tôm tít) hấp gừng, mực trứng nhảy tách tách trên vỉ than hồng, ghẹ biển ngọt thịt và đặc biệt là món <em>nước mắm Khúc Phụ</em> ủ chượp từ cá cơm than theo phương pháp gài nén truyền thống hơn 300 năm lịch sử.
          </p>

          <h2>6. Lưu ý cho chuyến đi</h2>
          <ul>
            <li>Buổi sáng hãy thức dậy trước 6 giờ để đón bình minh và tận hưởng không khí trong lành nguyên sơ nhất của biển cả.</li>
            <li>Hải sản ở bến thuyền bán theo mớ rất rẻ, bạn có thể mua rồi nhờ các nhà hàng ven biển chế biến với công nấu chỉ 30.000 - 50.000đ/món.</li>
          </ul>
        </div>
      `
    },
    {
      id: "hon-me",
      slug: "dao-hon-me",
      name: "Quần đảo Hòn Mê",
      subtitle: "Pháo đài xanh giữa trùng khơi - Hòn ngọc nguyên sơ của biển trời Nghi Sơn",
      category: "bien-dao",
      categoryName: "Biển đảo",
      location: "xã Nghi Sơn, tỉnh Thanh Hóa",
      shortDesc: "Quần đảo tiền tiêu tráng lệ ngoài khơi nam Thanh Hóa với 18 hòn đảo đá, làn nước xanh ngắt thấu đáy và rạn san hô kỳ thú.",
      coverImage: "assets/images/hon-me.jpg",
      gallery: [
        "assets/images/hon-me.jpg",
        "assets/images/sam-son.jpg",
        "assets/images/hai-tien.jpg"
      ],
      bestTime: "Tháng 4 – Tháng 8 (mùa biển êm ả, trời trong xanh không có giông bão)",
      ticketPrice: "Tham quan theo tour cano được cấp phép",
      openingHours: "Theo lịch tàu cano xuất bến",
      howToGetThere: "Đi thuyền hoặc cano cao tốc từ cảng Nghi Sơn (xã Nghi Sơn) ra đảo chừng 45 phút.",
      highlights: [
        "Quần thể 18 hòn đảo đá lớn nhỏ nguyên sơ giữa biển khơi trong vắt như ngọc lam",
        "Rạn san hô rực rỡ và hệ sinh vật đáy biển nhiệt đới đa dạng sinh học cao",
        "Ngọn hải đăng Hòn Mê cao vút kiêu hãnh - mắt thần canh giữ biển trời Tổ quốc",
        "Rừng nguyên sinh thường xanh phủ kín các sườn núi đá vươn thẳng ra sóng bạc"
      ],
      foods: ["Mực nháy câu đêm", "Ốc vú nàng luộc sả", "Cá mú đỏ nấu ngót", "Tôm hùm đá nướng"],
      tips: [
        "Do Hòn Mê có vị trí quốc phòng trọng yếu, du khách cần mang căn cước công dân và tuân thủ quy định của lực lượng biên phòng.",
        "Nên uống thuốc chống say sóng trước khi lên cano 30 phút nếu không quen đi biển khơi.",
        "Mang theo kính lặn để thỏa sức ngắm nhìn đàn cá bơi quanh các rạn san hô cạn."
      ],
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60124.8920198!2d105.9!3d19.36!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3137050000000000%3A0x0!2zxJDhuqNvIEjDsm4gTcOq!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s",
      readTime: "7 phút đọc",
      content: `
        <div class="article-body">
          <p class="lead-text">
            Cách đất liền thị xã Nghi Sơn cũ chừng 11 hải lý về phía Đông Nam, <strong>Quần đảo Hòn Mê</strong> (thuộc xã Nghi Sơn, tỉnh Thanh Hóa) hiện lên giữa biển Đông như một đàn cá khổng lồ đang rẽ sóng ra khơi. Nơi đây là pháo đài tiền tiêu bất khả xâm phạm, đồng thời là hòn ngọc hoang sơ tuyệt mỹ với thảm thực vật thường xanh trù phú và làn nước ngọc lam sâu thẳm.
          </p>

          <h2>1. Vẻ đẹp hoang sơ giữa đại dương</h2>
          <p>
            Quần đảo Hòn Mê gồm một đảo chính mang tên Hòn Mê cùng 17 hòn đảo nhỏ quây quần bao quanh như Hòn Vàng, Hòn Bộc, Hòn Miệng, Hòn Sập... Đảo Mê có diện tích khoảng 450 ha, địa hình đồi núi dốc đứng với điểm cao nhất đạt gần 200m so với mực nước biển.
          </p>
          <p>
            Do chưa bị tác động bởi quá trình thương mại hóa ồ ạt, Hòn Mê giữ trọn vẹn nét hoang dại ban sơ: những bãi đá cuội nhẵn bóng xếp chồng kỳ vĩ, những vách đá dựng đứng tung bọt trắng xóa và bầu không khí mặn mòi tinh khiết của đại dương bao la.
          </p>

          <h2>2. Điểm sáng du lịch sinh thái biển đảo</h2>
          <h3>Lặn biển ngắm san hô</h3>
          <p>
            Vùng biển quanh đảo Hòn Mê có độ trong đáng kinh ngạc, có thể nhìn sâu xuống tận đáy cát. Nơi đây sở hữu các rạn san hô phong phú với san hô cành, san hô đĩa cùng hàng chục loài sinh vật biển như ốc vú nàng, hải sâm, cá thia nhiều màu sắc.
          </p>
          <h3>Ngọn hải đăng Hòn Mê</h3>
          <p>
            Được xây dựng trên đỉnh núi cao, ngọn hải đăng Hòn Mê ngày đêm chớp sáng dẫn đường cho hàng ngàn chuyến tàu thuyền qua lại vùng biển Bắc Trung Bộ. Đứng từ ngọn hải đăng phóng tầm mắt ra bốn bề, bạn sẽ cảm nhận trọn vẹn sự bao la hùng vĩ của biển trời quê hương.
          </p>

          <h2>3. Thời điểm lý tưởng nhất</h2>
          <p>
            Từ tháng 4 đến tháng 8 là mùa đẹp nhất để ra đảo. Lúc này biển lặng sóng êm, trời xanh ngắt không một gợn mây, rất an toàn và thuận tiện cho việc di chuyển bằng cano cao tốc và lặn biển.
          </p>

          <h2>4. Phương thức di chuyển</h2>
          <p>
            Từ cảng Lạch Bạng hoặc bán đảo Nghi Sơn, du khách di chuyển bằng cano cao tốc chỉ mất khoảng 35 - 45 phút vượt sóng biển là tới đảo Hòn Mê.
          </p>

          <h2>5. Ẩm thực đảo ngọc</h2>
          <p>
            Hải sản ở Hòn Mê là quà tặng thượng hạng của biển khơi: <em>ốc vú nàng</em> luộc chấm muối tiêu chanh giòn ngọt khó cưỡng; cá mú đỏ tươi roi rói nấu canh chua thì là; mực nháy câu đêm nướng ngay trên boong tàu ngọt lịm.
          </p>

          <h2>6. Lưu ý quan trọng</h2>
          <ul>
            <li>Hòn Mê là khu vực quốc phòng, du khách cần đăng ký thủ tục trước với ban quản lý tour và trạm biên phòng.</li>
            <li>Giữ gìn vệ sinh biển đảo tuyệt đối, không bẻ san hô và không vứt rác thải nhựa xuống biển.</li>
          </ul>
        </div>
      `
    },
    {
      id: "tu-thuc",
      slug: "dong-tu-thuc",
      name: "Động Từ Thức (Động Bích Đào)",
      subtitle: "Chốn bồng lai tiên cảnh huyền bí - Nơi lưu dấu thiên tình sử người và tiên",
      category: "tam-linh",
      categoryName: "Tâm linh",
      location: "xã Nga Thiện, tỉnh Thanh Hóa",
      shortDesc: "Quần thể hang động karst kỳ vĩ gắn liền với truyền thuyết chàng Từ Thức gặp nàng tiên Giáng Hương, lưu giữ bút tích thi phú của tiền nhân.",
      coverImage: "assets/images/tu-thuc.jpg",
      gallery: [
        "assets/images/tu-thuc.jpg",
        "assets/images/cam-luong.jpg",
        "assets/images/ben-en.jpg"
      ],
      bestTime: "Mùa xuân và mùa hè (tháng 1 – tháng 6 không khí hang động mát mẻ trong lành)",
      ticketPrice: "20.000 VNĐ / người",
      openingHours: "7h30 – 17h30 hàng ngày",
      howToGetThere: "Cách TP. Thanh Hóa 45km về phía Đông Bắc theo QL10 qua vùng cói Nga Sơn đến xã Nga Thiện.",
      highlights: [
        "Hệ thống thạch nhũ tự nhiên huyền ảo tái hiện chuyện tình: Buồng tắm tiên, Bàn cờ tiên, Kho thóc của trời",
        "Bài thơ khắc đá của Thần Siêu Nguyễn Văn Siêu ca ngợi cảnh sắc động tiên tuyệt mỹ",
        "Dấu tích vết chân chàng Từ Thức và dấu tích dây mây lên trời huyền thoại",
        "Không gian mát lạnh tự nhiên quanh năm với luồng gió đối lưu sảng khoái"
      ],
      foods: ["Gỏi cá nhệch Nga Sơn", "Dê núi nướng tảng", "Bánh đúc Nga Thiện", "Rượu nếp Nga Sơn"],
      tips: [
        "Nên mang theo đèn pin cầm tay nhỏ và đi giày chống trơn trượt để ngắm sâu vào các ngóc ngách thạch nhũ.",
        "Đừng quên đọc các bài thơ chữ Hán cổ khắc trên vách đá ngay cửa động.",
        "Kết hợp thưởng thức món gỏi cá nhệch trứ danh tại vùng đất Nga Sơn ngay kề bên."
      ],
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.8920198!2d105.98!3d20.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136610000000000%3A0x0!2zxJDhu5luZyBU4burIFRo4bupYw!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s",
      readTime: "7 phút đọc",
      content: `
        <div class="article-body">
          <p class="lead-text">
            Nằm trên dãy núi đá Tam Điệp hùng vĩ thuộc xã Nga Thiện, <strong>Động Từ Thức</strong> (xưa gọi là động Bích Đào) từ lâu đã đi vào văn học dân gian như một chốn bồng lai nơi trần thế. Nơi đây gắn liền với câu chuyện tình lãng mạn mà thấm đẫm triết lý nhân sinh giữa chàng tri huyện Từ Thức và nàng tiên Giáng Hương xinh đẹp.
          </p>

          <h2>1. Huyền tích thiên tình duyên cõi tiên</h2>
          <p>
            Chuyện kể vào đời Trần, Từ Thức vốn là vị quan thanh liêm, chuộng phong cảnh non nước. Trong một lần đi hội hoa mẫu đơn, chàng đã cởi áo gấm chuộc lỗi cho một thiếu nữ lỡ tay làm gãy cành hoa. Về sau, Từ Thức từ quan ngao du sơn thủy, tình cờ lạc vào động Bích Đào và hội ngộ người thiếu nữ năm xưa - hóa ra là nàng tiên Giáng Hương.
          </p>
          <p>
            Hai người nên duyên vợ chồng sống những ngày tháng tiêu dao cõi tiên. Nhưng vì nhớ quê nhà, Từ Thức xin phép trở về trần gian một chuyến. Nào ngờ, một ngày cõi tiên bằng trăm năm hạ giới; khi trở về, cảnh cũ đã đổi thay, bạn bè người thân không còn ai. Chàng cay đắng quay lại tìm lối lên cõi tiên thì cửa động đã khép chặt ngàn năm, để lại nỗi hoài cảm mênh mang cho hậu thế.
          </p>

          <h2>2. Kiệt tác thạch nhũ lung linh trong lòng núi</h2>
          <p>
            Bước chân vào động Từ Thức, bạn như lạc vào một bảo tàng điêu khắc tự nhiên đồ sộ. Hệ thống nhũ đá qua hàng triệu năm kiến tạo đã hình thành những khối hình kỳ thú ứng với huyền thoại:
          </p>
          <ul>
            <li><strong>Bàn cờ tiên:</strong> Phiến đá phẳng phiu nơi các bậc tiên phong đánh cờ đàm đạo.</li>
            <li><strong>Kho thóc, kho tiền:</strong> Những dải nhũ đá tròn trịa xếp lớp tầng tầng tựa như kho báu dồi dào của tạo hóa.</li>
            <li><strong>Buồng tắm tiên:</strong> Vòm đá rủ rèm nhũ mềm mại lấp lánh như lụa mỏng buông lơi.</li>
          </ul>

          <h2>3. Dấu ấn tiền nhân trên vách đá</h2>
          <p>
            Ngay cửa động, du khách có thể chiêm ngưỡng bài thơ chữ Hán khắc sâu vào vách đá của đại danh sĩ Nguyễn Văn Siêu ca tụng vẻ đẹp huyền ảo của động tiên, cũng như tấm lòng tiếc nuối khôn nguôi của chàng Từ Thức trước quy luật vô thường của thời gian.
          </p>

          <h2>4. Thời điểm và hướng dẫn di chuyển</h2>
          <p>
            Động Từ Thức cách TP. Thanh Hóa khoảng 45km về phía Đông Bắc theo Quốc lộ 10. Đường đi ngang qua những cánh đồng cói xanh mướt của xứ Nga Sơn. Hang động mở cửa đón khách quanh năm, đặc biệt râm mát vào mùa hè.
          </p>

          <h2>5. Ẩm thực gỏi cá nhệch Nga Sơn kề bên</h2>
          <p>
            Sau khi tham quan động tiên, trải nghiệm không thể bỏ lỡ chính là thưởng thức <em>gỏi cá nhệch Nga Sơn</em> - món ăn tinh hoa bậc nhất xứ Thanh. Cá nhệch tươi sống thái mỏng trộn thính gạo nếp, cuốn cùng hàng chục loại lá rừng (lá sung, lá mơ, lá lộc vừng, đinh lăng) rồi múc thìa nước chẻo vàng óng thơm ngậy cay nồng vào giữa, ăn một miếng là nhớ cả một đời.
          </p>
        </div>
      `
    },
    {
      id: "ham-rong",
      slug: "khu-di-tich-ham-rong",
      name: "Khu di tích lịch sử Hàm Rồng",
      subtitle: "Biểu tượng bất khuất bên dòng sông Mã - Kỳ tích cầu thép huyền thoại",
      category: "di-san",
      categoryName: "Di sản - Lịch sử",
      location: "phường Hàm Rồng, tỉnh Thanh Hóa",
      shortDesc: "Quần thể danh thắng và di tích lịch sử hào hùng, nơi ghi dấu chiến công hiển hách của quân và dân Thanh Hóa bắn rơi hàng trăm máy bay Mỹ bảo vệ cây cầu huyết mạch.",
      coverImage: "assets/images/ham-rong.jpg",
      gallery: [
        "assets/images/ham-rong.jpg",
        "assets/images/sam-son.jpg",
        "assets/images/thanh-nha-ho.jpg"
      ],
      bestTime: "Quanh năm (đặc biệt các dịp lễ lịch sử tháng 4, tháng 5 và mùa hoa nở bên bờ sông Mã)",
      ticketPrice: "Miễn phí tham quan cây cầu và các điểm di tích ngoài trời",
      openingHours: "Mở cửa tự do 24/7",
      howToGetThere: "Nằm ngay tại cửa ngõ phía Bắc TP. Thanh Hóa, cách trung tâm quảng trường Lam Sơn chỉ 4km.",
      highlights: [
        "Cầu Hàm Rồng lịch sử - cây cầu thép kiên cường vắt qua dòng sông Mã oai hùng",
        "Núi Rồng (Long Sơn), Núi Ngọc và Động Long Quang nơi lưu giữ bút tích thi nhân",
        "Thiền viện Trúc Lâm Hàm Rồng thanh tịnh tọa lạc trên sườn đồi nhìn ra dòng sông",
        "Tượng đài chiến thắng và Đồi C4 huyền thoại rực lửa anh hùng"
      ],
      foods: ["Cháo se Nam Ngạn", "Bánh cuốn Thanh Hóa", "Nem chua nướng", "Cá sông Mã om riềng mẻ"],
      tips: [
        "Hãy đi bộ trên thành cầu Hàm Rồng lúc hoàng hôn để ngắm trọn vẹn cảnh mặt trời lặn sau dãy núi Rồng.",
        "Ghé thăm Động Long Quang trên sườn núi để ngắm nhìn hai mắt rồng nhìn xuống dòng sông Mã.",
        "Thưởng thức bát cháo se Nam Ngạn nóng hổi ngay góc phố cổ ven chân cầu."
      ],
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.8920198!2d105.77!3d19.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136500000000000%3A0x0!2zQ-G6p3UgSMOgbSBS4buTbmc!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s",
      readTime: "7 phút đọc",
      content: `
        <div class="article-body">
          <p class="lead-text">
            <em>“Sông Mã gầm lên khúc độc hành / Hàm Rồng rực lửa bóng cờ bay”</em>. Tọa lạc ngay cửa ngõ phía Bắc thành phố Thanh Hóa thuộc phường Hàm Rồng, <strong>Khu di tích danh thắng Hàm Rồng</strong> không chỉ là một quần thể sơn thủy hữu tình độc đáo của tạo hóa mà còn là bản anh hùng ca bất diệt về lòng dũng cảm, kiên cường của quân và dân xứ Thanh trong những năm tháng kháng chiến chống Mỹ cứu nước oanh liệt.
          </p>

          <h2>1. Cây cầu huyền thoại và bản hùng ca thế kỷ 20</h2>
          <p>
            Cầu Hàm Rồng là cây cầu huyết mạch duy nhất thời bấy giờ nối liền huyết mạch giao thông chi viện từ hậu phương miền Bắc cho chiến trường lớn miền Nam. Chính vì vị trí chiến lược sống còn đó, đế quốc Mỹ đã tập trung hàng ngàn lượt máy bay hiện đại nhất, ném xuống đây hàng vạn tấn bom đạn nhằm cắt đứt tuyến đường.
          </p>
          <p>
            Thế nhưng, với ý chí sắt đá <em>“Tim có thể ngừng đập nhưng mạch máu Hàm Rồng không thể tắc”</em>, quân và dân Thanh Hóa cùng các chiến sĩ pháo cao xạ, nữ dân quân Nam Ngạn kiên cường đã bắn rơi <strong>106 máy bay Mỹ</strong>, bắt sống nhiều giặc lái, giữ cho cây cầu thép hiên ngang đứng vững soi bóng dòng sông Mã.
          </p>

          <h2>2. Quần thể danh lam thắng cảnh Hàm Rồng</h2>
          <h3>Núi Rồng và Động Long Quang</h3>
          <p>
            Núi Rồng uốn lượn như một con rồng khổng lồ đang uống nước sông Mã. Trên núi có Động Long Quang (động Mắt Rồng) với hai cửa hang tự nhiên nhìn ra đôi bờ sông xanh biếc. Nơi đây từng lưu giữ những bài thơ đề vịnh của các bậc vua chúa, thi nhân kiệt xuất như Lê Thánh Tông, Nguyễn Trãi, Phan Huy Chú, Cao Bá Quát.
          </p>
          <h3>Thiền viện Trúc Lâm Hàm Rồng</h3>
          <p>
            Tọa lạc thanh tịnh trên đồi C4 lộng gió rợp bóng thông xanh, Thiền viện mang đậm phong cách kiến trúc Phật giáo thời Trần. Từ khuôn viên thiền viện, du khách có thể phóng tầm mắt chiêm ngưỡng trọn vẹn bức tranh kỳ vĩ của sông Mã và cầu Hàm Rồng.
          </p>

          <h2>3. Thời điểm lý tưởng khám phá</h2>
          <p>
            Khu di tích Hàm Rồng đẹp quanh năm. Đặc biệt vào những ngày đầu tháng 4 (dịp kỷ niệm chiến thắng Hàm Rồng 3-4/4) hoặc các chiều thu lãng mạn, khi hoàng hôn đỏ rực buông xuống dòng sông Mã, cây cầu thép cổ kính khoác lên mình vẻ đẹp vừa bi tráng vừa thơ mộng lạ kỳ.
          </p>

          <h2>4. Ẩm thực cháo se Nam Ngạn độc đáo</h2>
          <p>
            Đến chân cầu Hàm Rồng, bạn không thể bỏ qua món <em>cháo se Nam Ngạn</em> (cháo bột se). Sợi bột gạo tẻ được vê thon dài như con tằm, nấu trong nước luộc xương ngọt lịm cùng thịt nạc xay và hành hoa tiêu bắc, ăn nóng hổi vào buổi chiều lộng gió sông thì không gì thi vị bằng.
          </p>
        </div>
      `
    }
  ],

  // 3. Ẩm thực đặc sản xứ Thanh (Tối thiểu 8 món)
  foods: [
    {
      id: "nem-chua",
      name: "Nem chua Thanh Hóa",
      category: "Quà biếu đặc sản",
      origin: "Toàn tỉnh Thanh Hóa",
      image: "assets/images/nem-chua.jpg",
      description: "Món ăn quốc hồn quốc túy của xứ Thanh với vị chua thanh của thịt nạc ủ lên men, giòn sần sật của bì lợn, thơm nồng tỏi ớt tiêu đen gói trong lá chuối xanh.",
      priceRange: "30.000 – 50.000 VNĐ / chục",
      address: "Đường Đinh Lễ, Trường Thi, phường Hạc Thành, tỉnh Thanh Hóa"
    },
    {
      id: "goi-ca-nhech",
      name: "Gỏi cá nhệch Nga Sơn",
      category: "Món ăn truyền thống",
      origin: "xã Nga Thiện & vùng ven biển",
      image: "assets/images/goi-ca-nhech.jpg",
      description: "Món gỏi kỳ công từ loài cá nhệch tươi ngon, thính gạo nếp thơm vàng óng, ăn kèm chẻo nóng hổi đậm đà cùng hơn 10 loại lá rừng đặc trưng.",
      priceRange: "250.000 – 350.000 VNĐ / suất",
      address: "Các nhà hàng đặc sản Nga Sơn, tỉnh Thanh Hóa"
    },
    {
      id: "banh-cuon",
      name: "Bánh cuốn Thanh Hóa",
      category: "Điểm tâm sáng",
      origin: "TP. Thanh Hóa cũ",
      image: "assets/images/banh-cuon.jpg",
      description: "Bánh tráng mỏng tang mềm mịn như lụa, nhân thịt nạc mộc nhĩ đậm đà, rắc hành phi vàng ruộm giòn tan, chấm nước mắm cốt pha chanh ớt ấm nóng.",
      priceRange: "25.000 – 35.000 VNĐ / đĩa",
      address: "Phố Tống Duy Tân, phường Ba Đình, tỉnh Thanh Hóa"
    },
    {
      id: "banh-gai-tu-tru",
      name: "Bánh gai Tứ Trụ",
      category: "Bánh tiến vua",
      origin: "xã Xuân Lam & làng Tứ Trụ",
      image: "assets/images/banh-gai.jpg",
      description: "Chiếc bánh đen nhánh dẻo thơm nếp lá gai, nhân đậu xanh ngào đường mía ngọt ngào, cùi dừa nạo và dầu chuối nồng nàn gói trong lá chuối khô.",
      priceRange: "60.000 – 90.000 VNĐ / chục",
      address: "Làng nghề bánh gai Tứ Trụ, tỉnh Thanh Hóa"
    },
    {
      id: "che-lam-phu-quang",
      name: "Chè lam Phủ Quảng",
      category: "Bánh cổ truyền",
      origin: "xã Vĩnh Tiến (gần Thành Nhà Hồ)",
      image: "assets/images/thanh-nha-ho.jpg",
      description: "Thức quà dân dã dẻo thơm nếp hoa vàng, ngọt thanh mật mía, giòn bùi lạc rang và vị cay ấm nồng của gừng già, nhâm nhi cùng trà xanh cổ thụ.",
      priceRange: "30.000 – 45.000 VNĐ / phong",
      address: "Khu vực Di sản Thành Nhà Hồ, tỉnh Thanh Hóa"
    },
    {
      id: "banh-rang-bua",
      name: "Bánh răng bừa (Bánh lá)",
      category: "Bánh cổ truyền",
      origin: "xã Yên Định & Hoằng Hóa",
      image: "assets/images/ben-en.jpg",
      description: "Chiếc bánh dẻo mịn từ gạo tẻ ngon có hình dáng thon nhọn như chiếc răng bừa, nhân thịt ba chỉ xào hành mộc nhĩ tiêu thơm phức gói lá dong xanh.",
      priceRange: "35.000 – 50.000 VNĐ / chục",
      address: "Chợ Vườn Hoa, phường Hạc Thành, tỉnh Thanh Hóa"
    },
    {
      id: "chao-se-nam-ngan",
      name: "Cháo se Nam Ngạn",
      category: "Món ăn đường phố",
      origin: "phường Hàm Rồng",
      image: "assets/images/ham-rong.jpg",
      description: "Món cháo độc đáo với sợi bột gạo tẻ được vê thủ công thon dài như con tằm, nấu nước dùng xương hầm sánh đặc ngọt lịm cùng hành phi thơm nức.",
      priceRange: "20.000 – 30.000 VNĐ / bát",
      address: "Khu vực phố cổ chân cầu Hàm Rồng, tỉnh Thanh Hóa"
    },
    {
      id: "mam-tep-ba-lang",
      name: "Mắm tép Ba Làng (Hậu Lộc)",
      category: "Gia vị tiến vua",
      origin: "xã Nghi Sơn & Hậu Lộc",
      image: "assets/images/sam-son.jpg",
      description: "Mắm tép đỏ tươi rói làm từ tép biển tươi ủ thính gạo truyền thống, chuyên dùng để chưng thịt nạc thơm ngậy nức mũi hoặc chấm rau củ luộc.",
      priceRange: "80.000 – 120.000 VNĐ / chai 500ml",
      address: "Làng nghề làm mắm Ba Làng, tỉnh Thanh Hóa"
    }
  ],

  // 4. Lễ hội & Văn hóa truyền thống
  festivals: [
    {
      name: "Lễ hội Du lịch biển Sầm Sơn",
      time: "Tháng 4 hàng năm",
      location: "Quảng trường biển, phường Sầm Sơn",
      desc: "Đại lễ hội rực rỡ mở màn mùa du lịch hè với chương trình nghệ thuật âm thanh ánh sáng quy mô hoành tráng, bắn pháo hoa tầm cao và chuỗi sự kiện thể thao sôi động.",
      icon: "fa-umbrella-beach"
    },
    {
      name: "Lễ hội Đền Bà Triệu",
      time: "21 – 23 tháng 2 Âm lịch",
      location: "xã Triệu Lộc, tỉnh Thanh Hóa",
      desc: "Tưởng niệm nữ anh hùng dân tộc Triệu Thị Trinh với lễ rước kiệu truyền thống uy nghiêm, múa hoa đèn, trò diễn dân gian tái hiện hào khí quật cường.",
      icon: "fa-shield-halved"
    },
    {
      name: "Lễ hội Pôồn Pôông",
      time: "Tháng Giêng và Rằm tháng Ba",
      location: "Các bản làng người Mường miền Tây Thanh Hóa",
      desc: "Lễ hội cầu mùa hát múa quanh cây hoa Bông của đồng bào dân tộc Mường, rộn ràng tiếng cồng chiêng, ngập tràn sắc màu thổ cẩm và tình đoàn kết buôn bản.",
      icon: "fa-drum"
    },
    {
      name: "Lễ hội Lam Kinh",
      time: "21 – 22 tháng 8 Âm lịch",
      location: "Khu di tích Lam Kinh, xã Xuân Lam",
      desc: "Đại lễ hội kỷ niệm ngày giỗ vua Lê Thái Tổ và khởi nghĩa Lam Sơn với nghi thức tế tự hoàng gia, múa rồng lân, diễn tích Bình Ngô Đại Cáo hào hùng.",
      icon: "fa-landmark"
    },
    {
      name: "Lễ hội Bơi chải truyền thống",
      time: "Tháng 5 Âm lịch",
      location: "Bờ biển Sầm Sơn & cửa sông Mã",
      desc: "Hội đua thuyền rồng sôi nổi của các ngư dân làng chài rèn luyện sức dẻo dai kiên cường vượt trùng khơi, cầu mong mưa thuận gió hòa cá tôm đầy khoang.",
      icon: "fa-ship"
    }
  ],

  // 5. Lịch trình gợi ý (3 cards: 2N1Đ, 3N2Đ, 4N3Đ)
  itineraries: [
    {
      id: "itinerary-2n1d",
      duration: "2 ngày 1 đêm",
      title: "Sóng Biển Nắng Vàng & Dấu Ấn Lịch Sử",
      suitableFor: "Gia đình, nhóm bạn trẻ nghỉ cuối tuần",
      highlight: "Nghỉ dưỡng biển Sầm Sơn - Chiêm ngưỡng Hòn Trống Mái - Viếng đền Độc Cước - Khám phá cầu Hàm Rồng",
      schedule: [
        {
          day: "Ngày 1: Hà Nội - Cầu Hàm Rồng - Bờ biển Sầm Sơn",
          activities: [
            "07:30: Khởi hành từ Hà Nội theo cao tốc Mai Sơn - QL45 chỉ mất 1h45p.",
            "09:30: Dừng chân tham quan Cầu Hàm Rồng lịch sử, viếng Thiền viện Trúc Lâm Hàm Rồng và ngắm dòng sông Mã.",
            "11:30: Di chuyển về Sầm Sơn, nhận phòng khách sạn và thưởng thức hải sản tươi sống bãi biển.",
            "15:30: Tắm biển Sầm Sơn, dạo chơi trên bãi cát mịn thoai thoải, check-in Sun World Sam Son.",
            "19:00: Thưởng thức bữa tối gỏi cá nhệch, mực nướng, dạo phố đi bộ quảng trường biển đêm rực rỡ."
          ]
        },
        {
          day: "Ngày 2: Núi Trường Lệ - Chợ hải sản - Về lại Hà Nội",
          activities: [
            "05:30: Thức giấc đón bình minh làng chài trên mép biển, mua hải sản tươi sống vừa cập bến.",
            "08:00: Leo núi Trường Lệ, tham quan Đền Độc Cước, Hòn Trống Mái và Đền Cô Tiên linh thiêng.",
            "11:30: Trả phòng, mua đặc sản nem chua Thanh Hóa, bánh cu đúp làm quà.",
            "14:00: Lên xe cao tốc trở về Hà Nội, kết thúc chuyến nghỉ dưỡng trọn vẹn đầy sảng khoái."
          ]
        }
      ]
    },
    {
      id: "itinerary-3n2d",
      duration: "3 ngày 2 đêm",
      title: "Tuyệt Sắc Xứ Thanh: Biển Hát & Mây Ngàn Pù Luông",
      suitableFor: "Cặp đôi, du khách yêu thiên nhiên & khám phá văn hóa",
      highlight: "Tắm biển Sầm Sơn - Thung lũng ruộng bậc thang Pù Luông - Thác Hiêu - Suối cá Thần",
      schedule: [
        {
          day: "Ngày 1: Hà Nội - Sầm Sơn - Hòa mình vào sóng biển",
          activities: [
            "08:00: Xuất phát từ Hà Nội, chạy thẳng cao tốc đến bãi biển Sầm Sơn lúc 10h00.",
            "12:00: Ăn trưa hải sản tại nhà hàng ven biển bãi B, nghỉ ngơi tại resort/khách sạn.",
            "15:30: Tham quan Hòn Trống Mái, ngắm biển từ đền Cô Tiên và tắm mát dưới làn sóng biếc.",
            "19:30: Thưởng ngoạn chương trình nhạc nước nghệ thuật tại quảng trường biển Sầm Sơn."
          ]
        },
        {
          day: "Ngày 2: Sầm Sơn - Suối cá Thần Cẩm Lương - Đại ngàn Pù Luông",
          activities: [
            "07:30: Khởi hành lên miền Tây Thanh Hóa ghé thăm Suối cá Thần Cẩm Lương kỳ bí.",
            "11:30: Đến Pù Luông, nhận phòng homestay nhà sàn ngắm trọn thung lũng Bản Đôn mộng mơ.",
            "14:30: Trekking xuống thung lũng ruộng bậc thang, tắm dòng Thác Hiêu mát lạnh như băng tuyết.",
            "19:00: Thưởng thức vịt Cổ Lũng nướng than, cơm lam nếp nương, giao lưu múa sạp và rượu cần với đồng bào Thái."
          ]
        },
        {
          day: "Ngày 3: Săn mây Pù Luông - Guồng nước suối Chăm - Trở về",
          activities: [
            "06:00: Dậy sớm nhâm nhi tách cà phê đón biển mây trắng bồng bềnh tràn qua thung lũng lúa.",
            "08:30: Ghé thăm cụm cọn nước khổng lồ suối Chăm, đi bè tre dạo mát trên dòng nước trong veo.",
            "12:00: Ăn trưa măng đắng xào và cá suối nướng tại homestay.",
            "14:00: Khởi hành về Hà Nội qua cung đường Mai Châu ngắm cảnh núi non hùng vĩ."
          ]
        }
      ]
    },
    {
      id: "itinerary-4n3d",
      duration: "4 ngày 3 đêm",
      title: "Đại Hành Trình Di Sản UNESCO & Kỳ Quan Sinh Thái",
      suitableFor: "Du khách đam mê khám phá sâu lịch sử, di sản & cảnh sắc",
      highlight: "Thành Nhà Hồ UNESCO - Cố đô Lam Kinh - Vườn quốc gia Bến En - Nghỉ dưỡng Sầm Sơn",
      schedule: [
        {
          day: "Ngày 1: Hà Nội - Di sản Thành Nhà Hồ - Lam Kinh",
          activities: [
            "07:30: Xuất phát theo cao tốc ghé Di sản Văn hóa Thế giới Thành Nhà Hồ (Tây Đô).",
            "10:30: Chiêm ngưỡng 4 cổng vòm đá khối khổng lồ, thưởng thức chè lam Phủ Quảng nóng hổi.",
            "13:30: Đến Cố đô Lam Kinh, viếng Chính điện gỗ lim nguy nga và đọc Bia Vĩnh Lăng của Nguyễn Trãi.",
            "17:00: Về trung tâm thành phố Thanh Hóa nhận phòng khách sạn, thưởng thức bánh cuốn nóng."
          ]
        },
        {
          day: "Ngày 2: Kỳ quan hồ Sông Mực Bến En - Biển Sầm Sơn",
          activities: [
            "08:00: Di chuyển tới Vườn quốc gia Bến En - 'Hạ Long trên cạn xứ Thanh'.",
            "09:30: Du thuyền lướt sóng hồ Sông Mực, ghé thăm Đảo Tình Yêu và ngắm cây Lim ngàn năm tuổi.",
            "12:30: Ăn trưa đặc sản cá mè sông Mực om dưa béo ngậy.",
            "15:00: Di chuyển về biển Sầm Sơn, tự do tắm biển và ngắm hoàng hôn ráng vàng trên mặt nước."
          ]
        },
        {
          day: "Ngày 3: Khám phá trọn vẹn biển Sầm Sơn & Làng chài",
          activities: [
            "06:00: Đón bình minh, trải nghiệm kéo lưới bè mảng cùng ngư dân làng chài.",
            "09:00: Check-in quần thể núi Trường Lệ, đền Độc Cước, Hòn Trống Mái.",
            "15:00: Vui chơi thỏa thích tại công viên nước giải trí Sun World Sam Son.",
            "19:00: Tiệc hải sản nướng thịnh soạn và dạo phố biển đêm lộng gió."
          ]
        },
        {
          day: "Ngày 4: Chợ hải sản Cột Đỏ - Cầu Hàm Rồng - Tạm biệt xứ Thanh",
          activities: [
            "07:30: Mua sắm hải sản khô, nước mắm cá cơm, nem chua tại chợ Cột Đỏ.",
            "10:00: Ghé chân cầu Hàm Rồng chụp ảnh kỷ niệm, ăn bát cháo se Nam Ngạn gia truyền.",
            "13:00: Lên cao tốc thênh thang trở về thủ đô, kết thúc đại hành trình đáng nhớ."
          ]
        }
      ]
    }
  ],

  // 6. Cẩm nang du lịch hữu ích
  travelGuide: {
    seasons: [
      {
        title: "Mùa hè sôi động (Tháng 4 – Tháng 8)",
        desc: "Thời điểm lý tưởng nhất cho du lịch biển (Sầm Sơn, Hải Tiến, Hòn Mê). Trời nắng trong veo, sóng êm dịu, không khí lễ hội ngập tràn."
      },
      {
        title: "Mùa thu vàng lãng mạn (Tháng 9 – Tháng 11)",
        desc: "Thời điểm 'vàng' của Pù Luông khi những thửa ruộng bậc thang chín vàng ươm rực rỡ; khí hậu tại Thành Nhà Hồ, Lam Kinh, Bến En se se mát mẻ tuyệt vời."
      },
      {
        title: "Mùa xuân trẩy hội (Tháng 1 – Tháng 3 Âm lịch)",
        desc: "Mùa của các lễ hội văn hóa tâm linh: viếng đền Bà Triệu, suối cá Thần Cẩm Lương, lễ hội Lam Kinh và ngắm chồi non xanh mướt của rừng già."
      }
    ],
    transportation: [
      {
        type: "Đường bộ ô tô cao tốc",
        desc: "Tuyến cao tốc Mai Sơn – QL45 thông suốt giúp hành trình từ Hà Nội tới Thanh Hóa chỉ còn vỏn vẹn 1 giờ 30 phút đến 1 giờ 45 phút, vô cùng tiện lợi và an toàn."
      },
      {
        type: "Đường sắt tàu hỏa",
        desc: "Tuyến đường sắt Bắc Nam dừng tại Ga Thanh Hóa ngay trung tâm thành phố. Các đoàn tàu SE chất lượng cao phục vụ du khách cả ngày lẫn đêm."
      },
      {
        type: "Đường hàng không (Cảng HK Thọ Xuân)",
        desc: "Cảng hàng không quốc tế Thọ Xuân đón các chuyến bay thẳng hàng ngày từ TP. Hồ Chí Minh, Cần Thơ, Buôn Ma Thuột, Đà Nẵng... với thời gian bay chỉ hơn 1 giờ."
      }
    ],
    stays: [
      {
        type: "Resort nghỉ dưỡng cao cấp",
        desc: "FLC Sam Son Beach & Golf Resort, Puluong Bocbandi Retreat, Pù Luông Casa, Vạn Chài Resort..."
      },
      {
        type: "Khách sạn trung tâm & ven biển",
        desc: "Hàng trăm khách sạn 3-5 sao tiện nghi tại đường Hồ Xuân Hương (Sầm Sơn) và đại lộ Lê Lợi (trung tâm TP)."
      },
      {
        type: "Homestay sinh thái bản địa",
        desc: "Những nếp nhà sàn gỗ thoáng mát tại Bản Đôn, Bản Hiêu (Pù Luông) với tầm nhìn vô cực ngắm mây trời ruộng bậc thang."
      }
    ],
    tips: [
      "Kiểm tra dự báo thời tiết trước chuyến đi biển hoặc trekking núi rừng Pù Luông.",
      "Tất cả nhà hàng khách sạn tại các điểm du lịch lớn đều có bảng niêm yết giá công khai.",
      "Mang theo căn cước công dân để tiện làm thủ tục ra đảo Hòn Mê hoặc thuê xe máy tự lái.",
      "Nên mang theo giày thể thao có độ bám tốt khi tham quan các điểm di tích rộng lớn hoặc hang động."
    ]
  },

  // 7. Thư viện ảnh nghệ thuật (Photo Gallery)
  gallery: [
    { title: "Ruộng bậc thang vàng rực Pù Luông", category: "nui-rung", image: "assets/images/pu-luong.jpg" },
    { title: "Bình minh rực rỡ bãi biển Sầm Sơn", category: "bien-dao", image: "assets/images/sam-son.jpg" },
    { title: "Cổng vòm đá Thành Nhà Hồ hơn 600 năm", category: "di-san", image: "assets/images/thanh-nha-ho.jpg" },
    { title: "Hồ Sông Mực xanh ngọc Vườn quốc gia Bến En", category: "nui-rung", image: "assets/images/ben-en.jpg" },
    { title: "Đàn cá Thần Cẩm Lương bơi lội thanh bình", category: "tam-linh", image: "assets/images/cam-luong.jpg" },
    { title: "Chính điện linh thiêng Cố đô Lam Kinh", category: "di-san", image: "assets/images/lam-kinh.jpg" },
    { title: "Bãi biển Hải Tiến êm đềm rợp phi lao", category: "bien-dao", image: "assets/images/hai-tien.jpg" },
    { title: "Đảo Hòn Mê xanh ngắt giữa biển Đông", category: "bien-dao", image: "assets/images/hon-me.jpg" },
    { title: "Thạch nhũ huyền ảo Động Từ Thức", category: "tam-linh", image: "assets/images/tu-thuc.jpg" },
    { title: "Cầu Hàm Rồng hiên ngang bên dòng sông Mã", category: "di-san", image: "assets/images/ham-rong.jpg" },
    { title: "Đặc sản Nem chua Thanh Hóa thơm giòn", category: "am-thuc", image: "assets/images/nem-chua.jpg" },
    { title: "Món Bánh cuốn nóng mềm mại xứ Thanh", category: "am-thuc", image: "assets/images/banh-cuon.jpg" }
  ]
};
