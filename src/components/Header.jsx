
import { Link } from 'react-router-dom'
import { LeafLogo, WhatsAppIcon } from './Icons'

export default function Header() {
  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="GreenCane Nursery home">
        <span className="brand-icon">
          <LeafLogo size={34} />
        </span>
        <span>
          <strong> GreenCane Nursery</strong>
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
        href="https://wa.me/918197588468"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp enquiry"
      >
        <WhatsAppIcon size={22} color="currentColor" />
      </a>
    </header>
  )
}
