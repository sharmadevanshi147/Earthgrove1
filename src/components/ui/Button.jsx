import { motion } from 'framer-motion'
import styles from './Button.module.css'

/**
 * Button — glassmorphism pill button from Figma.
 * variant: 'primary' | 'secondary'
 * Both share the same glass style from design; primary gets a subtle
 * brighter border on hover.
 */
export default function Button({ children, onClick, href, variant = 'primary', className = '' }) {
  const Tag = href ? motion.a : motion.button

  return (
    <Tag
      href={href}
      onClick={onClick}
      className={`${styles.btn} ${styles[variant]} ${className}`}
      whileHover={{ scale: 1.04, backdropFilter: 'blur(20px)' }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className={styles.label}>{children}</span>
    </Tag>
  )
}
