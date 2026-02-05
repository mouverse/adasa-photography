import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiCheck } from "react-icons/hi";

const teamMembers = [
    {
        name: "سالم أحمد",
        role: "مصور محترف",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
        name: "محمد علي",
        role: "مصور بورتريه",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    },
    {
        name: "إبراهيم حسن",
        role: "مصور طبيعة",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
        name: "داود خالد",
        role: "مدرب تصوير",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
    },
    {
        name: "ليث محمود",
        role: "فنان بصري",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    },
    {
        name: "جمال عبدالله",
        role: "مصور ومراجع تقني",
        image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face",
    },
    {
        name: "نادر سعيد",
        role: "مصور شوارع",
        image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop&crop=face",
    },
    {
        name: "هاني الشمري",
        role: "مصور طعام",
        image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face",
    },
    {
        name: "خالد الفيصل",
        role: "مصور فلكي",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
    },
    {
        name: "سامي الحربي",
        role: "خبير تعديل صور",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop&crop=face",
    },
    {
        name: "رامي الخطيب",
        role: "مصور ماكرو",
        image: "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=100&h=100&fit=crop&crop=face",
    },
    {
        name: "باسم المصري",
        role: "مصور فني",
        image: "https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=100&h=100&fit=crop&crop=face",
    },
    {
        name: "منصور الزهراني",
        role: "مصور زفاف",
        image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=100&h=100&fit=crop&crop=face",
    },
    {
        name: "فيصل الدوسري",
        role: "مصور جوي",
        image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=100&h=100&fit=crop&crop=face",
    },
    {
        name: "عمر الراشد",
        role: "مصور حياة برية",
        image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face",
    },
    {
        name: "فارس العلي",
        role: "فنان فوتوغرافي",
        image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=face",
    },
    {
        name: "أحمد الشهري",
        role: "مصور رياضي",
        image: "https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=100&h=100&fit=crop&crop=face",
    },
    {
        name: "ماجد القحطاني",
        role: "مصور استوديو",
        image: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=100&h=100&fit=crop&crop=face",
    },
    {
        name: "ياسر العتيبي",
        role: "مصور رحالة",
        image: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=100&h=100&fit=crop&crop=face",
    },
    {
        name: "دحام الحسيني",
        role: "فنان بصري",
        image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=100&h=100&fit=crop&crop=face",
    },
    {
        name: "نايف المطيري",
        role: "مصور مواليد",
        image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face",
    },
    {
        name: "عبدالله الغامدي",
        role: "مصور عقارات",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face",
    },
    {
        name: "كريم الفهد",
        role: "خبير تقني",
        image: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=100&h=100&fit=crop&crop=face",
    },
    {
        name: "سلطان الراجحي",
        role: "فنان تصوير",
        image: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=100&h=100&fit=crop&crop=face",
    },
    {
        name: "فهد السبيعي",
        role: "مراجع معدات",
        image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=100&h=100&fit=crop&crop=face",
    },
    {
        name: "راشد الجاسر",
        role: "فنان بصري",
        image: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=100&h=100&fit=crop&crop=face",
    },
];

function AboutTeam() {
    return (
        <section className="py-20 bg-[#0a0a0a]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="section-label mb-4">فريقنا</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        تعرف على كتابنا
                    </h2>
                    <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                        فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member) => (
                        <div
                            key={member.name}
                            className="group bg-[#161616] rounded-2xl p-6 text-center border border-[#262626] hover:border-orange-500/30 transition-all duration-300"
                        >
                            <div className="relative inline-block mb-4">
                                <img
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full object-cover ring-4 ring-[#262626] group-hover:ring-orange-500/30 transition-all"
                                    src={member.image}
                                />
                                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full border-2 border-[#161616] flex items-center justify-center">
                                    <HiCheck className="w-3 h-3 text-white" />
                                </div>
                            </div>
                            <h3 className="font-bold text-white text-lg">{member.name}</h3>
                            <p className="text-orange-500 text-sm font-medium mb-4">{member.role}</p>
                            <div className="flex justify-center gap-3">
                                <a
                                    href="#"
                                    className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-orange-500 hover:text-white transition-colors"
                                >
                                    <FaTwitter className="w-4 h-4" />
                                </a>
                                <a
                                    href="#"
                                    className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-neutral-700 hover:text-white transition-colors"
                                >
                                    <FaGithub className="w-4 h-4" />
                                </a>
                                <a
                                    href="#"
                                    className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-blue-600 hover:text-white transition-colors"
                                >
                                    <FaLinkedin className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AboutTeam;

