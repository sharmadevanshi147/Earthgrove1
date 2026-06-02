import { motion } from 'framer-motion'
import { useRef }  from 'react'
import { useInView } from 'framer-motion'
import Navbar    from '../../components/Navbar/Navbar'
import CTAFooter from '../../components/CTAFooter/CTAFooter'
import styles    from './Contact.module.css'

/* ── Contact info ── */
const CONTACT_ITEMS = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.85 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6.29 6.29l1.1-1.1a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    lines: ['+91-95706676895', '+91-95706676809'],
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    label: 'Email',
    lines: ['care@earthgrove.com'],
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Our Location',
    lines: ['HWM Employees CGHS, Sector 10', 'Dwarka, New Delhi, Delhi 110075'],
  },
]

/* ── Social icons ── */
const SOCIALS = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'X',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117Z"/>
      </svg>
    ),
  },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

export default function Contact() {
  const sectionRef = useRef(null)
  const inView     = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero image ── */}
        <motion.div
          className={styles.heroWrap}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=85"
            alt="Earth Grove architecture"
            className={styles.heroImg}
          />
          {/* Gradient vignette at bottom */}
          <div className={styles.heroGradient} aria-hidden="true" />
        </motion.div>

        {/* ── Contact + Form section ── */}
        <motion.section
          ref={sectionRef}
          className={styles.contactSection}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          aria-label="Contact us"
        >
          {/* ── LEFT: info ── */}
          <motion.div className={styles.infoCol} variants={fadeUp}>
            <p className={styles.contactLabel}>Contact</p>
            <h1 className={styles.heading}>
              Build Your<br />Dream Today
            </h1>
            <p className={styles.body}>
              We would love to hear from you. Whether you have a project in mind,
              a question about our work, or simply want to start a conversation —
              reach out and we will get back to you shortly.
            </p>

            {/* Contact items */}
            <ul className={styles.infoList}>
              {CONTACT_ITEMS.map((item) => (
                <li key={item.label} className={styles.infoItem}>
                  <span className={styles.infoIcon}>{item.icon}</span>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>{item.label}</span>
                    {item.lines.map((line, i) => (
                      <span key={i} className={styles.infoLine}>{line}</span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>

            {/* Social icons */}
            <div className={styles.socials}>
              <span className={styles.socialLabel}>Social</span>
              <div className={styles.socialIcons}>
                {SOCIALS.map((s) => (
                  <a key={s.label} href={s.href} className={styles.socialIcon} aria-label={s.label}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: form card ── */}
          <motion.div className={styles.formCard} variants={fadeUp}>
            <div className={styles.formCardOverlay} aria-hidden="true" />
            <div className={styles.formCardInner}>
              <h2 className={styles.formHeading}>Leave us a Message</h2>
              <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.field}>
                  <label className={styles.fieldLabel}>Your Name</label>
                  <input type="text" placeholder="Enter Your Name" className={styles.input} />
                </div>
                <div className={styles.field}>
                  <label className={styles.fieldLabel}>Your Email</label>
                  <input type="email" placeholder="Enter Your Email" className={styles.input} />
                </div>
                <div className={styles.field}>
                  <label className={styles.fieldLabel}>Your Phone Number</label>
                  <input type="tel" placeholder="Enter Your Phone Number" className={styles.input} />
                </div>
                <div className={styles.field}>
                  <label className={styles.fieldLabel}>Subject</label>
                  <input type="text" placeholder="Enter Your Subject" className={styles.input} />
                </div>
                <div className={styles.field}>
                  <label className={styles.fieldLabel}>Message</label>
                  <textarea
                    placeholder="Enter Your Message"
                    className={`${styles.input} ${styles.textarea}`}
                    rows={5}
                  />
                </div>
                <button type="submit" className={styles.submitBtn}>
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </motion.section>

        {/* ── Map ── */}
        <div className={styles.mapWrap}>
          <iframe
            title="Earth Grove location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3895822267944!2d77.04099491508374!3d28.593530982425734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b5d37d06e29%3A0xd5b3f59891fe7ba5!2sSector%2010%20Dwarka%2C%20Dwarka%2C%20New%20Delhi%2C%20Delhi%20110075%2C%20India!5e0!3m2!1sen!2sin!4v1685000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <CTAFooter showCTA={false} />
      </main>
    </>
  )
}
