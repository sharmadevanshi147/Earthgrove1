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
      {
        id: 'nandan-prospera',
        name: 'Nandan Prospera',
        description:
          'Nandan Prospera features a cross-section layout with 14 buildings placed radially around a central open space, housing 2 units per floor up to the 5th floor and 10 units on the higher floors. The design combines vertical volume with considered density, allowing all units an offering the building a height that is pleasant and urban, especially when lit from inside.',
        image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'niia-tech-park',
        name: 'Niia Tech Park',
        description:
          'A contemporary tech campus designed around natural light and open collaboration. The park integrates landscaped courtyards between buildings to encourage informal interaction, creating an environment where innovation can thrive alongside nature.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'amar-coworking-space',
        name: 'Amar Coworking Space',
        description:
          'A flexible coworking environment designed for the modern professional. Thoughtfully arranged workstations, private cabins, and lounge zones flow into one another — creating a rhythm of focus and community across multiple floors.',
        image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  temple: {
    label: 'Temple',
    projects: [
      {
        id: 'sri-venkateswara',
        name: 'Sri Venkateswara Mandir',
        description:
          'A traditional temple design that draws from classical Dravidian architecture, blending intricate stone-carving proportions with contemporary structural requirements. The complex includes a main sanctum, mandapam, and a landscaped pradakshina path.',
        image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'amba-mata-mandir',
        name: 'Amba Mata Mandir',
        description:
          'Nestled at the edge of a hillside village, this temple is designed to frame the landscape as a living backdrop. The open-air mandap and stepped kund integrate the natural terrain into the spiritual journey of worship.',
        image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'ananth-temple',
        name: 'Ananth Temple Complex',
        description:
          'A multi-shrine complex planned around a central tank. The architecture uses local sandstone and traditional joinery throughout, creating a timeless environment that honours both craft and ritual.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  temples: {
    label: 'Temples',
    projects: [
      {
        id: 'sri-venkateswara',
        name: 'Sri Venkateswara Mandir',
        description:
          'A traditional temple design that draws from classical Dravidian architecture, blending intricate stone-carving proportions with contemporary structural requirements.',
        image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'amba-mata-mandir',
        name: 'Amba Mata Mandir',
        description:
          'Nestled at the edge of a hillside village, this temple is designed to frame the landscape as a living backdrop.',
        image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  institutional: {
    label: 'Institutional',
    projects: [
      {
        id: 'horizon-school',
        name: 'Horizon International School',
        description:
          'Designed around a central learning street, Horizon School integrates classrooms, labs, and open studios along a naturally lit spine. The campus encourages collaboration while allowing each department its own distinct identity.',
        image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'civic-library',
        name: 'City Central Library',
        description:
          'A public library designed to be the intellectual heart of the city. Double-height reading rooms, flexible study pods, and a rooftop terrace create a layered environment that welcomes visitors of every age and intent.',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'unity-college',
        name: 'Unity College of Arts',
        description:
          'An arts and design college built around a shared courtyard. Studios open directly onto the outdoor space, blurring the boundary between making and gathering, and encouraging cross-disciplinary practice.',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  residential: {
    label: 'Residential',
    projects: [
      {
        id: 'grove-villas',
        name: 'Grove Villas',
        description:
          'A cluster of eight private villas arranged around a shared garden. Each home is oriented to capture morning light and cross-ventilation, with deep verandas that mediate between interior comfort and outdoor living.',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'skyline-apartments',
        name: 'Skyline Apartments',
        description:
          'A 22-storey residential tower with a compact footprint that maximises views and green space at ground level. Each apartment plan is unique, responding to its orientation and the city panorama beyond.',
        image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'river-retreat',
        name: 'River Retreat',
        description:
          'A weekend house designed to sit lightly on a riverbank site. Raised on a plinth of local laterite, the house opens completely to the water on one side while maintaining privacy from the road on the other.',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  interior: {
    label: 'Interior',
    projects: [
      {
        id: 'the-loft',
        name: 'The Loft Studio',
        description:
          'An open-plan loft transformed into a live-work home. Custom joinery defines zones without walls, and a palette of warm timber, concrete, and aged brass runs through every surface and fitting.',
        image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'verde-restaurant',
        name: 'Verde Restaurant',
        description:
          'A restaurant interior conceived around the idea of a garden brought indoors. Planting integrated into the ceiling and wall structure creates a canopy overhead, while natural materials ground the dining experience.',
        image: 'https://images.unsplash.com/photo-1484101851003-d40c7c12f0b7?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'prism-offices',
        name: 'Prism Corporate Offices',
        description:
          "A workplace interior designed to reflect a company's creative identity. Breakout pods, gallery walls, and a central kitchen-lounge balance focused work with spontaneous exchange across three floors.",
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  interiors: {
    label: 'Interiors',
    projects: [
      {
        id: 'the-loft',
        name: 'The Loft Studio',
        description:
          'An open-plan loft transformed into a live-work home. Custom joinery defines zones without walls, and a palette of warm timber, concrete, and aged brass runs through every surface.',
        image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'verde-restaurant',
        name: 'Verde Restaurant',
        description:
          'A restaurant interior conceived around the idea of a garden brought indoors, with planting integrated into the ceiling and wall structure.',
        image: 'https://images.unsplash.com/photo-1484101851003-d40c7c12f0b7?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  farmhouse: {
    label: 'Farmhouse',
    projects: [
      {
        id: 'sundale-farmhouse',
        name: 'Sundale Farmhouse',
        description:
          'A sprawling farmhouse set among mango groves, designed to merge with its landscape. Stone walls, terracotta rooflines, and shaded verandas create a home that feels grown from its site.',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'valley-estate',
        name: 'Valley Estate',
        description:
          'An estate for a working farm, with residence, staff quarters, storage, and processing facilities arranged around a central yard. The architecture is practical and warm in equal measure.',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  walkthrough: {
    label: '3D Walkthrough',
    projects: [
      {
        id: 'emerald-towers-vt',
        name: 'Emerald Towers Walkthrough',
        description:
          'A fully rendered 3D walkthrough of a luxury residential tower, produced for pre-sales. The animation guides viewers through lobby, model apartment, and rooftop amenities in a single seamless sequence.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'retail-park-vt',
        name: 'Retail Park Visualisation',
        description:
          'An interactive walkthrough of a proposed retail park, enabling the client to experience the scale, light, and materiality of the project before groundbreaking.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  vaastu: {
    label: 'Vaastu',
    projects: [
      {
        id: 'ananda-home',
        name: 'Ananda Residence',
        description:
          'A family home planned entirely in accordance with Vaastu Shastra, with rooms oriented to their prescribed directions and the central brahmasthan left open to allow energy to flow freely through the house.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'vaastu-office',
        name: 'Vaastu Corporate HQ',
        description:
          "A corporate headquarters planned using Vaastu principles, with the main entrance, MD's cabin, and finance department positioned to invite prosperity and clarity of thought.",
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  corporate: {
    label: 'Corporate',
    projects: [
      {
        id: 'nexus-hq',
        name: 'Nexus Corporate HQ',
        description:
          'A flagship headquarters that projects confidence and innovation. A triple-height atrium anchors the building, with floors of open-plan workspace and executive suites spiralling above.',
        image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'meridian-campus',
        name: 'Meridian Campus',
        description:
          'A campus for a multinational company, comprising four buildings connected by bridges and landscaped courtyards. The design encourages informal meeting across divisions and functions.',
        image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80',
      },
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
