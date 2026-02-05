import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { HiSearch, HiClock, HiViewGrid, HiViewList, HiArrowLeft } from "react-icons/hi";

function BlogsSearch() {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
  const [activeCategory, setActiveCategory] = useState(searchParams.get("category") || "جميع المقالات");
  const [layout, setLayout] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const resultsRef = useRef(null);

  const pageSize = 6;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/posts.json");
        const data = await res.json();
        setPosts(data.posts || []);

        if (searchParams.get("category")) {
          setActiveCategory(searchParams.get("category") || "جميع المقالات");
        }
      } catch (err) {
        console.error("Failed to load posts.json", err);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const urlCategory = searchParams.get("category") || "جميع المقالات";
    const urlQuery = searchParams.get("q") || "";

    setActiveCategory(urlCategory);
    setSearchTerm(urlQuery);
    setCurrentPage(1);
  }, [searchParams]);

  const categories = useMemo(() => {
    const base = new Set(posts.map((p) => p.category));
    return ["جميع المقالات", ...Array.from(base)];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === "جميع المقالات" || post.category === activeCategory;

      const term = searchTerm.trim();
      if (!term) return matchesCategory;

      const haystack = (
        post.title +
        " " +
        post.excerpt +
        " " +
        (post.tags || []).join(" ")
      ).toLowerCase();

      return matchesCategory && haystack.includes(term.toLowerCase());
    });
  }, [posts, activeCategory, searchTerm]);

  const pageCount = Math.max(1, Math.ceil(filteredPosts.length / pageSize));
  const currentSafePage = Math.min(currentPage, pageCount);
  const startIndex = (currentSafePage - 1) * pageSize;
  const pageItems = filteredPosts.slice(startIndex, startIndex + pageSize);

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);

    const params = new URLSearchParams(searchParams);
    if (cat === "جميع المقالات") {
      params.delete("category");
    } else {
      params.set("category", cat);
    }
    setSearchParams(params, { replace: true });
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setCurrentPage(1);

    const params = new URLSearchParams(searchParams);
    if (value.trim()) {
      params.set("q", value);
    } else {
      params.delete("q");
    }
    setSearchParams(params, { replace: true });
  };

  const formatDate = (isoDate) => {
    try {
      return new Date(isoDate).toLocaleDateString("ar-EG", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch {
      return isoDate;
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (!resultsRef.current) return;
    resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeCategory, searchTerm, layout, currentSafePage]);

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="ابحث في المقالات..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="input-dark w-full px-5 py-3 pr-12 rounded-xl bg-[#161616] border border-[#262626] text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300"
            />
            <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => {
              const isAll = cat === "جميع المقالات";
              const isActive = activeCategory === cat;
              if (isAll) {
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleCategoryClick(cat)}
                    className={
                      "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 " +
                      (isActive
                        ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                        : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30")
                    }
                  >
                    {cat}
                  </button>
                );
              }

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCategoryClick(cat)}
                  className={
                    "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 " +
                    (isActive
                      ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                      : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30")
                  }
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section
        ref={resultsRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-[146px]"
      >
        <div className="mb-8 flex items-center justify-between">
          <p className="text-neutral-400">
            عرض{" "}
            <span className="font-bold text-white">
              {filteredPosts.length}
            </span>{" "}
            مقالات
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
              <button
                type="button"
                title="عرض شبكي"
                onClick={() => setLayout("grid")}
                className={
                  "p-2 rounded-lg transition-all duration-300 " +
                  (layout === "grid"
                    ? "bg-orange-500 text-white"
                    : "text-neutral-400 hover:text-white")
                }
              >
                <HiViewGrid className="w-5 h-5" />
              </button>
              <button
                type="button"
                title="عرض قائمة"
                onClick={() => setLayout("list")}
                className={
                  "p-2 rounded-lg transition-all duration-300 " +
                  (layout === "list"
                    ? "bg-orange-500 text-white"
                    : "text-neutral-400 hover:text-white")
                }
              >
                <HiViewList className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {layout === "grid" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pageItems.map((post, index) => (
              <article
                key={post.id}
                className="group card overflow-hidden bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link className="block" to={`/blog/${post.slug}`} data-discover="true">
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
        ) : (
          <div className="flex flex-col gap-6">
            {pageItems.map((post, index) => (
              <article
                key={post.id}
                className="group bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-500 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link
                  className="flex flex-col md:flex-row"
                  to={`/blog/${post.slug}`}
                  data-discover="true"
                >
                  <div className="relative w-full md:w-72 lg:w-80 h-52 md:h-auto shrink-0 overflow-hidden">
                    <img
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={post.image}
                    />
                    <div className="absolute inset-0 bg-linear-to-l from-[#161616]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="flex-1 p-6 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-neutral-500">
                        <HiClock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-neutral-500">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {formatDate(post.date)}
                      </span>
                    </div>

                    <h2 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-neutral-400 mb-4 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <img
                          alt={post.author?.name}
                          className="w-10 h-10 rounded-full object-cover ring-2 ring-[#262626]"
                          src={post.author?.avatar}
                        />
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {post.author?.name}
                          </p>
                          <p className="text-xs text-neutral-500">
                            {post.author?.role}
                          </p>
                        </div>
                      </div>
                      <span className="hidden sm:inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                        اقرأ المقال
                        <HiArrowLeft className="w-5 h-5 rotate-180" />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}

        {pageCount > 1 && (
          <>
            <div className="flex justify-center items-center gap-2 mt-12">
              <button
                type="button"
                onClick={() => currentSafePage > 1 && handlePageChange(currentSafePage - 1)}
                disabled={currentSafePage === 1}
                className={
                  "p-3 rounded-xl border transition-all duration-300 " +
                  (currentSafePage === 1
                    ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
                    : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]")
                }
              >
                <HiArrowLeft className="w-5 h-5 rotate-180" />
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => handlePageChange(page)}
                    className={
                      "min-w-[44px] h-11 rounded-xl text-sm font-medium transition-all duration-300 " +
                      (page === currentSafePage
                        ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                        : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white")
                    }
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() =>
                  currentSafePage < pageCount && handlePageChange(currentSafePage + 1)
                }
                disabled={currentSafePage === pageCount}
                className={
                  "p-3 rounded-xl border transition-all duration-300 " +
                  (currentSafePage === pageCount
                    ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
                    : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]")
                }
              >
                <HiArrowLeft className="w-5 h-5" />
              </button>
            </div>
            <p className="text-center text-neutral-500 mt-4 text-sm">
              صفحة {currentSafePage} من {pageCount}
            </p>
          </>
        )}
      </section>
    </>
  );
}

export default BlogsSearch;

