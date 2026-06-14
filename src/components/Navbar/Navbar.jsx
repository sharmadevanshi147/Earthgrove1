import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import NavLink from '../ui/NavLink'
import logoSrc from '/assets/Logo.svg'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'Home',       href: '/'         },
  { label: 'About',      href: '/about'    },
  { label: 'Services',   href: '/services' },
  { label: 'Projects',   href: '/projects' },
  { label: 'Contact Us', href: '/contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close mobile menu on route change */
  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  /* Prevent body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.header
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        <Link to="/" className={styles.logoLink} aria-label="Earth Grove home">
          <img src={logoSrc} alt="Earth Grove" className={styles.logo} />
        </Link>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.07 }}
            >
              <NavLink href={href}>{label}</NavLink>
            </motion.div>
          ))}
        </nav>

        {/* Hamburger button */}
        <button
          className={styles.hamburger}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          <motion.span
            className={styles.bar}
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.span
            className={styles.bar}
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className={styles.bar}
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
        </button>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav aria-label="Mobile navigation">
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={href}
                    className={`${styles.mobileLink} ${location.pathname === href ? styles.mobileLinkActive : ''}`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
