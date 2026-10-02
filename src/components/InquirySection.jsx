import { useState } from 'react'

export default function InquirySection({ selectedTier }) {
  const [tierOverride, setTierOverride] = useState(null)
  const effectiveTier = tierOverride ?? selectedTier ?? 'Resident Athlete'

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    discipline: 'General Strength & Conditioning',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleTierChange = (e) => {
    setTierOverride(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.fullName.trim() || !formData.email.trim()) {
      return
    }
    // Frontend-only intake submission state
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    setTierOverride(null)
    setFormData({
      fullName: '',
      email: '',
      discipline: 'General Strength & Conditioning',
      message: '',
    })
  }

  return (
    <section id="inquire" className="section inquiry-section">
      <div className="container">
        <div className="inquiry-grid">
          {/* Left Column: Context & Guidelines */}
          <div className="inquiry-context">
            <span className="eyebrow">Information & Intake</span>
            <h2 className="section-title">
              Request membership information or a facility visit.
            </h2>
            <p className="inquiry-intro">
              Interested in training at the club? Send an inquiry to ask questions 
              about membership tiers, equipment, or schedule an in-person facility visit.
            </p>

            <div className="inquiry-points">
              <div className="point-item">
                <span className="point-marker">01</span>
                <div>
                  <h4 className="point-title">Facility Walkthrough</h4>
                  <p className="point-desc">Tour the lifting platforms, conditioning turf, and thermal contrast suites in person.</p>
                </div>
              </div>

              <div className="point-item">
                <span className="point-marker">02</span>
                <div>
                  <h4 className="point-title">Training Focus</h4>
                  <p className="point-desc">Discuss your training background, equipment preferences, and tier requirements.</p>
                </div>
              </div>

              <div className="point-item">
                <span className="point-marker">03</span>
                <div>
                  <h4 className="point-title">Membership Questions</h4>
                  <p className="point-desc">Receive complete details regarding tier privileges, amenities, and terms.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Accessible Form */}
          <div className="inquiry-card">
            {submitted ? (
              <div className="inquiry-success" role="alert">
                <span className="eyebrow">Inquiry Submitted</span>
                <h3 className="success-heading">Thank you, {formData.fullName}.</h3>
                <p className="success-body">
                  Your inquiry regarding the <strong>{effectiveTier}</strong> tier has been recorded.
                  (Frontend demonstration: this form is structured and ready to connect to your backend or CRM API).
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn-secondary"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="inquiry-form">
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">
                    Full Name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="e.g. Alex Vance"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="req">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="e.g. alex@domain.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="preferredTier" className="form-label">
                      Interested Tier
                    </label>
                    <select
                      id="preferredTier"
                      name="preferredTier"
                      value={effectiveTier}
                      onChange={handleTierChange}
                      className="form-select"
                    >
                      <option value="Resident Athlete">Resident Athlete</option>
                      <option value="Conditioning & Thermal">Conditioning & Thermal</option>
                      <option value="Private Athletic Patron">Private Athletic Patron</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="discipline" className="form-label">
                      Primary Focus
                    </label>
                    <select
                      id="discipline"
                      name="discipline"
                      value={formData.discipline}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="General Strength & Conditioning">Strength & Conditioning</option>
                      <option value="Olympic Barbell Training">Olympic Barbell Training</option>
                      <option value="Mobility & Joint Health">Mobility & Joint Health</option>
                      <option value="Thermal & Recovery Focus">Thermal & Recovery Focus</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Questions or Training Background (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Share any questions about equipment, schedule, or your training routine..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary full-width">
                  Send Inquiry
                </button>
                <p className="form-privacy-note">
                  Submissions are handled on the frontend and ready for backend integration.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
