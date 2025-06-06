import { useState } from "react"
import './BookAppointment.css'
function BookAppointment(){
     const [formData,setFormData] = useState({
         firstname:'',
         lastname:'',
         email:'',
         mbnumber:'',
         appointmentType:'',
         doctor:''
        })
      const [errors,setErrors] = useState({})

      function handleChange(e){
           const {id,value} = e.target;
           setFormData({...formData,[id]:value})
      }
      const handleSubmit = (e)=>{
         e.preventDefault();
         if(validate()){
            alert("Successfully booked your appointment");
            console.log(formData)
         }
      }
      const validate=()=>{
               let newErrors = {};
               if(!formData.firstname.trim()) newErrors.firstname = "First name is required"
               if(!formData.lastname.trim()) newErrors.lastname = "Last name is required"
               if(!formData.email.trim()) newErrors.email ="Email required"
               else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
               if(!formData.mbnumber.trim()) newErrors.mbnumber ="Mobile number required"
              else if (!/^\d{10}$/.test(formData.mbnumber)) newErrors.mbnumber = "Enter a valid 10-digit number";
               if (!formData.appointmentType) newErrors.appointmentType = "Please select appointment type";
               if (!formData.doctor) newErrors.doctor = "Please select a doctor";

               setErrors(newErrors);

               return Object.keys(newErrors)===0;

      }
   return(
    
      <>
          <div className="container mt-5">
            <div className="responsive-form-border mx-auto">
            <h2 className="mb-4 text-center">Book An Appointment</h2>
               <form onSubmit={handleSubmit}>
                  <div className="row">
                     <div className="col-md-6 mb-3">
                        <label htmlFor="firstname" className="form-label">First Name</label>
                        <input type="text" className="form-control " id="firstname" placeholder="Enter your first name" onChange={handleChange} />
                        {errors.firstname && <small className="text-danger">{errors.firstname}</small>}
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="lastname" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastname" placeholder="Enter your last name" onChange={handleChange} />
                        {errors.lastname && <small className="text-danger">{errors.lastname}</small>}
                     </div>
                  </div>
                    <div className="row">
                     <div className="col-md-6 mb-3">
                        <label htmlFor="mbnumber" className="form-label">Mobile Number</label>
                        <input type="text" className="form-control" id="mbnumber" placeholder="Enter your Mobile number" onChange={handleChange} />
                         {errors.mbnumber && <small className="text-danger">{errors.mbnumber}</small>}
                     </div>
                     <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={handleChange} />
                         {errors.email && <small className="text-danger">{errors.email}</small>}
                     </div>
                  </div>
                   <div className="row">
                     <div className="col-md-6 mb-3">
                        <label htmlFor="appointmentType" className="form-label">Appointment Type</label>
                            <select id="appointmentType" className="form-select" onChange={handleChange} >
                           <option value="">-- Choose --</option>
                           <option value="appointment">Book Appointment</option>
                           <option value="consultation">Consultation</option>
                           <option value="report">View Report</option>
                        </select>
                         {errors.appointmentType && <small className="text-danger">{errors.appointmentType}</small>}
                     </div>
                     <div className="col-md-6 mb-3">
                          <label htmlFor="doctor" className="form-label">Select Doctor</label>
                          <select id="doctor" className="form-select" onChange={handleChange}>
                           <option value="">-- Choose --</option>
                           <option value="doctor1">Dr. Isabella Rossi – Cardiologist</option>
                           <option value="doctor2">Dr. Michael Andersen – Dermatologist</option>
                           <option value="doctor3">Dr. Sophie Dubois – Neurologist</option>
                            <option value="doctor4">  Dr. Adam Novak – Brain & Spine Specialist</option>  
                        </select>
                        {errors.doctor && <small className="text-danger">{errors.doctor}</small>}
                     </div>
                  </div>
                   <div className="col-12 text-center">
                       <button type="submit" className="btn btn-primary px-5 w-50">Submit</button>
                   </div>
               </form>
            </div>
         </div>
            
        
      </>
   )
}

export default BookAppointment