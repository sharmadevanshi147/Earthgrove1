import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Button from '../ui/Button'
import styles from './Hero.module.css'

const heroPoster = `${import.meta.env.BASE_URL}assets/Hero.jpg`

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 56 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
}

const labelVariant = {
  hidden: { opacity: 0, letterSpacing: '0.3em' },
  visible: { opacity: 1, letterSpacing: '0.12em', transition: { duration: 1.3, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })

  const bgY            = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const contentY       = useTransform(scrollYProgress, [0, 0.6], ['0%', '-12%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scrollOpacity  = useTransform(scrollYProgress, [0, 0.18], [1, 0])

  return (
    <section ref={sectionRef} className={styles.hero} aria-label="Hero">
      {/* ── Parallax background ── */}
      <motion.div className={styles.bgWrapper} style={{ y: bgY }} aria-hidden="true">
        <video
          className={styles.bgVideo}
          autoPlay
          loop
          muted
          playsInline
          poster={heroPoster}
        >
          <source src={`${import.meta.env.BASE_URL}assets/HeroVideo.mp4`} type="video/mp4" />
        </video>
        <div className={styles.overlay} />
        <div className={styles.overlayGrain} aria-hidden="true" />
      </motion.div>

      {/* ── Ambient orbs ── */}
      <div className={styles.orbs} aria-hidden="true">
        <motion.div
          className={`${styles.orb} ${styles.orb1}`}
          animate={{ y: [0, -22, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className={`${styles.orb} ${styles.orb2}`}
          animate={{ y: [0, 18, 0], x: [0, -12, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />
        <motion.div
          className={`${styles.orb} ${styles.orb3}`}
          animate={{ y: [0, -14, 0], x: [0, 7, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
      </div>

      {/* ── Content ── */}
      <motion.div
        className={styles.content}
        style={{ y: contentY, opacity: contentOpacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className={styles.headline} variants={fadeUp}>
          Earth Grove is an architecture &amp;<br />
          Sustainable Design Studio creating Timeless<br />
          and efficient Buildings of Tomorrow.
        </motion.h1>

        <motion.div className={styles.cta} variants={fadeUp}>
          <Button href="#contact" variant="primary">Contact us</Button>
          <Button href="#projects" variant="secondary">See Our Work</Button>
        </motion.div>
      </motion.div>


    </section>
  )
}
