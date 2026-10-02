export default function MembershipPreview({ onSelectTier }) {
  const tiers = [
    {
      id: 'resident',
      badge: 'Core Access',
      name: 'Resident Athlete',
      subtitle: 'For independent practitioners focused on consistent compound strength and conditioning.',
      tierFocus: 'Full Floor & Free Weights Access',
      features: [
        'Access to the main conditioning floor and lifting platforms',
        'Olympic barbells, bumper plates, and dumbbell stations',
        'Locker rooms, towel amenities, and shower facilities',
        'General conditioning equipment and open turf lane',
      ],
      featured: false,
    },
    {
      id: 'thermal',
      badge: 'Comprehensive',
      name: 'Conditioning & Thermal',
      subtitle: 'Complete physical culture balance integrating heavy training and restorative hot-cold therapy.',
      tierFocus: 'Conditioning Floor + Thermal Contrast Suites',
      features: [
        'All Resident Athlete access included',
        'Access to cedar saunas and cold plunge contrast pools',
        'Mobility studio access with stall bars and release tools',
        'Extended recovery space and lounge access',
      ],
      featured: true,
    },
    {
      id: 'private',
      badge: 'Coaching',
      name: 'Private Athletic Patron',
      subtitle: 'For athletes seeking structured periodization, movement guidance, and tailored training.',
      tierFocus: 'Floor, Recovery + 1-on-1 Coaching Guidance',
      features: [
        'All Conditioning & Thermal amenities included',
        'Movement assessment and training periodization plan',
        'Dedicated 1-on-1 coaching sessions',
        'Personal locker storage options',
      ],
      featured: false,
    },
  ]

  const handleInquireClick = (tierName) => {
    if (onSelectTier) {
      onSelectTier(tierName)
    }
  }

  return (
    <section id="membership" className="section membership-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head-centered">
          <span className="eyebrow">Membership Tiers</span>
          <h2 className="section-title">
            Structured access for your training routine.
          </h2>
          <p className="section-subtext">
            Choose a tier that matches your regimen—from independent strength training 
            to comprehensive thermal recovery and coaching.
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="membership-grid">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`membership-card ${tier.featured ? 'is-featured' : ''}`}
            >
              <div className="membership-card-top">
                <span className="membership-badge">{tier.badge}</span>
                <h3 className="tier-name">{tier.name}</h3>
                <p className="tier-subtitle">{tier.subtitle}</p>
              </div>

              <div className="tier-inquiry-bar">
                <span className="pricing-placeholder-label">Access Focus</span>
                <span className="pricing-placeholder-val">{tier.tierFocus}</span>
              </div>

              <div className="tier-divider"></div>

              <ul className="tier-feature-list" aria-label={`${tier.name} features`}>
                {tier.features.map((feat, i) => (
                  <li key={i} className="tier-feature-item">
                    <span className="tier-check-icon" aria-hidden="true">—</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="tier-action-wrap">
                <a
                  href="#inquire"
                  className={tier.featured ? 'btn-primary full-width' : 'btn-secondary full-width'}
                  onClick={() => handleInquireClick(tier.name)}
                >
                  Inquire for {tier.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
