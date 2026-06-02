import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar    from '../../components/Navbar/Navbar'
import CTAFooter from '../../components/CTAFooter/CTAFooter'
import styles    from './Services.module.css'

/* ── Service data ── */
const SERVICES = [
  {
    id: 'commercial',
    title: 'Commercial Architecture',
    description:
      'Designing efficient, functional, and aesthetically compelling spaces for offices, retail environments, and mixed-use developments. We bring thoughtful design to the commercial fabric of our cities.',
    images: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'temple',
    title: 'Temple Architecture',
    description:
      'Crafting sacred spaces rooted in tradition and reverence. Our temple projects balance spiritual significance with architectural integrity, honouring the rituals and communities they serve.',
    images: [
      'https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'institutional',
    title: 'Institutional Architecture',
    description:
      'Building spaces for schools, universities, and civic institutions that inspire learning, collaboration, and community. Our designs are durable, dignified, and deeply contextual.',
    images: [
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'residential',
    title: 'Residential Architecture',
    description:
      'Designing homes that reflect the lives and aspirations of the people who inhabit them. From urban apartments to countryside retreats, each project is tailored to its context and client.',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'interior',
    title: 'Interior Design',
    description:
      'Creating interiors that feel considered, cohesive, and alive. We work closely with clients to develop spaces that are both beautiful to inhabit and functional in everyday life.',
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1484101851003-d40c7c12f0b7?auto=format&fit=crop&w=600&q=80',
    ],
  },
]

/* ── Stagger variants ── */
const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
}
const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
}

/* ── Page ── */
export default function Services() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero heading ── */}
        <section className={styles.hero} aria-label="Our Versatile Expertise">
          <motion.h1
            className={styles.heroHeading}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            Our Versatile Expertise
          </motion.h1>
        </section>

        {/* ── Service cards ── */}
        <motion.div
          ref={ref}
          className={styles.cardList}
          variants={listVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {SERVICES.map((svc) => (
            <motion.article
              key={svc.id}
              className={styles.card}
              variants={cardVariants}
              aria-label={svc.title}
            >
              {/* Dark overlay on top of OurWorkBG */}
              <div className={styles.cardOverlay} aria-hidden="true" />

              {/* Content */}
              <div className={styles.cardContent}>
                {/* 3-image grid */}
                <div className={styles.imageGrid}>
                  {svc.images.map((src, i) => (
                    <div key={i} className={styles.imageWrap}>
                      <img
                        src={src}
                        alt=""
                        className={styles.image}
                        aria-hidden="true"
                      />
                    </div>
                  ))}
                </div>

                {/* Text */}
                <div className={styles.cardBody}>
                  <h2 className={styles.cardTitle}>{svc.title}</h2>
                  <p className={styles.cardDesc}>{svc.description}</p>
                  <Link to={`/services/${svc.id}`} className={styles.cardBtn}>See More &nbsp;→</Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <CTAFooter showCTA={false} />
      </main>
    </>
  )
}
