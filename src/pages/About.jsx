import { useEffect } from "react";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";
import AboutHero from "../components/About/AboutHero";
import AboutRate from "../components/About/AboutRate";
import AboutTeam from "../components/About/AboutTeam";
function About() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <Navbar />
            <main className="grow pt-20 bg-[#0a0a0a] text-white">
                <AboutHero />
                <AboutRate />
                <AboutTeam />
            </main>
            <Footer />
        </>
    );
}

export default About;

