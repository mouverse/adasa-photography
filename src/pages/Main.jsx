import { useEffect } from 'react';
import Navbar from '../components/Main/Navbar';
import Hero from '../components/Main/Hero';
import SelectedBlogs from '../components/Blog/SelectedBlogs';
import DiscoverBlog from '../components/Blog/DiscoverBlog';
import LatestBlogs from '../components/Blog/LatestBlogs';
import Newsletter from '../components/Main/Newsletter';
import Footer from '../components/Main/Footer';

function Main() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <Navbar />
            <main className="grow pt-20 bg-[#0a0a0a]">
                <Hero />
                <SelectedBlogs />
                <DiscoverBlog />
                <LatestBlogs />
                <Newsletter />
            </main>
            <Footer />
        </>
    );
}

export default Main;

