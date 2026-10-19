
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="GreenCane Nursery home">
        <span className="brand-icon">🌿</span>
        <span>
          <strong>Khot GreenCane Nursery</strong>
          <small>QUALITY SUGARCANE SEEDLINGS</small>
        </span>
      </Link>

      <nav className="main-nav" aria-label="Main navigation">
        <Link to="/">Home</Link>
        <Link to="/varieties">Varieties</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <a
        className="button button-green header-cta"
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp Enquiry ↗
      </a>
    </header>
  )
}
