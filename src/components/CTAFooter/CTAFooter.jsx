import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import styles from './CTAFooter.module.css'

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
    </svg>
  )
}
function IconYouTube() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22.54 6.42A2.78 2.78 0 0 0 20.6 4.47C18.88 4 12 4 12 4s-6.88 0-8.6.47A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.53C5.12 20 12 20 12 20s6.88 0 8.6-.47a2.78 2.78 0 0 0 1.94-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
    </svg>
  )
}
function IconLinkedIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}
function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}
function IconX() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

const NAV_COLS = [
  [
    { label: 'Home',       href: '/'         },
    { label: 'About',      href: '/about'    },
    { label: 'Services',   href: '/services' },
    { label: 'Projects',   href: '/projects' },
    { label: 'Contact Us', href: '/contact'  },
  ],
  [
    { label: 'Residential',              href: '/services/residential'   },
    { label: 'Commercial',                href: '/services/commercial'    },
    { label: 'Temples',                   href: '/services/temples'       },
    { label: 'Corporate',                 href: '/services/corporate'     },
    { label: 'Institutional',             href: '/services/institutional' },
    { label: 'Interiors',                 href: '/services/interiors'     },
    { label: 'Farmhouse',                 href: '/services/farmhouse'     },
    { label: 'Vaastu',                    href: '/services/vaastu'        },
    { label: '3D Walkthrough',            href: '/services/walkthrough'   },
    { label: 'Green Board Certification', href: '/services/greenboard'    },
  ],
  [
    { label: 'Our Founders', href: '/about' },
    { label: 'Our Story',    href: '/about' },
  ],
]

const SOCIALS = [
  { label: 'Instagram', Icon: IconInstagram },
  { label: 'YouTube',   Icon: IconYouTube   },
  { label: 'LinkedIn',  Icon: IconLinkedIn  },
  { label: 'Facebook',  Icon: IconFacebook  },
  { label: 'X',         Icon: IconX         },
]

export default function CTAFooter({ showCTA = true }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { pathname } = useLocation()

  return (
    <div ref={ref} id="contact" className={styles.wrapper}>

      {showCTA && (
        <motion.div
          className={styles.ctaCard}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h2
            className={styles.ctaHeading}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            Build Your<br />Dream Today
          </motion.h2>
          <motion.p
            className={styles.ctaContact}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            care@earthgrove.com&nbsp;&nbsp;•&nbsp;&nbsp;909-800-6778
          </motion.p>
        </motion.div>
      )}

      <footer className={styles.footer}>
        <div className={styles.footerInner}>

          <div className={styles.footerMain}>
            <div className={styles.footerBrand}>
              <span className={styles.footerLogo}>Earth Grove</span>
              <p className={styles.footerTagline}>
                Creating Timeless ideas &amp;<br />Buildings of Tomorrow
              </p>
              <div className={styles.socials}>
                {SOCIALS.map(({ label, Icon }) => (
                  <a key={label} href="#" className={styles.socialLink} aria-label={label}>
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.footerNav}>
              {NAV_COLS.map((col, i) => (
                <ul key={i} className={styles.navCol}>
                  {col.map(({ label, href }) => {
                    const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
                    return (
                      <li key={label}>
                        <Link
                          to={href}
                          className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                        >
                          {label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              ))}
            </div>
          </div>

          <div className={styles.footerBottom}>
            <span className={styles.footerCopy}>
              Copyright {new Date().getFullYear()}, Earth Grove LLC. All Rights Reserved.
            </span>
          </div>

        </div>
      </footer>
    </div>
  )
}
