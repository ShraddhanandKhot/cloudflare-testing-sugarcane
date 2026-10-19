
import './App.css'

const varieties = [
  {
    name: 'Co-86032',
    tag: 'Popular variety',
    description: 'A widely cultivated sugarcane variety. Ask us about suitability for your region.',
    image:
      'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Co-0238',
    tag: 'Farmer favourite',
    description: 'Ask our team about availability, planting requirements and local suitability.',
    image:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'SU-01',
    tag: 'Explore availability',
    description: 'Contact us to learn about current stock and options for your farm.',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85',
  },
]

const services = [
  {
    icon: '🌱',
    title: 'Quality Seedlings',
    description:
      'Carefully managed nursery plants, with availability confirmed before ordering.',
  },
  {
    icon: '🚜',
    title: 'Bulk Orders',
    description:
      'Enquire about quantities and scheduling for farmers, groups and agricultural businesses.',
  },
  {
    icon: '🌾',
    title: 'Planting Guidance',
    description:
      'Get practical information about planting, spacing and caring for young crops.',
  },
]

function WhatsAppLink({ children, className = '' }) {
  // Replace this placeholder with the nursery's WhatsApp number.
  const phoneNumber = '91XXXXXXXXXX'
  const message = encodeURIComponent(
    'Hello! I would like to enquire about sugarcane seedlings.',
  )

  return (
    <a
      className={className}
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  )
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="GreenCane Nursery home">
        <span className="brand-icon">🌿</span>
        <span>
          <strong>GreenCane Nursery</strong>
          <small>QUALITY SUGARCANE SEEDLINGS</small>
        </span>
      </a>

      <nav className="main-nav" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#varieties">Varieties</a>
        <a href="#services">Our Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <WhatsAppLink className="button button-green header-cta">
        WhatsApp Enquiry ↗
      </WhatsAppLink>
    </header>
  )
}

function Hero() {
  return (
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
          Quality sugarcane seedlings and helpful guidance to get your next
          crop off to a healthy start.
        </p>
        <div className="hero-actions">
          <a className="button button-green" href="#varieties">
            Explore Varieties <span>→</span>
          </a>
          <WhatsAppLink className="button button-outline-light">
            WhatsApp Us ↗
          </WhatsAppLink>
        </div>
        <div className="hero-note">
          <span className="note-dot" />
          Enquire about availability and bulk orders
        </div>
      </div>

      <aside className="hero-card">
        <div className="hero-card-item">
          <span className="feature-icon">🌱</span>
          <div>
            <strong>Nursery-grown plants</strong>
            <small>Carefully managed seedlings</small>
          </div>
        </div>
        <div className="hero-card-item">
          <span className="feature-icon">🚜</span>
          <div>
            <strong>Bulk enquiries welcome</strong>
            <small>For farmers and grower groups</small>
          </div>
        </div>
        <div className="hero-card-item">
          <span className="feature-icon">🤝</span>
          <div>
            <strong>Helpful guidance</strong>
            <small>Ask before you order</small>
          </div>
        </div>
      </aside>
    </section>
  )
}

function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Our priorities">
      <div><span>🌿</span><p><strong>Healthy Plants</strong><small>Quality-focused care</small></p></div>
      <div><span>🌾</span><p><strong>Variety Options</strong><small>Ask about current stock</small></p></div>
      <div><span>👨‍🌾</span><p><strong>Farmer First</strong><small>Friendly assistance</small></p></div>
      <div><span>📍</span><p><strong>Local Enquiries</strong><small>Ask about delivery</small></p></div>
    </section>
  )
}

function SectionHeading({ label, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{label}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

function Varieties() {
  return (
    <section className="section varieties-section" id="varieties">
      <div className="section-top">
        <SectionHeading
          label="OUR SUGARCANE"
          title="Find the Right Variety"
          description="Explore available options and contact us to discuss what may suit your growing conditions."
        />
        <WhatsAppLink className="button button-outline-green">
          Ask About Varieties ↗
        </WhatsAppLink>
      </div>

      <div className="variety-grid">
        {varieties.map((variety) => (
          <article className="variety-card" key={variety.name}>
            <img src={variety.image} alt={`${variety.name} agricultural plants`} loading="lazy" />
            <div className="variety-body">
              <span className="card-tag">{variety.tag}</span>
              <h3>{variety.name}</h3>
              <p>{variety.description}</p>
              <WhatsAppLink className="text-link">
                Enquire about this variety →
              </WhatsAppLink>
            </div>
          </article>
        ))}
      </div>
      <p className="disclaimer">
        Variety availability and agronomic suitability should be confirmed with
        the nursery before placing an order.
      </p>
    </section>
  )
}

function Services() {
  return (
    <section className="section services-section" id="services">
      <SectionHeading
        label="HOW WE HELP"
        title="More Than Just Seedlings"
        description="Practical support to help you plan your nursery purchase and planting."
      />
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
  )
}

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=85"
          alt="Green agricultural fields"
          loading="lazy"
        />
      </div>
      <div className="about-content">
        <span className="eyebrow">ABOUT OUR NURSERY</span>
        <h2>Helping Farmers Start With Confidence</h2>
        <p>
          We aim to make it easier for farmers to enquire about sugarcane
          seedlings, compare available varieties and plan their next planting.
        </p>
        <p>
          Tell us about your location, expected quantity and planting schedule.
          Our team can then discuss availability and next steps with you.
        </p>
        <WhatsAppLink className="button button-green">
          Talk to Our Team ↗
        </WhatsAppLink>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div>
        <span className="eyebrow eyebrow-light">LET'S TALK</span>
        <h2>Planning Your Next Sugarcane Crop?</h2>
        <p>Contact us to ask about seedlings, quantities and availability.</p>
      </div>
      <WhatsAppLink className="button button-white">
        Send an Enquiry ↗
      </WhatsAppLink>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <a className="brand footer-brand" href="#home">
        <span className="brand-icon">🌿</span>
        <span>
          <strong>GreenCane Nursery</strong>
          <small>GROW WITH CONFIDENCE</small>
        </span>
      </a>
      <p>Quality-focused sugarcane nursery enquiries.</p>
      <span>© {new Date().getFullYear()} GreenCane Nursery</span>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Varieties />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
