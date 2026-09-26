import { ChevronRight, ExternalLink } from 'lucide-react';
import './ProjectsSection.css';

const projects = [
  {
    name: 'Minimal CMS Core',
    year: '2026',
    description: 'Multi-tenant CMS API for local businesses like shops, churches, and cafes. It powered the content of two live client sites, Cold Brew Coffee Co. and Gospel Bible Baptist Church. I built the back-end; a friend built the front-ends. Built with FastAPI, PostgreSQL (Supabase), Redis rate limiting, and Alembic migrations.',
    links: [
      { label: 'github.com/MarvinPescos/minimal-cms-core', url: 'https://github.com/MarvinPescos/minimal-cms-core' },
      { label: 'Live: Cold Brew Coffee Co.', url: 'https://cold-brew-coffee.vercel.app/' },
      { label: 'Live: Gospel Bible Baptist Church', url: 'https://gospel-bible-baptist-church.vercel.app/' },
    ],
  },
  {
    name: 'LexChain Backend',
    year: '2026',
    description: 'Capstone project: a digital notarial register for notaries to manage their notarial books, pages, and entries, with RAG-powered search over legal documents and on-chain document hashing for tamper-proof records. Built with FastAPI, PostgreSQL (Supabase), pgvector, Solidity, and Docker.',
    links: [
      { label: 'github.com/MarvinPescos/lexchain_backend', url: 'https://github.com/MarvinPescos/lexchain_backend' },
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section className="projects-card card animate-in delay-3">
      <div className="section-header">
        <h2 className="section-title">Recent Projects</h2>
        <a href="https://github.com/MarvinPescos" target="_blank" rel="noopener noreferrer" className="view-all-btn">
          View All <ChevronRight size={14} />
        </a>
      </div>
      <div className="project-list">
        {projects.map((project, idx) => (
          <div className="project-item" key={idx}>
            <div className="project-header">
              <h3 className="project-name">{project.name}</h3>
              <span className="project-year">{project.year}</span>
            </div>
            <p className="project-desc">{project.description}</p>
            <div className="project-links">
              {project.links.map((link) => (
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="project-link" key={link.url}>
                  {link.label}
                  <ExternalLink size={10} />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
