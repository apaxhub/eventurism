import { HeroSection } from '@/components/sections/HeroSection'
import { PopularNationalPackagesSection } from '@/components/sections/PopularNationalPackagesSection'
import { PopularInternationalPackagesSection } from '@/components/sections/PopularInternationalPackagesSection'
import { CuratedExperiencesSection } from '@/components/sections/CuratedExperiencesSection'
import { SignatureDestinationsSection } from '@/components/sections/SignatureDestinationsSection'
import { WhyEventurismSection } from '@/components/sections/WhyEventurismSection'
import { TravelerStoriesSection } from '@/components/sections/TravelerStoriesSection'
import { CustomTripCTASection } from '@/components/sections/CustomTripCTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PopularNationalPackagesSection />
      <PopularInternationalPackagesSection />
      {/* <CuratedExperiencesSection /> */}
      {/* <SignatureDestinationsSection /> */}
      <WhyEventurismSection />


      {/* <TravelerStoriesSection /> */}
      <CustomTripCTASection />
    </>
  )
}
