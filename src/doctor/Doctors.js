import React from "react";
import './doctors.css';

function Doctors() {
  const doctors = [
    {
      doctorImg: "./images/pexels-tima-miroshnichenko-8376277.jpg",
      docName: "Dr. Isabella Rossi",
      docProfession: "Cardiologist",
    },
    {
      doctorImg: "./images/pexels-klaus-nielsen-6303564.jpg",
      docName: "Dr. Michael Andersen",
      docProfession: "Dermatologist",
    },
    {
      doctorImg: "./images/pexels-thirdman-5327580.jpg", // placeholder for emoji
      docName: "Dr. Sophie Dubois",
      docProfession: "Neurologist",
    },
     {
      doctorImg: "./images/istockphoto-1080237358-1024x1024.jpg", // placeholder for emoji
      docName: "Dr. Adam Novak",
      docProfession: "Brain & Spine Specialist",
    },
    {
      doctorImg: "./images/pexels-shkrabaanthony-5215024.jpg", // placeholder for emoji
      docName: "Dr. Hiroshi Tanaka",
      docProfession: "Pediatrician ",
    },
   {
      doctorImg: "./images/istockphoto-1298800629-1024x1024.jpg", // placeholder for emoji
      docName: "Dr. Ahmed El-Sayed",
      docProfession: "Gastroenterologist ",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Our Doctors</h2>
      <div className="row">
        {doctors.map(({ doctorImg, docName, docProfession }) => (
          <div key={docName} className="col-md-4 mb-4">
            <div className="card h-100 shadow">
             <img
               src={doctorImg}
               alt={docName}
               className="rounded-circle mx-auto d-block mt-4"
               style={{ width: "120px", height: "120px", objectFit: "cover" }}
             />
              <div className="card-body text-center">
                <h5 className="card-title">{docName}</h5>
                <p className="card-text">{docProfession}</p>
                <button className="btn btn-primary">Read More...</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;
