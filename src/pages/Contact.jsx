import React from "react";
import Slider from "../components/slider/MySlider";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaGift, FaBullseye } from 'react-icons/fa';
import './Contact.css';
const Contact =()=>{
    return(
<>
            {/* <Header/>*/}
            <Slider/> 
      <section className="about-contact-section py-5">
       <Container>
        {/* Header Section */}
        <Row className="text-center mb-4">
          <Col>
            <h2 className="display-6">Haqqımızda və Əlaqə</h2>
          </Col>
        </Row>

        {/* Description Section */}
        <Row>
          <Col xs={100} md={50}>
          <h style={{color:'rgba(0, 0, 0, 0.40)'}}>
          " RB Mobilya Mebel Şirkəti olaraq, yüksək keyfiyyətli Türkiyə və Çin istehsalı olan mebellərin satışını təmin edirik. Müştərilərimizə müasir dizayn və dayanıqlı materiallarla hazırlanmış geniş çeşidlər təqdim edirik. Siz mağazamızda, qonaq otağı, yataq otağı, mətbəx və bağınız üçün mükəmməl olan yüksək keyfiyyətli məhsulları geniş seçimlərlə əldə edə bilərsiniz."
            </h> 
          </Col>
        </Row>
        </Container>
        </section>
        {/* Cards Section */}
        <section className="info-cards py-5">
      <Container>
        <Row className="g-4">
          {/* Card 1 */}
          <Col xs={12} md={6} lg={6}>
            <Card className="h-100 border-0 ">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <FaMapMarkerAlt size={24} className="text-warning me-3" />
                  <h5 className="text-warning mb-0">Əsas ünvan</h5>
                </div>
                <Card.Text>
                  Bizi rahat şəkildə Sədərək Ticarət Mərkəzi, Beton yol 12 ünvanında tapa bilərsiniz. Bizim xüsusi komandamız sizə lazım ola biləcək hər hansı sorğu və ya dəstəyi ilə kömək etməyə hazırdır. Saat 09:00-18:00 arası iş saatlarımız ərzində +994552109650 nömrəsi ilə əlaqə saxlaya bilərsiniz.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col xs={12} md={6} lg={6}>
            <Card className="h-100 border-0 ">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <FaPhoneAlt size={24} className="text-warning me-3" />
                  <h5 className="text-warning mb-0">Əlaqə</h5>
                </div>
                <Card.Text>
                  Fərdi məhsul sifarişləri və hər hansı xüsusi tələblər üçün bizimlə əlaqə saxlayın. WhatsApp +994552109650 nömrəsi ilə birbaşa əlaqə yarada bilərsiniz.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col xs={12} md={6} lg={6}>
            <Card className="h-100 border-0 ">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <FaGift size={24} className="text-warning me-3" />
                  <h5 className="text-warning mb-0">Təklif Edirik</h5>
                </div>
                <Card.Text>
                  Müəyyən alış məbləğləri ilə siz pulsuz çatdırılma, pulsuz hədiyyə paketi və eksklüziv kuponlar ilə promo kodlar kimi xüsusi üstünlüklərdən istifadə edə və
                  şəhər daxili və rayonlara çatdırılma xidmətindən də yararlana bilərsiniz.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 4 */}
          <Col xs={12} md={6} lg={6}>
            <Card className="h-100 border-0 ">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                <FaBullseye style={{color:'white'}} size={24} className="text-warning me-3" />

                  <h5 className="text-warning mb-0">Məqsədimiz</h5>
                </div>
                <Card.Text>
                  Unudulmaz müştəri təcrübəsini təmin etmək üçün biz bir sıra əlavə xidmətlər təklif edirik. Mağazamıza yaxınlaşaraq məhsullarımızın keyfiyyəti və müxtəlif çeşidləri barədə ətraflı məlumat əldə edə bilərsiniz.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
           {/* Card 5 */}
           <Col xs={12} md={6} lg={6}>
            <Card className="h-100 border-0 ">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                <FaBullseye style={{color:'white'}} size={24} className="text-warning me-3" />

                  <h5 className="text-warning mb-0">Kredit Şərtləri</h5>
                </div>
                <Card.Text>
                  RB Mobilya olaraq məhsul seçimi zamanı yerindəcə və ya online şəkildə sifariş zamanı kredit şərtlərimizdən yararlanmağınızı təmin edirik.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Card 6 */}
          <Col xs={12} md={6} lg={6}>
            <Card className="h-100 border-0 ">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                <FaBullseye style={{color:'white'}} size={24} className="text-warning me-3" />

                  <h5 className="text-warning mb-0">Geri qaytarma şərtləri</h5>
                </div>
                <Card.Text>
                  Geri qaytarma şərtlərimizlə "Müştəri xidməti" bölməsinə keçid edərək daha yaxından tanış ola bilərsiniz.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      
    </section>
      
            {/* <Footer/> */}

</>
    );
};
export default Contact;