import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import styles from './OurFounders.module.css'

const FOUNDERS = [
  {
    id: 'himanshi',
    name: 'Himanshi Kaushik',
    role: 'Founder Partner, Principal Architect',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80',
    bio: 'An architect with a decade of experience, awarded an MSc in Sustainable Buildings: Performance and Design from Oxford Brookes University, Oxford, England. She conducts empirical research alongside design thinking and a futuristic approach to take on selective projects and figure out solutions to unforeseen challenges. Earth Grove\'s vision is clear and logical — striving to find the most efficient, sustainably civic solutions without sacrificing quality. Earth Grove\'s team is ethical, hardworking and innovative with an eye for sustainable solutions.',
  },
  {
    id: 'hemant',
    name: 'Dr. Hemant Kaushik',
    role: 'Advisor',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80',
    bio: 'Retd. Director of Veterinary Services, Municipal Corporation of Delhi, joins Earth Grove as an Advisor on Sustainable Policy and Governance. With more than three decades of leadership in public administration, he is known for his strategic governance, policy innovation, and groundbreaking municipal initiatives in animal welfare and urban healthcare. At Earth Grove, he brings regulatory insight and institutional experience to strengthen projects that align sustainability, wellness and civic responsibility, fostering resilient and environmentally integrated urban development.',
  },
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
}

export default function OurFounders() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className={styles.section} id="founders" aria-label="Our Founders">
      <motion.div
        className={styles.inner}
        variants={stagger}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div className={styles.headingBlock} variants={fadeUp}>
          <span className={styles.sectionLabel}>The People Behind the Vision</span>
          <h2 className={styles.heading}>Our Founders</h2>
        </motion.div>

        <motion.div className={styles.grid} variants={stagger}>
          {FOUNDERS.map((founder) => (
            <motion.div key={founder.id} className={styles.card} variants={fadeUp}>
              {/* Photo — compact, full bleed */}
              <div className={styles.cardImage}>
                <img src={founder.image} alt={founder.name} loading="lazy" />
              </div>

              {/* Text body — name & role lead */}
              <div className={styles.cardBody}>
                <h3 className={styles.founderName}>{founder.name}</h3>
                <span className={styles.founderRole}>{founder.role}</span>
                <p className={styles.founderBio}>{founder.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp}>
          <Link to="/about" className={styles.cta}>
            More About Us
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
