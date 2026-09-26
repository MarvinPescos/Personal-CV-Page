import {
  siPython, siFastapi, siPostgresql, siSolidity, siDocker, siGit, siGithub,
  siHuggingface, siOpenrouter, siBruno, siEthereum,
} from 'simple-icons';
import { Network, BrainCircuit, Hammer, Activity } from 'lucide-react';
import './TechStackSection.css';

// Near-black brand colors vanish in dark mode, so those follow the text color instead.
function isVeryDark(hex) {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.25;
}

function BrandIcon({ icon }) {
  const fill = isVeryDark(icon.hex) ? 'currentColor' : `#${icon.hex}`;
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" role="img" aria-hidden="true">
      <path d={icon.path} fill={fill} />
    </svg>
  );
}

const brand = (icon) => () => <BrandIcon icon={icon} />;
const lucide = (Icon, color) => () => <Icon size={16} color={color} aria-hidden="true" />;

const techStack = {
  'Backend': [
    { name: 'Python', Logo: brand(siPython) },
    { name: 'FastAPI', Logo: brand(siFastapi) },
    { name: 'PostgreSQL', Logo: brand(siPostgresql) },
    { name: 'REST APIs', Logo: lucide(Network, '#6366f1') },
  ],
  'AI / RAG': [
    { name: 'RAG pipelines', Logo: lucide(BrainCircuit, '#a855f7') },
    { name: 'Embeddings (sentence-transformers)', Logo: brand(siHuggingface) },
    { name: 'pgvector', Logo: brand(siPostgresql) },
    { name: 'LLM APIs (OpenRouter)', Logo: brand(siOpenrouter) },
    { name: 'Langfuse', Logo: lucide(Activity, '#0ea5e9') },
  ],
  'Blockchain': [
    { name: 'Solidity', Logo: brand(siSolidity) },
    { name: 'Foundry', Logo: lucide(Hammer, '#f97316') },
    { name: 'Web3.py', Logo: brand(siEthereum) },
  ],
  'Tools': [
    { name: 'Docker', Logo: brand(siDocker) },
    { name: 'Git', Logo: brand(siGit) },
    { name: 'GitHub', Logo: brand(siGithub) },
    { name: 'Bruno', Logo: brand(siBruno) },
  ],
};

export default function TechStackSection() {
  return (
    <section className="tech-stack-card card animate-in delay-2">
      <div className="section-header">
        <h2 className="section-title">Skills &amp; Tech Stack</h2>
      </div>
      {Object.entries(techStack).map(([category, skills]) => (
        <div className="tech-category" key={category}>
          <h3 className="tech-category-title">{category}</h3>
          <div className="tech-tags">
            {skills.map((skill) => (
              <span className="tag" key={skill.name}>
                <skill.Logo />
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
