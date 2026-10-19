
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <Link className="brand footer-brand" to="/">
        <span className="brand-icon">🌿</span>
        <span>
          <strong>GreenCane Nursery</strong>
          <small>GROW WITH CONFIDENCE</small>
        </span>
      </Link>

      <p>Quality-focused sugarcane nursery enquiries.</p>

      <span>
        © {new Date().getFullYear()} GreenCane Nursery
      </span>
    </footer>
  )
}
