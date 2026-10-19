import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Varieties from './pages/Varieties'
import About from './pages/About'
import Contact from './pages/Contact'

function NotFound() {
  return (
    <section className="section">
      <div className="section-heading">
        <span className="eyebrow">404 ERROR</span>
        <h2>Page Not Found</h2>
        <p>The page you're looking for doesn't exist.</p>
        <a className="button button-green" href="/sugarcane/">
          Return Home
        </a>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <BrowserRouter
  basename={
    window.location.pathname.toLowerCase().startsWith('/sugarcane')
      ? '/sugarcane'
      : '/'
  }
>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/varieties" element={<Varieties />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}
