import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styles from './NavLink.module.css'

const MotionLink = motion(Link)

/**
 * NavLink — reusable navigation anchor.
 * Renders an animated underline on hover, matching Figma specs.
 */
export default function NavLink({ href = '/', children, onClick }) {
  return (
    <MotionLink
      to={href}
      onClick={onClick}
      className={styles.navlink}
      whileHover="hovered"
      initial="rest"
      animate="rest"
    >
      {children}
      <motion.span
        className={styles.underline}
        variants={{
          rest:    { scaleX: 0, originX: 0 },
          hovered: { scaleX: 1, originX: 0 },
        }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      />
    </MotionLink>
  )
}
