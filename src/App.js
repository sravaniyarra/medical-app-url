
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './home/Home';
import HeroImages from './heroImages/HeroImages';
import BookAppointment from './bookAppointment/BookAppointment';
import Doctors from './doctor/Doctors';
import About from './about/About';
import ContactUs from './contactus/ContactUs';
import NavBar from './navBar/NavBar';
import Specialities from './specialities/Specialities'


function App() {
  return (
  
   <BrowserRouter>
    <NavBar /> 
   <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contactus" element={<ContactUs />}/>
        <Route path="/heroimages" element={<HeroImages />}/>
        <Route path="/bookApp" element={<BookAppointment />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/doctors" element={<Doctors />}/>
        <Route path="/specialities" element={<Specialities />} />
   </Routes>
  </BrowserRouter>
      
  );
}

export default App;
