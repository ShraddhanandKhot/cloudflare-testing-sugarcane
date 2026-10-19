
import { Link } from 'react-router-dom'

const services = [
  {
    icon: '🌱',
    title: 'Quality Seedlings',
    description:
      'Enquire about nursery-grown plants and current availability.',
  },
  {
    icon: '🚜',
    title: 'Bulk Orders',
    description:
      'Discuss quantities and scheduling for your farm.',
  },
  {
    icon: '🌾',
    title: 'Planting Guidance',
    description:
      'Get practical information about planting and crop care.',
  },
]

export default function Home() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-overlay" />

        <div className="hero-content">
          <span className="eyebrow eyebrow-light">
            GROW BETTER · HARVEST BETTER
          </span>

          <h1>
            Strong Seedlings.
            <br />
            <span>Stronger Harvests.</span>
          </h1>

          <p>
            Quality sugarcane seedlings and helpful guidance
            to get your next crop off to a healthy start.
          </p>

          <div className="hero-actions">
            <Link className="button button-green" to="/varieties">
              Explore Varieties →
            </Link>

            <Link className="button button-outline-light" to="/contact">
              Contact Us ↗
            </Link>
          </div>

          <div className="hero-note">
            <span className="note-dot" />
            Enquire about availability and bulk orders
          </div>
        </div>

        <aside className="hero-card">
          {[
            ['🌱', 'Nursery-grown plants', 'Carefully managed seedlings'],
            ['🚜', 'Bulk enquiries welcome', 'For farmers and grower groups'],
            ['🤝', 'Helpful guidance', 'Ask before you order'],
          ].map(([icon, title, description]) => (
            <div className="hero-card-item" key={title}>
              <span className="feature-icon">{icon}</span>
              <div>
                <strong>{title}</strong>
                <small>{description}</small>
              </div>
            </div>
          ))}
        </aside>
      </section>

      <section className="trust-bar">
        <div>
          <span>🌿</span>
          <p><strong>Healthy Plants</strong><small>Quality-focused care</small></p>
        </div>
        <div>
          <span>🌾</span>
          <p><strong>Variety Options</strong><small>Ask about current stock</small></p>
        </div>
        <div>
          <span>👨‍🌾</span>
          <p><strong>Farmer First</strong><small>Friendly assistance</small></p>
        </div>
        <div>
          <span>📍</span>
          <p><strong>Local Enquiries</strong><small>Ask about delivery</small></p>
        </div>
      </section>

      <section className="section services-section">
        <div className="section-heading">
          <span className="eyebrow">HOW WE HELP</span>
          <h2>More Than Just Seedlings</h2>
          <p>
            Practical support to help you plan your nursery
            purchase and planting.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <div>
          <span className="eyebrow eyebrow-light">LET'S TALK</span>
          <h2>Planning Your Next Sugarcane Crop?</h2>
          <p>Contact us to ask about seedlings, quantities and availability.</p>
        </div>

        <Link className="button button-white" to="/contact">
          Send an Enquiry ↗
        </Link>
      </section>
    </>
  )
}
