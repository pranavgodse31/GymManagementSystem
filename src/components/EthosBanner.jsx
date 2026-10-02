export default function EthosBanner() {
  return (
    <section id="ethos" className="section ethos-section">
      <div className="container">
        <div className="ethos-frame">
          <div className="ethos-header">
            <span className="eyebrow">The Club Manifesto</span>
            <blockquote className="ethos-quote">
              “We do not subscribe to hyper-stimulus, loud distractions, or transient 
              fitness fads. We believe in quiet consistency, technical mastery, 
              and space to train without compromise.”
            </blockquote>
          </div>

          <div className="ethos-pillars-grid">
            <div className="ethos-pillar">
              <span className="pillar-num">I</span>
              <h3 className="pillar-heading">Spatial Consideration</h3>
              <p className="pillar-body">
                Equipment layouts and training zones are planned with generous floor space to 
                support steady training tempo and minimize congestion.
              </p>
            </div>

            <div className="ethos-pillar">
              <span className="pillar-num">II</span>
              <h3 className="pillar-heading">Acoustic & Visual Stillness</h3>
              <p className="pillar-body">
                Natural daylight, balanced acoustics, and matte architectural finishes 
                create a focused atmosphere free from aggressive visual or auditory noise.
              </p>
            </div>

            <div className="ethos-pillar">
              <span className="pillar-num">III</span>
              <h3 className="pillar-heading">Complete Training Arc</h3>
              <p className="pillar-body">
                From pre-workout joint prep to heavy compound sets and post-session contrast 
                thermal recovery, every phase of your training lifecycle is addressed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
