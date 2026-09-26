import { Mail, Camera } from 'lucide-react';
import './FooterSection.css';

export default function FooterSection() {
  return (
    <section className="footer-section card animate-fade-in-up animate-delay-4">
      <div className="footer-grid footer-grid-compact">
        <div className="footer-col">
          <h3 className="footer-col-title">Social Links</h3>
          <div className="footer-socials">
            <a href="https://github.com/MarvinPescos" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <div className="social-icon-wrapper github">GH</div>
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-contact-items">
            <a href="mailto:marvinpescos@gmail.com" className="footer-contact-item">
              <Mail size={16} />
              <div>
                <span className="contact-label">Email</span>
                <span className="contact-value">marvinpescos@gmail.com</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
