import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroImages.css';
import { useNavigate } from 'react-router-dom';

function HeroImages() {
     const navigate = useNavigate()

    function bookAppointment(){
        navigate('/bookApp')
    }
  return (
    <Carousel className='custom-carousel' controls={false} indicators={false}>
      <Carousel.Item>
        <img className="d-block w-100 active" src="/images/pexels-shkrabaanthony-5214955.jpg"  alt="Slide 0" />
         <Carousel.Caption className="custom-caption">
          {/* Full caption visible on md+ screens */}
         <h3 className="d-none d-md-block">Zenius Health Care</h3>
        <p className="d-none d-md-block">
            Empowering lives with compassionate, modern medical care.
        </p>

       {/* Short caption visible only on small screens */}
       <p className="d-block d-md-none">Quick care, anywhere.</p>

          <button className='btn btn-primary' onClick={bookAppointment}>Book An Appointment</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroImages
