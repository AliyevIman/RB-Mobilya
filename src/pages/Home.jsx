import React, { useState } from "react";
import { Button } from "@mui/material";
import { Card, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import MySlider from "../components/slider/MySlider";
import { Link } from "react-router-dom";
import { categories, products } from "../data/Data";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css";
// import SwiperCore from "swiper";
// import { Pagination } from "swiper/modules";
// import "swiper/css/pagination";

// const items = [
//   {
//     id: 1,
//     title: "Ofis",
//     image: "/image/ofis.png", // Replace with actual image paths
//   },
//   {
//     id: 2,
//     title: "Mətbəx",
//     image: "/image/metbex.png",
//   },
//   {
//     id: 3,
//     title: "Outdoor",
//     image: "/image/outdoor.png",
//   },
//   {
//     id: 4,
//     title: "Chesterfield",
//     image: "/image/chesterfield.png",
//   },
//   {
//     id: 5,
//     title: "Vintage",
//     image: "/image/vintage.png",
//   },
//   {
//     id: 6,
//     title: "Loundry room",
//     image: "/image/metbex.png",
//   },
// ];

const testimonials = [
  {
    name: " Müştəri rəyi",
    feedback:
      "Bu masa və stul dəstini seçəndə bir az tərəddüd edirdim, amma evimə yerləşdirəndən sonra hər şey mükəmməl oldu. Həm görünüşü çox şıkdır, həm də oturacaqlar çox rahatdır. Dizayn, keyfiyyət və rahatlıq bir araya gəlib. Qonaqlarım da çox bəyənir! Sizin sayənizdə evimdə tam istədiyim atmosferi yaratdım. Çox sağ olun!",
    image: "/image/Mu84.jpg", // Replace with actual image paths
  },
  {
    name: "Müştəri rəyi",
    feedback:
      "Bu yataq bizim yataq otağımıza mükəmməl uyğunlaşdı. Dizaynı sadə, lakin çox zövqlüdür. LED işıqlandırması çox rahatlıq qatır və gecələr sakit bir atmosfer yaradır. Çox razı qaldıq!😊",
    image: "/image/Mu1.jpg",
  },
  {
    name: " Müştəri rəyi",
    feedback:
      " Masa və stul dəstini mətbəximdə yerləşdirəndən sonra baxdım ki, tam istədiyim kimi olub. Həm çox rahatdır, həm də əla uyğunlaşıb. Hər dəfə baxanda yaxşı ki, bunu seçmişəm deyirəm. Çox sağ olun! 🙏😊 ",
    image: "/image/Mu35riv.jpg",
  },
  {
    name: " Müştəri rəyi",
    feedback:
      "Bu masa və oturacaqlar dəsti tam olaraq gözləntilərimizi qarşıladı! Rahat oturacaqları və müasir dizaynı ilə həm gündəlik, həm də qonaqlıq üçün idealdır. Taxta detalları və mərmər səth çox zövqlü bir görünüş yaradır. Evimizə çox gözəllik qatdı!",
    image: "/image/Mu17.jpg", // Replace with actual image paths
  },
  {
    name: " Müştəri rəyi",
    feedback:
      "Mətbəximiz üçün seçdiyimiz bu masa dəsti həqiqətən möhtəşəmdir! Mərmər üslublu səthi həm zərif, həm də təmizlənməsi çox rahatdır. Oturacaqların dizaynı və rahatlığı isə uzun saatlar yemək masası ətrafında vaxt keçirmək üçün idealdır. Ümumi mətbəx interyerinə çox yaxşı uyğunlaşdı. Çox razıyıq!",
    image: "/image/Mu80.jpg", // Replace with actual image paths
  },
  {
    name: " Müştəri rəyi",
    feedback:
      "Bu gözəl masa və stul dəstəsinə görə sizə təşəkkür edirəm! Həm keyfiyyəti, həm də görünüşü çox gözəldir. Evimizə tam uyğun gəldi və hər kəs çox bəyəndi. Çox razı qaldıq, sizə uğurlar arzulayıram!",
    image: "/image/Mubb.jpg", // Replace with actual image paths
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  // Create a slice of the items array starting from the currentIndex
  const visibleItems = categories
    .slice(currentIndex, currentIndex + 5)
    .concat(
      categories.slice(0, Math.max(0, currentIndex + 5 - categories.length))
    );
  const bestsellerItems = products
    .slice(currentIndex, currentIndex + 5)
    .concat(products.slice(0, Math.max(0, currentIndex + 5 - products.length)));

  return (
    // Hero Section
    <>
      <MySlider />
      {/* //Section 1  */}

      <section
        className="section1"
        style={{ padding: "50px 0", backgroundColor: "#f8f9fa" }}
      >
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2
                style={{
                  color: "#141414",
                  fontWeight: "700",
                  wordWrap: "break-word",
                  // fontFamily:'Space Grotesk'
                }}
                className="display-5"
              >
                Rahatlıq və Harmoniyanı Öz Evində Birləşdir
              </h2>
              <p
                style={{
                  color: "#7F7F7F",
                  fontWeight: "700",
                  wordBreak: "break-word",
                }}
              >
              Türkiyə və Çin istehsalı fabrik məhsulları bir toxunuşla evinizdə
              </p>
            </Col>
          </Row>

          <Row>
            {categories.slice(3, 6).map((product, index) => (
              <Col key={index} xs={12} md={6} lg={4} className="mb-4">
                <Card
                  style={{ cursor: "pointer" }}
                  className="border-0 text-white"
                >
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/products/category/${product.name}`}
                  >
                    <Card.Img
                    className="card-image"
                      style={{ filter: "brightness(80%)" }}
                      src={product.image}
                      alt={product.name}
                    />

                    <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                      <Card.Title className="fw-bold">
                        {product.name}
                      </Card.Title>
                      <Card.Text>{product.description}</Card.Text>
                    </Card.ImgOverlay>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* En Cox Satilan  */}

      <section
        style={{ background: "#f8f9fa" }}
        className="product-section py-5"
      >
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2 className="display-6">Ən Çox Satılan Məhsullar</h2>
              <p className="lead">
              Müştərilərimizin seçimləri üzrə ən çox satılan məhsullardan sizdə öz dizaynınızı yarada bilərsiniz.
              </p>
            </Col>
          </Row>

          <div className="carousel-wrapper">
            <div className="carousel-container">
              <div className="carousel">
                {bestsellerItems.slice(0, 5).map((bestsell) => (
                  <div key={bestsell.id} className="karousel-item">
                  <Link to={`/product/${bestsell.id}`} style={{textDecoration:'none' }}>
                  <img
                      className="carousel-item-img"
                      variant="top"
                      src={bestsell.defaultImage}
                      alt={bestsell.name}
                    />
                    <div className="d-flex flex-column">
                      <div
                        style={{
                          fontFamily: "Space Grotesk",
                          fontWeight: "400",
                          color:'black',  
                          fontSize: "16px",
                        }}
                        className="carousel-item-caption"
                      >
                        {bestsell.name}
                      </div>
                      <div
                        style={{
                          color: "#E6AA04",
                          textAlign: "center",
                          fontFamily: "Space Grotesk",
                          wordWrap: "break-word",
                        }}
                        className="mt-auto  fw-bold"
                      >
                        {bestsell.price}₼
                      </div>
                    </div>
                  </Link>
                   
                  </div>
                ))}
              </div>
            </div>
            <button className="carousel-btn left-btn" onClick={prevSlide}>
              &#10094;
            </button>

            <button className="carousel-btn right-btn" onClick={nextSlide}>
              &#10095;
            </button>
          </div>
          {/* <Swiper
            spaceBetween={10}
            slidesPerView={3}
            navigation={true} // Enable navigation arrows
            style={{ maxWidth: "100%" }}
          >
            {bestsellerItems.slice(0, 5).map((bestsell, index) => (
              <SwiperSlide key={index}>
                <img
                  style={{
                    objectFit: "cover",
                    width: "100%", // Ensure the image takes full width
                    height: "auto", // Adjust height based on your needs
                  }}
                  src={bestsell.defaultImage}
                  alt={bestsell.name}
                />
                <div className="d-flex flex-column">
                  <div
                    style={{
                      fontFamily: "Space Grotesk",
                      fontWeight: "400",
                      fontSize: "16px",
                      textAlign: "center", // Center the text
                    }}
                    className="carousel-item-caption mt-2"
                  >
                    {bestsell.name}
                  </div>
                  <div
                    style={{
                      color: "#E6AA04",
                      textAlign: "center",
                      fontFamily: "Space Grotesk",
                      wordWrap: "break-word",
                    }}
                    className="mt-auto fw-bold"
                  >
                    {bestsell.price}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper> */}
        </Container>
      </section>

      {/* Hero banner 2  */}

      <div className="section-4 d-flex justify-content-center align-items-center" 
      style={{backgroundImage: "url('/image/File.jpg')",
    backgroundSize: "cover", // şəkil div-i tam dolduracaq
    backgroundPosition: "center", // şəkli ortalayacaq
    backgroundRepeat: "no-repeat", // şəkil təkrarlanmayacaq
    height: "800px", // BURADA ölçünü təyin edirsən
    width: "100%" // bu da div-in eni üçün
      }}>
        <div className="section4-content text-center">
          <h1 className="text-white display-5">
            Yeni Kampaniyalar Artıq Əlçatandır
          </h1>
          <p className="text-white lead">
          Bağınız üçün hər növ mebellər.
          </p>
          <Link to="/products" style={{ color: "inherit" }}>
            <Button
              className="cta-btn"
              variant="light"
              size="lg"
              style={{
                borderRadius: "30px",
                fontSize: "18px",
                background: "white",
              }}
            >
              DAHA Çox
            </Button>
          </Link>
        </div>
      </div>

      {/* Categories */}
      <section className="category-section py-5">
        <Container>
          <div className="text-center mb-4">
            <h2 className="display-6">Kateqoriyalar</h2>
            <p className="lead">
              Yeni model Türkiyə və Çin istehsalı mebel seçimləri!
            </p>
          </div>
          <div className="carousel-wrapper">
            <div className="carousel-container">
              <div className="carousel">
                {visibleItems.map((item) => (
                  <div key={item.id} className="karousel-item">
                    <img
                      className="carousel-item-img"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="carousel-item-caption">{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
            <button className="carousel-btn left-btn" onClick={prevSlide}>
              &#10094;
            </button>

            <button className="carousel-btn right-btn" onClick={nextSlide}>
              &#10095;
            </button>
          </div>
        </Container>
      </section>
      {/* About section  */}
      <div className="about-section d-flex justify-content-center align-items-center" style={{backgroundImage: "url('/image/jurnalbc.jpg')",
        backgroundSize: "cover", // şəkil div-i tam dolduracaq
        backgroundPosition: "center", // şəkli ortalayacaq
        backgroundRepeat: "no-repeat", // şəkil təkrarlanmayacaq
        height: "800px", // BURADA ölçünü təyin edirsən
        width: "100%" // bu da div-in eni üçün
      }}>
        <div className="about-content text-center">
          <h2 className="text-white">Haqqımızda Daha Ətraflı</h2>
          <p className="text-white">
            Evinizi ifadə etmək üçün 300-dən çox yol alın.
          </p>
          <Link to="/contact" style={{ color: "inherit" }}>
            <Button
              className="cta-btn"
              variant="primary"
              size="lg"
              style={{
                borderRadius: "30px",
                fontSize: "18px",
                background: "white",
              }}
            >
              DAHA Çox
            </Button>
          </Link>
        </div>
      </div>

      {/* Customer  Staisfaction */}
      <section className="customer-satisfaction py-5">
        <Container>
          <Row className="text-center mb-4">
            <Col>
            <h2 className="display-6" style={{ color: "red" }}>
  Geri Qaytarma Şərtləri
</h2>
              <p className="lead">
"Bizim üçün ən vacib olan müştərilərimizin məmnuniyyətidir. Bu səbəbdən məhsulun geri qaytarılması və dəyişdirilməsi qaydaları ilə sizi yaxından tanış etmək istəyirik."</p> 
              <p style={{ color: "orange" }}>1. Ümumi Şərtlər:</p>
Müştəri aldığı məhsulu 14 gün ərzində geri qaytara bilər.<br/>
Məhsul istifadə olunmamış, zədələnməmiş və orijinal qablaşdırmada olmalıdır.<br/>
Geri qaytarma üçün qəbz və ya faktura təqdim edilməlidir. <br/>

<p style={{ color: "orange" }}>2. Geri Qaytarma Prosesi</p>
1: Müştəri geri qaytarma üçün rəsmi WhatsApp nömrəsi ilə əlaqə saxlamalıdır.<br/>
2: Məhsulun vəziyyəti qiymətləndirilir və geri qaytarma təsdiqləndikdən sonra daşınma prosesi həyata keçirilir.<br/>
3: Geri qaytarma xərcləri əgər məhsulda istehsal qüsuru yoxdursa, müştərinin öhdəsinə düşür.<br/>
4: Ödəniş 5-7 iş günü ərzində müştərinin bank hesabına qaytarılır və ya nağd şəkildə ödənilir.<br/>

<p style={{ color: "red" }}>3. Aşağıdakı hallarda məhsul geri qaytarılmır:</p>
            1: Xüsusi sifarişlə (ölçü, rəng, material seçimi ilə) hazırlanmış mebellər.<br/>
2: Quraşdırılmış və ya istifadəyə verilmiş mebellər.<br/>
3: Zədələnmiş, ləkələnmiş və ya hər hansı şəkildə dəyişdirilmiş məhsullar.<br/>
4: Evinizə uyğunsuzluğunu qeyd etdiyiniz təqdirdə.
            </Col>
          </Row>

          <Row>
            {testimonials.map((testimonial, index) => (
              <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                <div className="h-100 ">
                  <Card.Img
                    variant="top"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <Card.Body style={{ marginTop: "13px" }}>
                    <Card.Title>{testimonial.name}</Card.Title>
                    <Card.Text>{testimonial.feedback}</Card.Text>
                  </Card.Body>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
