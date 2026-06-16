import { useRef } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import Navbar    from '../../components/Navbar/Navbar'
import CTAFooter from '../../components/CTAFooter/CTAFooter'
import styles    from './ExpertiseDetail.module.css'

/* ── Project data keyed by slug ── */
const EXPERTISE_DATA = {
  commercial: {
    label: 'Commercial',
    projects: [
      { id: 'flipkart-myntra-warehouse', name: 'Flipkart & Myntra — 200 Warehouse Fire Exit Plans', description: 'Comprehensive fire exit and evacuation planning across 200 Flipkart and Myntra warehouse facilities, ensuring code compliance, efficient egress routes, and staff safety across multiple states.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80' },
      { id: 'fashion-management-runway', name: 'Fashion Management Runway', description: 'A purpose-designed commercial runway and event space for fashion management, combining flexible staging, dramatic lighting infrastructure, and front-of-house hospitality zones.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80' },
    ],
  },
  temple: {
    label: 'Temple',
    projects: [
      { id: 'kalkaji-mandir-redevelopment', name: 'Shri Kalkaji Mandir Redevelopment Project', description: 'A sacred redevelopment restoring and amplifying the spiritual presence of one of Delhi\'s most revered temples — layered thresholds, processional courts, and devotional spaces woven into the urban fabric.', image: `${import.meta.env.BASE_URL}assets/Kalkaji/WhatsApp Image 2026-06-04 at 8.12.49 PM.jpeg` },
      { id: 'kamanda-devi-redevelopment', name: 'Shri Kamanda Devi Redevelopment', description: 'Redevelopment of the historic Kamanda Devi temple complex, restoring traditional architectural elements while improving pilgrimage infrastructure and devotional flow.', image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=900&q=80' },
    ],
  },
  temples: {
    label: 'Temples',
    projects: [
      { id: 'kalkaji-mandir-redevelopment', name: 'Shri Kalkaji Mandir Redevelopment Project', description: 'A sacred redevelopment restoring the spiritual presence of one of Delhi\'s most revered temples — layered thresholds, processional courts, and devotional spaces woven into the urban fabric.', image: `${import.meta.env.BASE_URL}assets/Kalkaji/WhatsApp Image 2026-06-04 at 8.12.49 PM.jpeg` },
      { id: 'kamanda-devi-redevelopment', name: 'Shri Kamanda Devi Redevelopment', description: 'Redevelopment of the historic Kamanda Devi temple complex, restoring traditional architectural elements while improving pilgrimage infrastructure.', image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=900&q=80' },
    ],
  },
  institutional: {
    label: 'Institutional',
    projects: [
      { id: 'bvm-public-school', name: 'BVM Public School', description: 'A K–12 campus designed around natural light and open learning corridors. Each block opens onto landscaped courtyards, turning movement through the school into an educational experience.', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=80' },
    ],
  },
  residential: {
    label: 'Residential',
    projects: [
      { id: 'upkari-apartments', name: 'Upkari Apartments, Sec 68 Noida', description: 'A contemporary residential complex in Sector 68, Noida, designed around shared green courts and generous cross-ventilation. Each unit is planned for privacy, natural light, and efficient living.', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80' },
      { id: 'pareena-mi-casa', name: 'Pareena Mi Casa', description: 'A residential development balancing urban density with quality of life — landscaped podiums, sky gardens, and thoughtfully planned apartments create a community within the city.', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80' },
      { id: 'house-new-friends-colony', name: 'House, New Friends Colony', description: 'A private residence in New Friends Colony, Delhi, designed for a multi-generational family. Interlocking courtyards, shaded verandas, and a layered material palette create a home of quiet distinction.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80' },
    ],
  },
  interior: {
    label: 'Interior',
    projects: [
      { id: 'indian-navy-office', name: 'Central Govt Office Interiors', description: 'A disciplined interior for the Indian Navy — precision materiality, structured spatial hierarchy, and restrained detailing create a workspace that commands authority and calm.', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80' },
    ],
  },
  interiors: {
    label: 'Interiors',
    projects: [
      { id: 'indian-navy-office', name: 'Central Govt Office Interiors', description: 'A disciplined interior for the Indian Navy — precision materiality, structured spatial hierarchy, and restrained detailing create a workspace that commands authority and calm.', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80' },
    ],
  },
  farmhouse: {
    label: 'Farmhouse',
    projects: [
      { id: 'golden-valley-noida', name: 'Golden Valley, Noida', description: 'A farmhouse estate in Noida designed around organic landscaping and rural materiality — local stone, timber screens, and terracotta rooflines anchor the home to its setting while delivering modern comfort.', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80' },
    ],
  },
  walkthrough: {
    label: '3D Walkthrough',
    projects: [
      { id: 'ellington-86-faridabad', name: '3D Walkthrough — Ellington 86, Faridabad', description: 'A fully rendered 3D walkthrough of Ellington 86, a residential project in Faridabad. The visualisation guides prospective buyers through lobbies, apartments, and amenity spaces in a single seamless sequence.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80' },
    ],
  },
  vaastu: {
    label: 'Vaastu',
    projects: [
      { id: 'mansa-development', name: 'Mansa Development', description: 'A development planned wholly in accordance with Vaastu Shastra — room orientations, entry positions, and spatial proportions are derived from classical principles to promote wellbeing and prosperity.', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80' },
    ],
  },
  corporate: {
    label: 'Corporate',
    projects: [
      { id: 'indian-navy-office-corp', name: 'Central Govt Office Interiors', description: 'A disciplined corporate interior for the Indian Navy — structured spatial hierarchy, precision materiality, and restrained detailing create a workspace that commands both authority and calm.', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80' },
      { id: 'earthgrove-office', name: 'Earthgrove Office', description: 'The Earthgrove studio — a working environment designed by and for architects. Raw materials, exposed services, and considered light create a space that is both workshop and showcase.', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80' },
    ],
  },
  greenboard: {
    label: 'Green Board Certification',
    projects: [
      { id: 'goa-film-city-elliptica', name: 'Goa Film City — Elliptica', description: 'A landmark entertainment complex designed for Green Board Certification — passive cooling, reclaimed material palettes, and landscape-integrated planning set a new standard for sustainable public venues in India.', image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=900&q=80' },
    ],
  },
  landscape: {
    label: 'Landscape',
    projects: [
      { id: 'terrace-gardens', name: 'Terrace Gardens', description: 'A series of terraced garden interventions across a multi-level residential project — planted decks, water features, and shaded walkways transform rooftop infrastructure into a network of living spaces.', image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=900&q=80' },
    ],
  },
}

/* ── Animation variants ── */
const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
}
const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
}

export default function ExpertiseDetail() {
  const { slug } = useParams()
  const data = EXPERTISE_DATA[slug]

  const listRef = useRef(null)
  const inView  = useInView(listRef, { once: true, margin: '-60px' })

  /* Unknown slug → redirect to services */
  if (!data) return <Navigate to="/services" replace />

  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className={styles.hero} aria-label={`${data.label} Projects`}>
          <motion.h1
            className={styles.heroHeading}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            {data.label} Projects
          </motion.h1>
          <motion.p
            className={styles.breadcrumb}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <Link to="/">Home</Link>
            <span className={styles.sep}> › </span>
            <Link to="/services">Services</Link>
            <span className={styles.sep}> › </span>
            <span>{data.label}</span>
          </motion.p>
        </section>

        {/* ── Project cards ── */}
        <motion.div
          ref={listRef}
          className={styles.cardList}
          variants={listVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {data.projects.map((project) => (
            <motion.article
              key={project.id}
              className={styles.card}
              variants={cardVariants}
              aria-label={project.name}
            >
              {/* Dark overlay over OurWorkBG texture */}
              <div className={styles.cardOverlay} aria-hidden="true" />

              {/* Text column */}
              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>{project.name}</h2>
                <p className={styles.cardDesc}>{project.description}</p>
                <Link to={`/projects/${project.id}`} className={styles.cardBtn}>Know More &nbsp;→</Link>
              </div>

              {/* Image column */}
              <div className={styles.cardImageWrap}>
                <img
                  src={project.image}
                  alt={project.name}
                  className={styles.cardImage}
                />
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* ── See Our Work CTA ── */}
        <div className={styles.seeMore}>
          <Link to="/services" className={styles.seeMoreBtn}>See Our Work</Link>
        </div>

        <CTAFooter showCTA={false} />
      </main>
    </>
  )
}
