import Certificate from '../../../components/layout/Certificate'
import OurPartners from "../../../components/layout/OurPartners"
import AboutUsSection from "../../About/components/AboutUsSection"
import Results from "../../About/components/Results"
import WhyUs from "../../About/components/WhyUs"
import CoursesSection from "../../Courses/components/CoursesSection"
import EventSection from "../../Events/components/EventSection"
import ServicesSection from "../../Services/components/ServicesSection"
import HeroSection from '../components/HeroSection'
import Testimonials from '../components/Testimonials'
const HomePage = () => {
    return <>
        <HeroSection />
        <ServicesSection />
        <AboutUsSection />
        <WhyUs />
        <CoursesSection />
        <Certificate />
        <Results />
        <EventSection />
        <Testimonials />
        <OurPartners />
    </>
}

export default HomePage