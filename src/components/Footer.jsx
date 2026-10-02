export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-root">
      <div className="container">
        {/* Top Grid */}
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <span className="brand-title">AETHEL</span>
            <span className="brand-subtitle">ATHLETIC CLUB</span>
            <p className="footer-brand-desc">
              An architectural space dedicated to deliberate physical conditioning, 
              classical barbell training, and thermal restoration.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-list">
              <li><a href="#hero" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">The Club</a></li>
              <li><a href="#features" className="footer-link">Disciplines</a></li>
              <li><a href="#ethos" className="footer-link">Manifesto</a></li>
              <li><a href="#membership" className="footer-link">Memberships</a></li>
              <li><a href="#inquire" className="footer-link">Inquiry</a></li>
            </ul>
          </div>

          {/* Disciplines Column */}
          <div className="footer-disciplines-col">
            <h4 className="footer-col-title">Disciplines</h4>
            <ul className="footer-list">
              <li><a href="#features" className="footer-link">Barbell & Resistance</a></li>
              <li><a href="#features" className="footer-link">Metabolic Conditioning</a></li>
              <li><a href="#features" className="footer-link">Structural Mobility</a></li>
              <li><a href="#features" className="footer-link">Thermal & Cold Plunge</a></li>
            </ul>
          </div>

          {/* Contact / Inquire Column */}
          <div className="footer-inquiry-col">
            <h4 className="footer-col-title">Facility Visits</h4>
            <p className="footer-standards-text">
              Have questions regarding membership tiers, equipment, or training spaces? 
              Submit an inquiry to connect with our team.
            </p>
            <div className="footer-inquiry-box">
              <a href="#inquire" className="footer-inquiry-link">
                Request Facility Walkthrough &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copy">
            &copy; {currentYear} Aethel Athletic Club. All rights reserved.
          </p>
          <div className="footer-secondary-links">
            <span className="footer-tagline">Strength · Movement · Restoration</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
