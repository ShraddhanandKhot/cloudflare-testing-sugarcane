
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section className="about-section">
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=85"
          alt="Green agricultural fields"
        />
      </div>

      <div className="about-content">
        <span className="eyebrow">ABOUT OUR NURSERY</span>

        <h2>Helping Farmers Start With Confidence</h2>

        <p>
          We aim to make it easier for farmers to enquire about
          sugarcane seedlings, compare available varieties and
          plan their next planting.
        </p>

        <p>
          Tell us about your location, expected quantity and
          planting schedule so we can discuss availability and
          the next steps with you.
        </p>

        <Link className="button button-green" to="/contact">
          Talk to Our Team ↗
        </Link>
      </div>
    </section>
  )
}
