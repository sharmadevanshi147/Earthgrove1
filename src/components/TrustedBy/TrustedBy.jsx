import styles from './TrustedBy.module.css'

/* ── Logo components (unchanged) ── */
function AccademyLogo() {
  return (
    <span className={styles.logoAccademy}>
      <span className={styles.accademyDot} aria-hidden="true" />
      accademy
    </span>
  )
}

function DirectDecorLogo() {
  return (
    <span className={styles.logoDirectDecor}>
      <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={styles.buildingIcon}>
        <rect x="0.75" y="0.75" width="18.5" height="22.5" stroke="white" strokeWidth="1.5" />
        <polyline points="0,9 10,1 20,9" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="6.5" y="15" width="7" height="8.5" stroke="white" strokeWidth="1.5" />
      </svg>
      <span>DirectDecor</span>
    </span>
  )
}

function FindrLogo() {
  return (
    <span className={styles.logoFindr}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={styles.findrSquares}>
        <rect x="0" y="0" width="7" height="7" />
        <rect x="9" y="0" width="7" height="7" />
        <rect x="0" y="9" width="7" height="7" />
        <rect x="9" y="9" width="7" height="7" />
      </svg>
      <em>Findr</em>
    </span>
  )
}

function IntdecoLogo() {
  return <span className={styles.logoIntdeco}>intdeco</span>
}

function CosmicSportsLogo() {
  return <span className={styles.logoCosmicSports}>COSMIC SPORTS</span>
}

const LOGOS = [
  { id: 'accademy',     Logo: AccademyLogo },
  { id: 'directdecor', Logo: DirectDecorLogo },
  { id: 'findr',        Logo: FindrLogo },
  { id: 'intdeco',      Logo: IntdecoLogo },
  { id: 'cosmicsports', Logo: CosmicSportsLogo },
]

/* Duplicate for seamless loop */
const ALL_LOGOS = [...LOGOS, ...LOGOS]

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
            {ALL_LOGOS.map(({ id, Logo }, i) => (
              <div key={`${id}-${i}`} className={styles.logoItem}>
                <Logo />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
