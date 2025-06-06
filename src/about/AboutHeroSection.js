// AboutHeroSection.js

import { Carousel, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutHeroSection.css';

function AboutHeroSection() {
  return (
    <div className="hero-section d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          {/* Left: Carousel Text */}
            <Col md={12}>
            <Carousel controls={false} indicators={false} interval={1000}>
              <Carousel.Item>
                <Row className="align-items-center">
                  <Col md={6} className='hero-text-box'>
                    <h1 className="hero-title"> Lab Testing Station</h1>
                    <p className="hero-tagline">
                        
                     Hands-on medical testing in progress with lab instruments and test samples—crucial for accurate diagnostics.
                    </p>
                  </Col>
                  <Col md={6} className="text-center">
                    <img
                      src="/images/pexels-thirdman-8940479.jpg"
                      alt="Hospital 1"
                      className="img-fluid rounded hero-image"
                    />
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row className="align-items-center">
                  <Col md={6} className='hero-text-box'>
                    <h1 className="hero-title">Nurse Assisting Patient Transport</h1>
                    <p className="hero-tagline">
                      A healthcare professional in scrubs transporting a wheelchair through a hospital hallway, reflecting compassionate and active patient support.
                    </p>
                  </Col>
                  <Col md={6} className="text-center">
                    <img
                      src="/images/pexels-rdne-6129141.jpg"
                      alt="Hospital 1"
                      className="img-fluid rounded hero-image"
                    />
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row className="align-items-center">
                  <Col md={6} className='hero-text-box'>
                    <h1 className="hero-title">Hospital Ward</h1>
                    <p className="hero-tagline">
                    A quiet hospital ward equipped with multiple patient beds and medical monitoring equipment, ready for care delivery.
                   
                    </p>
                  </Col>
                  <Col md={6} className="text-center">
                    <img
                      src="/images/pexels-pixabay-236380.jpg"
                      alt="Hospital 1"
                      className="img-fluid rounded hero-image"
                    />
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row className="align-items-center">
                  <Col md={6} className='hero-text-box'>
                    <h1 className="hero-title">About Zenius Health Care</h1>
                    <p className="hero-tagline">
                      Committed to Compassionate Care & Advanced Treatment.
                    </p>
                  </Col>
                  <Col md={6} className="text-center">
                    <img
                      src="/images/pexels-andre-124356440-11722768.jpg"
                      alt="Hospital 1"
                      className="img-fluid rounded hero-image"
                    />
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row className="align-items-center">
                  <Col md={6} className='hero-text-box'>
                    <h1 className="hero-title">Pioneering Precision in Diagnostics</h1>
                    <p className="hero-tagline">
                     At Zenius Health Care, we believe that cutting-edge research and accurate diagnostics are the backbone of effective treatment. 
                     Our labs are equipped with state-of-the-art technology,
                    </p>
                  </Col>
                  <Col md={6} className="text-center">
                    <img
                      src="/images/pexels-chokniti-khongchum-1197604-3938022.jpg"
                      alt="Hospital 1"
                      className="img-fluid rounded hero-image"
                    />
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </Col>

          {/* Right: Static Image */}
          {/* <Col md={6} className="text-center">
            <img
              src="/images/pexels-supplier-gorden-ready-stok-minimalis-21695059-7335565.jpg"
              alt="Hospital"
              className="img-fluid rounded hero-image"
            />
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default AboutHeroSection;
