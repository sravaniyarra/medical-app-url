import './specialities.css'
const specialties = [
  { icon: '❤️', title: 'Cardiology', desc: 'Heart and vascular care' },
  { icon: '🧠', title: 'Neurology', desc: 'Brain and nervous system' },
  { icon: '🦴', title: 'Orthopedics', desc: 'Bones and joints' },
  { icon: '👶', title: 'Pediatrics', desc: 'Child health care' },
  { icon: '🩺', title: 'General Medicine', desc: 'Comprehensive medical care' },
  // add more...
];

function Specialities(){

    return (
    <section className="specialties-section">
      <h2>Our Specialities</h2>
      <div className="specialties-grid">
        {specialties.map(({ icon, title, desc }) => (
          <div key={title} className="specialty-card">
            <div className="specialty-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
    
}
export default Specialities
