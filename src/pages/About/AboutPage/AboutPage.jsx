import AboutUsSection from "../components/AboutUsSection"
import HeaderAbout from "../components/HeaderAbout"
import Results from "../components/Results"
import WhyUs from "../components/WhyUs"

const AboutPage = () => {
    return <>
        <section className="about">
            <HeaderAbout />
            <AboutUsSection />
            <WhyUs />
            <Results />
        </section>

    </>
}

export default AboutPage