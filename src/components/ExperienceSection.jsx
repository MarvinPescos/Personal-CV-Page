import './ExperienceSection.css';

const experiences = [
  { role: 'BS in Information Technology', desc: 'Davao del Norte State College · Expected graduation 2027', year: '2023–2027', active: true },
  { role: 'Hello World!', desc: 'Started teaching myself to code', year: '2022', active: false },
];

export default function ExperienceSection() {
  return (
    <section className="experience-card card animate-in delay-1">
      <h2 className="section-title">Education</h2>
      <div className="exp-timeline">
        {experiences.map((exp, idx) => (
          <div className="exp-item" key={idx}>
            <div className="exp-dot-wrap">
              <div className={`exp-dot ${exp.active ? 'active' : ''}`}></div>
              {idx < experiences.length - 1 && <div className="exp-line"></div>}
            </div>
            <div className="exp-details">
              <h4 className="exp-role">{exp.role}</h4>
              <p className="exp-desc">{exp.desc}</p>
            </div>
            {exp.year && <span className="exp-year">{exp.year}</span>}
          </div>
        ))}
      </div>
    </section>
  );
}
