import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar    from '../../components/Navbar/Navbar'
import CTAFooter from '../../components/CTAFooter/CTAFooter'
import styles    from './About.module.css'

/* ── Our Story ── */
function OurStory() {
  const ref   = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className={styles.storySection} aria-label="Our Story">
      {/* Full-width hero image */}
      <motion.div
        className={styles.storyHero}
        initial={{ opacity: 0, scale: 1.03 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85"
          alt="Earth Grove studio"
          className={styles.storyHeroImg}
        />
        <div className={styles.storyHeroOverlay} />
      </motion.div>

      <motion.div
        className={styles.storyInner}
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <h1 className={styles.storyHeading}>Our Story</h1>

        <div className={styles.storyBody}>
          <p>
            Our journey began with a simple intention to create architecture that feels honest,
            thoughtful, and deeply connected to people and place. After studying at Oxford, I
            returned to India with a desire to build something of my own, and alongside Aanya,
            Earth Grove slowly took shape in Delhi as a small, close-knit studio.
          </p>
          <p>
            Our first project, a modest warehouse for Findr, became the foundation of our
            practice. It taught us the value of clarity, efficiency, and trust — principles that
            continue to guide every decision we make. What started as a single opportunity
            gradually grew into a body of work spread across 8+ cities, with over 80 projects
            spanning homes, institutions, workplaces, and special commissions.
          </p>
          <p>
            Through it all, we have remained a young, collaborative, and grounded team, one that
            enjoys the process as much as the outcome. We believe good architecture comes from
            listening carefully, working honestly, and designing with intention. Earth Grove is
            not just a firm for us. It is an evolving journey shaped by people, ideas, and the
            spaces we create together.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

/* ── Join Us ── */
function JoinUs() {
  const ref   = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={styles.joinCard}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Join Us"
    >
      <div className={styles.joinOverlay} aria-hidden="true" />
      <div className={styles.joinContent}>
        <h2 className={styles.joinHeading}>Join Us</h2>
        <p className={styles.joinSub}>Join us in creating the foundations of tomorrow.</p>
        <a href="#" className={styles.joinBtn}>
          Explore Careers @ Earthgrove&nbsp;&nbsp;→
        </a>
      </div>
    </motion.div>
  )
}

/* ── Contact Form ── */
function ContactForm() {
  const ref   = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [form, setForm] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  })

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    /* TODO: wire up form submission */
  }

  return (
    <section ref={ref} className={styles.formSection} aria-label="Contact Form">
      <motion.div
        className={styles.formInner}
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className={styles.formHeading}>Leave us a Message</h2>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          {/* Row 1 */}
          <div className={styles.field}>
            <label className={styles.label} htmlFor="name">Your Name</label>
            <input
              id="name" name="name" type="text"
              placeholder="Enter Your Name"
              className={styles.input}
              value={form.name} onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">Your Email</label>
            <input
              id="email" name="email" type="email"
              placeholder="Enter Your Email"
              className={styles.input}
              value={form.email} onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="phone">Your Phone Number</label>
            <input
              id="phone" name="phone" type="tel"
              placeholder="Enter Your Phone Number"
              className={styles.input}
              value={form.phone} onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="subject">Subject</label>
            <input
              id="subject" name="subject" type="text"
              placeholder="Enter Your Subject"
              className={styles.input}
              value={form.subject} onChange={handleChange}
            />
          </div>

          <div className={`${styles.field} ${styles.fieldFull}`}>
            <label className={styles.label} htmlFor="message">Message</label>
            <textarea
              id="message" name="message"
              placeholder="Enter Your Message"
              className={`${styles.input} ${styles.textarea}`}
              value={form.message} onChange={handleChange}
              rows={5}
            />
          </div>

          <div className={styles.fieldFull}>
            <button type="submit" className={styles.submitBtn}>
              Submit Message&nbsp;&nbsp;→
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  )
}

/* ── Page ── */
export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <OurStory />
        <JoinUs />
        <ContactForm />
        <CTAFooter showCTA={false} />
      </main>
    </>
  )
}
