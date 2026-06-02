import Navbar        from '../../components/Navbar/Navbar'
import Hero          from '../../components/Hero/Hero'
import TrustedBy     from '../../components/TrustedBy/TrustedBy'
import OurWork       from '../../components/OurWork/OurWork'
import AHouseOfTrust from '../../components/AHouseOfTrust/AHouseOfTrust'
import OurExpertise  from '../../components/OurExpertise/OurExpertise'
import OurFounders   from '../../components/OurFounders/OurFounders'
import ByTheNumbers  from '../../components/ByTheNumbers/ByTheNumbers'
import Testimonials  from '../../components/Testimonials/Testimonials'
import OurAccolades  from '../../components/OurAccolades/OurAccolades'
import CTAFooter     from '../../components/CTAFooter/CTAFooter'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <OurWork />
        <AHouseOfTrust />
        <OurExpertise />
        <OurFounders />
        <ByTheNumbers />
        <Testimonials />
        <OurAccolades />
        <CTAFooter />
      </main>
    </>
  )
}
