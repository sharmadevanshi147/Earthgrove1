import { useRef, useState, useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Navbar    from '../../components/Navbar/Navbar'
import CTAFooter from '../../components/CTAFooter/CTAFooter'
import { fetchProjectById, PROJECTS_BY_ID } from '../../data/projects'
import styles    from './ProjectDetail.module.css'

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
}

function ImageCarousel({ images, alt }) {
  const [index, setIndex] = useState(0)
  const hasMultiple = images.length > 1

  const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length)
  const goNext = () => setIndex((i) => (i + 1) % images.length)

  return (
    <div className={styles.carousel}>
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt={alt}
          className={styles.heroImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />
      </AnimatePresence>

      {hasMultiple && (
        <>
          <button
            type="button"
            className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`}
            onClick={goPrev}
            aria-label="Previous image"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12 4 6 10l6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}
            onClick={goNext}
            aria-label="Next image"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M8 4l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className={styles.carouselDots}>
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`${styles.carouselDot} ${i === index ? styles.carouselDotActive : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function ProjectDetail() {
  const { id } = useParams()
  const [project, setProject] = useState(PROJECTS_BY_ID[id] ?? null)
  const [loading, setLoading] = useState(!PROJECTS_BY_ID[id])

  const bodyRef = useRef(null)
  const bodyInView = useInView(bodyRef, { once: true, margin: '-60px' })

  useEffect(() => {
    fetchProjectById(id)
      .then((data) => { if (data) setProject(data) })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return null
  if (!project) return <Navigate to="/projects" replace />

  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero: heading + intro ── */}
        <section className={styles.hero}>
          <motion.p
            className={styles.breadcrumb}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link to="/">Home</Link>
            <span className={styles.sep}> › </span>
            <Link to="/projects">Projects</Link>
            <span className={styles.sep}> › </span>
            <span>{project.name}</span>
          </motion.p>

          <motion.h1
            className={styles.heroHeading}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          >
            Project&nbsp;— {project.name}
          </motion.h1>

          <motion.p
            className={styles.heroIntro}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
          >
            {project.intro}
          </motion.p>
        </section>

        {/* ── Full-width hero image carousel ── */}
        <motion.div
          className={styles.heroImageWrap}
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        >
          <ImageCarousel images={project.images?.length ? project.images : [project.image]} alt={project.name} />
        </motion.div>

        {/* ── Metadata tags bar ── */}
        <motion.div
          className={styles.metaBar}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className={styles.metaTag}>{project.category}</span>
          <span className={styles.metaDivider} aria-hidden="true" />
          <span className={styles.metaTag}>Built In {project.year}</span>
          <span className={styles.metaDivider} aria-hidden="true" />
          <span className={styles.metaTag}>Location: {project.location}</span>
          <span className={styles.metaDivider} aria-hidden="true" />
          <span className={styles.metaTag}>Site Area: {project.siteArea}</span>
          <span className={styles.metaDivider} aria-hidden="true" />
          <span className={styles.metaTag}>Built-Up Area: {project.builtUpArea}</span>
        </motion.div>

        {/* ── Body copy ── */}
        <motion.section
          ref={bodyRef}
          className={styles.body}
          variants={fadeUp}
          initial="hidden"
          animate={bodyInView ? 'visible' : 'hidden'}
        >
          {project.body.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </motion.section>

        <CTAFooter showCTA={false} />
      </main>
    </>
  )
}
