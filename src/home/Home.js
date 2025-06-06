import About from "../about/About";
import BookAppointment from "../bookAppointment/BookAppointment";
import ContactUs from "../contactus/ContactUs";
import Doctors from "../doctor/Doctors";
import HeroImages from "../heroImages/HeroImages";
import Specialities from "../specialities/Specialities";

// import NavBar from './NavBar'
function Home(){
    return(
       <>
          <HeroImages></HeroImages>
          <About></About>
          <Specialities></Specialities>
          <Doctors></Doctors>
          <BookAppointment></BookAppointment>
          <ContactUs></ContactUs>
       </>
    )
}
export default Home;