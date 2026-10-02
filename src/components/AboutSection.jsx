export default function AboutSection() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-editorial-grid">
          {/* Left Text Column */}
          <div className="about-content">
            <span className="eyebrow">The Space & Principle</span>
            <h2 className="section-title">
              Designed for focus. Built for deliberate work.
            </h2>
            <p className="about-lead">
              A physical training environment focused on deliberate work—where acoustics, 
              equipment layout, and natural light combine to remove distractions 
              and support consistent progress.
            </p>
            <p className="about-text">
              Every detail—from the open platform arrangement to dedicated thermal contrast suites—is 
              structured to keep you centered on your regimen. Whether moving through compound strength 
              progressions or restoring in the sauna, the space is built for focused practice.
            </p>

            <div className="about-stats-row">
              <div className="about-stat">
                <span className="about-stat-value">Lifting</span>
                <span className="about-stat-label">Dedicated platforms for compound barbell training</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-value">Mobility</span>
                <span className="about-stat-label">Quiet studio space for joint preparation and release</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-value">Contrast</span>
                <span className="about-stat-label">Hot sauna and cold plunge recovery suites</span>
              </div>
            </div>
          </div>

          {/* Right Photographic Column */}
          <div className="about-image-wrapper">
            <div className="about-image-card">
              <img
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1000&q=80"
                alt="Minimalist athletic conditioning equipment with warm sunlight"
                className="about-image"
                loading="lazy"
              />
              <div className="about-image-overlay">
                <span className="overlay-caption">Natural materials, matte finishes, zero clutter.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
