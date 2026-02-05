import { useEffect } from "react";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";
import BlogsHero from "../components/Blog/BlogsHero";
import BlogsSearch from "../components/Blog/BlogsSearch";

function Blogs() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <Navbar />
            <main className="grow pt-20 bg-[#0a0a0a]">
                <BlogsHero />
                <BlogsSearch />
            </main>
            <Footer />
        </>
    );
}

export default Blogs;

