import { HeroSection } from '@/components/sections/HeroSection'
import { PopularNationalPackagesSection } from '@/components/sections/PopularNationalPackagesSection'
import { PopularInternationalPackagesSection } from '@/components/sections/PopularInternationalPackagesSection'
import { CuratedExperiencesSection } from '@/components/sections/CuratedExperiencesSection'
import { SignatureDestinationsSection } from '@/components/sections/SignatureDestinationsSection'
import { WhyEventurismSection } from '@/components/sections/WhyEventurismSection'
import { TravelerStoriesSection } from '@/components/sections/TravelerStoriesSection'
import { CustomTripCTASection } from '@/components/sections/CustomTripCTASection'
import { prisma } from '@/lib/prisma'

export default async function HomePage() {
  const nationalPackages = await prisma.package.findMany({
    where: { 
      published: true, 
      featured: true,
      type: { slug: 'india-holidays' }
    },
    take: 3,
    orderBy: { createdAt: 'desc' }
  })

  const internationalPackages = await prisma.package.findMany({
    where: { 
      published: true, 
      featured: true,
      type: { slug: 'international-holidays' }
    },
    take: 3,
    orderBy: { createdAt: 'desc' }
  })

  return (
    <>
      <HeroSection />
      <PopularNationalPackagesSection packages={nationalPackages} />
      <PopularInternationalPackagesSection packages={internationalPackages} />
      {/* <CuratedExperiencesSection /> */}
      {/* <SignatureDestinationsSection /> */}
      <WhyEventurismSection />


      {/* <TravelerStoriesSection /> */}
      <CustomTripCTASection />
    </>
  )
}
