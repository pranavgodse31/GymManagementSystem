export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Editorial Text Content */}
        <div className="hero-content">
          <div className="hero-eyebrow-wrap">
            <span className="eyebrow">Physical Culture & Conditioning</span>
          </div>

          <h1 className="hero-heading">
            Strength as discipline.
            <span className="hero-heading-italic"> Form as purpose.</span>
          </h1>

          <p className="hero-description">
            A sanctuary for deliberate movement. We provide an unhurried, 
            architectural athletic environment engineered for focused lifting, 
            progressive conditioning, and restorative thermal recovery.
          </p>

          <div className="hero-actions">
            <a href="#membership" className="btn-primary">
              View Memberships
            </a>
            <a href="#features" className="btn-secondary">
              Explore Disciplines
            </a>
          </div>
        </div>

        {/* Hero Visual Display */}
        <div className="hero-visual-wrapper">
          <div className="hero-image-frame">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=80"
              alt="Architectural strength training space with natural sunlight and precision free weights"
              className="hero-image"
              loading="eager"
            />
            <div className="hero-image-caption">
              <span className="caption-tag">Plate & Iron Hall</span>
              <span className="caption-detail">Natural light conditioning floor</span>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Key Principles Strip */}
      <div className="hero-metrics-strip">
        <div className="container">
          <div className="metrics-grid">
            <div className="metric-item">
              <span className="metric-number">01</span>
              <div>
                <h2 className="metric-title">Intentional Space</h2>
                <p className="metric-text">Uncluttered floor design providing ample space and focus for every training session.</p>
              </div>
            </div>

            <div className="metric-item">
              <span className="metric-number">02</span>
              <div>
                <h2 className="metric-title">Precision Equipment</h2>
                <p className="metric-text">Calibrated barbells, machined iron plates, and purpose-built lifting stations.</p>
              </div>
            </div>

            <div className="metric-item">
              <span className="metric-number">03</span>
              <div>
                <h2 className="metric-title">Thermal Recovery</h2>
                <p className="metric-text">Contrast plunge and dry sauna suites designed to complement progressive conditioning.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
