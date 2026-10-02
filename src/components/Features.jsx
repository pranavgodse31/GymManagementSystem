export default function Features() {
  const disciplines = [
    {
      num: '01',
      title: 'Barbell & Classical Resistance',
      description:
        'Uncluttered Olympic platforms equipped with calibrated steel plates, Eleiko bars, and custom dumbbell suites engineered for compound movement.',
      detail: 'Squat racks · Deadlift platforms · Custom racks',
      image:
        'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'Barbell and weights arranged neatly on a gym floor with wooden textures',
    },
    {
      num: '02',
      title: 'Metabolic Conditioning & Engine',
      description:
        'Dedicated non-motorized treadmills, dual-action air bikes, rowing ergs, and indoor turf lanes designed for deliberate energy system development.',
      detail: 'Sprint turf · Ergometer suite · Plyometric zone',
      image:
        'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'Clean athletic conditioning studio with natural morning light',
    },
    {
      num: '03',
      title: 'Structural Mobility & Flexibility',
      description:
        'Low-stimulus studio with stall bars, mobility tools, and soft lighting dedicated to active release, postural decompression, and joint mechanics.',
      detail: 'Stall bars · Foam rollers · Targeted release tools',
      image:
        'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'Quiet mobility and movement practice area',
    },
    {
      num: '04',
      title: 'Thermal Suite & Cold Plunge',
      description:
        'Finnish dry cedar saunas and temperature-regulated cold plunge pools designed to optimize vascular tone, reduce fatigue, and restore neural state.',
      detail: '85°C Cedar sauna · 8°C Cold plunge · Stillness lounge',
      image:
        'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'Calm Scandinavian inspired thermal sauna and timber relaxation suite',
    },
  ]

  return (
    <section id="features" className="section disciplines-section">
      <div className="container">
        {/* Editorial Section Header */}
        <div className="section-head-split">
          <div>
            <span className="eyebrow">Disciplines of Practice</span>
            <h2 className="section-title">
              Crafted spaces for deliberate physical progression.
            </h2>
          </div>
          <div className="section-head-desc">
            <p>
              Each zone inside the club is purpose-designed with acoustics, 
              spacious layout proportions, and world-class equipment to eliminate 
              friction and focus your session.
            </p>
          </div>
        </div>

        {/* Disciplines Editorial List */}
        <div className="disciplines-grid">
          {disciplines.map((item) => (
            <article key={item.num} className="discipline-item">
              <div className="discipline-image-box">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="discipline-img"
                  loading="lazy"
                />
                <span className="discipline-badge">{item.num}</span>
              </div>
              <div className="discipline-info">
                <h3 className="discipline-title">{item.title}</h3>
                <p className="discipline-desc">{item.description}</p>
                <div className="discipline-meta">
                  <span className="discipline-detail-text">{item.detail}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
