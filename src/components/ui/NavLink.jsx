import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import styles from './NavLink.module.css'

const MotionLink = motion(Link)

export default function NavLink({ href = '/', children, onClick }) {
  const { pathname } = useLocation()
  const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <MotionLink
      to={href}
      onClick={onClick}
      className={`${styles.navlink} ${isActive ? styles.active : ''}`}
      whileHover="hovered"
      initial="rest"
      animate={isActive ? 'hovered' : 'rest'}
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
