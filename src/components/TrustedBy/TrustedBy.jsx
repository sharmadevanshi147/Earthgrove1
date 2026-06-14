import styles from './TrustedBy.module.css'

const NAMES = [
  'Flipkart',
  'Myntra',
  'Shri Kalkaji Mandir Redevelopment Board',
  'BVM Group of Schools',
  'Goa Film City',
]

const ALL_NAMES = [...NAMES, ...NAMES]

export default function TrustedBy() {
  return (
    <section className={styles.section} id="trusted" aria-label="Trusted By the Best">
      <div className={styles.inner}>
        <h2 className={styles.heading}>Trusted By the Best</h2>

        {/* Infinite marquee */}
        <div className={styles.marqueeWrap}>
          <div className={styles.fadeLeft} aria-hidden="true" />
          <div className={styles.fadeRight} aria-hidden="true" />
          <div className={styles.marqueeTrack} aria-hidden="true">
            {ALL_NAMES.map((name, i) => (
              <div key={`${name}-${i}`} className={styles.nameChip}>
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
