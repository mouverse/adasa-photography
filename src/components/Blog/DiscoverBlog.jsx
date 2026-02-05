import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaUser, FaMountain, FaSlidersH, FaCamera } from 'react-icons/fa';
import { HiArrowLeft } from 'react-icons/hi';

const ICON_MAP = {
    'إضاءة': FaSun,
    'بورتريه': FaUser,
    'مناظر طبيعية': FaMountain,
    'تقنيات': FaSlidersH,
    'معدات': FaCamera,
};

function DiscoverBlog() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/posts.json');
                const data = await res.json();
                setCategories(data.categories || []);
            } catch (err) {
                console.error('Failed to load posts.json', err);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="py-24 bg-[#111111] relative border-y border-[#262626]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="section-label mb-4">التصنيفات</span>
                    <h2 className="section-title text-white text-3xl md:text-4xl font-bold mb-2">
                        استكشف حسب الموضوع
                    </h2>
                    <p className="section-subtitle max-w-lg mx-auto text-neutral-400">
                        اعثر على محتوى مصمم حسب اهتماماتك
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {categories.map((cat, index) => {
                        const Icon = ICON_MAP[cat.name] || FaCamera;
                        const delay = index * 100;
                        const gradientClass =
                            cat.name === 'بورتريه'
                                ? 'from-orange-600 to-orange-400'
                                : 'from-orange-500 to-yellow-500';

                        return (
                            <Link
                                key={cat.name}
                                className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
                                to={`/blog?category=${encodeURIComponent(cat.name)}`}
                                data-discover="true"
                                style={{ animationDelay: `${delay}ms` }}
                            >
                                <div
                                    className={`absolute inset-0 bg-linear-to-br ${gradientClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                />

                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                                        <Icon className="text-xl text-orange-500 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                                        {cat.name}
                                    </h3>
                                    <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                                        {cat.count} مقالة
                                    </p>

                                    <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                                        <HiArrowLeft className="w-4 h-4 text-white rotate-180" />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default DiscoverBlog;

