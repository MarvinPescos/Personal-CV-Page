import { ChevronRight, Mail, ExternalLink } from 'lucide-react';
import './ProjectsContact.css';

const projects = [
  {
    name: 'Minimal CMS Core',
    year: '2026',
    description: 'A minimal content management system core built for simplicity and extensibility.',
    link: 'github.com/MarvinPescos/minimal-cms-core',
    url: 'https://github.com/MarvinPescos/minimal-cms-core',
  },
  {
    name: 'HeraX Backend',
    year: '2025',
    description: 'Backend service for the HeraX platform.',
    link: 'github.com/MarvinPescos/heraX-backend',
    url: 'https://github.com/MarvinPescos/heraX-backend',
  },
];

export default function ProjectsContact() {
  return (
    <section className="projects-contact card animate-in delay-3">
      <div className="projects-contact-grid">
        <div className="projects-col">
          <div className="section-header">
            <h2 className="section-title">Recent Projects</h2>
            <a href="https://github.com/MarvinPescos" target="_blank" rel="noopener noreferrer" className="view-all-btn">
              View All <ChevronRight size={14} />
            </a>
          </div>
          <div className="project-list">
            {projects.map((project, idx) => (
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-item" key={idx}>
                <div className="project-header">
                  <h3 className="project-name">{project.name}</h3>
                  <span className="project-year">{project.year}</span>
                </div>
                <p className="project-desc">{project.description}</p>
                <span className="project-link">
                  {project.link}
                  <ExternalLink size={10} />
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="contact-col">
          <h2 className="section-title">Contact</h2>
          <div className="contact-list">
            <a href="mailto:marvinpescos@gmail.com" className="contact-item send-msg">
              <Mail size={16} />
              <div className="contact-info">
                <span className="contact-label">Send a Message</span>
                <span className="contact-value">marvinpescos@gmail.com</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
