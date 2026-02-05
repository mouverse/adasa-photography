import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLeft, HiClock } from 'react-icons/hi';

function LatestBlogs() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch('/api/posts.json');
                const data = await res.json();
                setPosts(data.posts || []);
            } catch (err) {
                console.error('Failed to load posts.json', err);
            }
        };

        fetchPosts();
    }, []);

    const sortedLatest = [...posts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    const latestThree = sortedLatest.slice(0, 3);

    const formatDate = (isoDate) => {
        try {
            return new Date(isoDate).toLocaleDateString('ar-EG', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            });
        } catch {
            return isoDate;
        }
    };

    return (
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-linear-to-r from-orange-500/5 to-transparent" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                    <div>
                        <span className="section-label mb-4">الأحدث</span>
                        <h2 className="section-title text-white text-3xl md:text-4xl font-bold mb-2">
                            أحدث المقالات
                        </h2>
                        <p className="section-subtitle max-w-lg text-neutral-400">
                            محتوى جديد طازج من المطبعة
                        </p>
                    </div>

                    <Link
                        className="group inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors"
                        to="/blog"
                        data-discover="true"
                    >
                        عرض جميع المقالات
                        <HiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {latestThree.map((post, index) => (
                        <article
                            key={post.id}
                            className="group card overflow-hidden bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <Link
                                className="block"
                                to={`/blog/${post.slug}`}
                                data-discover="true"
                            >
                                <div className="relative h-52 overflow-hidden">
                                    <img
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                        src={post.image}
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                                        <span className="flex items-center gap-1">
                                            <HiClock className="w-4 h-4" />
                                            {post.readTime}
                                        </span>
                                        <span className="w-1 h-1 bg-neutral-600 rounded-full" />
                                        <span>{formatDate(post.date)}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                                        {post.title}
                                    </h3>

                                    <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                                        <div className="flex items-center gap-3">
                                            <img
                                                alt={post.author?.name}
                                                className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                                                src={post.author?.avatar}
                                            />
                                            <div>
                                                <p className="text-sm font-medium text-white">
                                                    {post.author?.name}
                                                </p>
                                                <p className="text-xs text-neutral-500">
                                                    {post.author?.role}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                                            <HiArrowLeft className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default LatestBlogs;

