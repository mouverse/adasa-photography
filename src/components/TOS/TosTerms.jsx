import { Link } from "react-router-dom";
import { HiExclamation, HiMail, HiX } from "react-icons/hi";

function TosTerms() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6 mb-12">
                <div className="flex gap-4">
                    <div className="shrink-0">
                        <HiExclamation className="w-6 h-6 text-yellow-500" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-yellow-500 mb-1">
                            إشعار مهم
                        </h3>
                        <p className="text-yellow-300/80 text-sm">
                            يرجى قراءة شروط الخدمة هذه بعناية قبل استخدام موقعنا. بالوصول أو استخدام
                            عدسة، فإنك توافق على الالتزام بهذه الشروط.
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-12">
                <section className="group">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                            1
                        </span>
                        الموافقة على الشروط
                    </h2>
                    <div className="pr-11">
                        <p className="text-neutral-400 leading-relaxed mb-4">
                            بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بشروط الخدمة هذه وجميع
                            القوانين واللوائح المعمول بها. إذا لم توافق على أي من هذه الشروط، فأنت ممنوع
                            من استخدام هذا الموقع أو الوصول إليه.
                        </p>
                    </div>
                </section>

                <section className="group">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                            2
                        </span>
                        رخصة الاستخدام
                    </h2>
                    <div className="pr-11">
                        <p className="text-neutral-400 leading-relaxed mb-4">
                            يُمنح الإذن للوصول المؤقت إلى المواد على موقع عدسة للعرض الشخصي غير التجاري
                            فقط. هذا منح ترخيص وليس نقل ملكية.
                        </p>
                        <p className="text-neutral-300 font-medium mb-3">
                            بموجب هذا الترخيص لا يجوز لك:
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3 text-neutral-400">
                                <HiX className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                <span>تعديل أو نسخ المواد</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-400">
                                <HiX className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                <span>استخدام المواد لأي غرض تجاري أو للعرض العام</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-400">
                                <HiX className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                <span>محاولة فك أو عكس هندسة أي برنامج على الموقع</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-400">
                                <HiX className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                <span>إزالة أي حقوق نشر أو علامات ملكية من المواد</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-400">
                                <HiX className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                <span>نقل المواد إلى شخص آخر أو نسخها على أي خادم آخر</span>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="group">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                            3
                        </span>
                        إخلاء المسؤولية
                    </h2>
                    <div className="pr-11">
                        <p className="text-neutral-400 leading-relaxed mb-4">
                            المواد الموجودة على موقع عدسة مقدمة على أساس &quot;كما هي&quot;. عدسة لا يقدم
                            أي ضمانات، صريحة أو ضمنية، ويخلي مسؤوليته من جميع الضمانات الأخرى.
                        </p>
                    </div>
                </section>

                <section className="group">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                            4
                        </span>
                        القيود
                    </h2>
                    <div className="pr-11">
                        <p className="text-neutral-400 leading-relaxed mb-4">
                            في أي حال من الأحوال، لن يكون عدسة أو مورديه مسؤولين عن أي أضرار ناتجة عن
                            استخدام أو عدم القدرة على استخدام المواد على الموقع.
                        </p>
                    </div>
                </section>

                <section className="group">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                            5
                        </span>
                        محتوى المستخدم
                    </h2>
                    <div className="pr-11">
                        <p className="text-neutral-400 leading-relaxed mb-4">
                            إذا نشرت محتوى على موقعنا (مثل التعليقات)، فإنك تمنحنا ترخيصاً غير حصري وعالمي
                            ومجاني لاستخدام هذا المحتوى وإعادة إنتاجه وتعديله وتوزيعه.
                        </p>
                        <p className="text-neutral-300 font-medium mb-3">
                            يجب ألا يكون محتواك:
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3 text-neutral-400">
                                <HiX className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                <span>أن يكون تشهيرياً أو فاحشاً أو مسيئاً</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-400">
                                <HiX className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                <span>انتهاك حقوق الملكية الفكرية للآخرين</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-400">
                                <HiX className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                <span>احتواء فيروسات أو أكواد ضارة</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-400">
                                <HiX className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                <span>انتهاك أي قوانين أو لوائح معمول بها</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-400">
                                <HiX className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                <span>الإعلان عن منتجات أو خدمات غير مصرح بها</span>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="group">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                            6
                        </span>
                        التعديلات
                    </h2>
                    <div className="pr-11">
                        <p className="text-neutral-400 leading-relaxed mb-4">
                            قد يراجع عدسة شروط الخدمة هذه في أي وقت دون إشعار. باستخدام هذا الموقع، فإنك
                            توافق على الالتزام بالنسخة الحالية من شروط الخدمة.
                        </p>
                    </div>
                </section>

                <section className="group">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items_center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                            7
                        </span>
                        معلومات الاتصال
                    </h2>
                    <div className="pr-11">
                        <p className="text-neutral-400 leading-relaxed mb-4">
                            إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى التواصل معنا:
                        </p>
                        <a
                            href="mailto:hello@adasah.com"
                            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium"
                        >
                            <HiMail className="w-5 h-5" />
                            hello@adasah.com
                        </a>
                    </div>
                </section>
            </div>

            <div className="mt-16 pt-8 border-t border-[#262626]">
                <p className="text-neutral-500 text-sm text-center">
                    باستخدام موقعنا، فإنك توافق على شروط الخدمة هذه. انظر أيضاً{" "}
                    <Link
                        className="text-orange-500 hover:text-orange-400 font-medium"
                        to="/privacy"
                        data-discover="true"
                    >
                        سياسة الخصوصية
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
}

export default TosTerms;

