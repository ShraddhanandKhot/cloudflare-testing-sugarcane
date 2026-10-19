
import { Link } from 'react-router-dom'
import { LeafLogo } from './Icons'

export default function Footer() {
  return (
    <footer className="site-footer">
      <Link className="brand footer-brand" to="/">
        <span className="brand-icon">
          <LeafLogo size={28} />
        </span>
        <span>
          <strong>GreenCane Nursery</strong>
          <small>GROW WITH CONFIDENCE</small>
        </span>
      </Link>

      <p>Quality-focused sugarcane nursery enquiries.</p>

      <span>
        Copyright {new Date().getFullYear()} GreenCane Nursery
      </span>
    </footer>
  )
}
