import { ContactHeroSection } from '@/components/sections/ContactHeroSection'
import { ConsultationProcessSection } from '@/components/sections/ConsultationProcessSection'
import { ContactInquirySection } from '@/components/sections/ContactInquirySection'
import { ContactFAQSection } from '@/components/sections/ContactFAQSection'
import { ContactDetailsSection } from '@/components/sections/ContactDetailsSection'
import { ContactFinalCTASection } from '@/components/sections/ContactFinalCTASection'
export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ConsultationProcessSection />
      <ContactInquirySection />
      <ContactFAQSection />
      <ContactDetailsSection />
      <ContactFinalCTASection />
    </>
  )
}
