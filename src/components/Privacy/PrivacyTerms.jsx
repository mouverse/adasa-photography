import { Link } from "react-router-dom";
import { HiCheckCircle, HiMail, HiShieldCheck } from "react-icons/hi";

function PrivacyTerms() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6 mb-12">
                <div className="flex gap-4">
                    <div className="shrink-0">
                        <HiShieldCheck className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-orange-500 mb-1">
                            خصوصيتك تهمنا
                        </h3>
                        <p className="text-orange-300/80 text-sm">
                            نحن ملتزمون بحماية معلوماتك الشخصية والشفافية بشأن ما نجمعه.
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
                        مقدمة
                    </h2>
                    <div className="pr-11">
                        <p className="text-neutral-400 leading-relaxed">
                            مرحباً بك في عدسة. نحن نحترم خصوصيتك وملتزمون بحماية بياناتك الشخصية. ستعلمك
                            سياسة الخصوصية هذه بكيفية العناية ببياناتك الشخصية عند زيارة موقعنا وتخبرك عن
                            حقوق الخصوصية الخاصة بك.
                        </p>
                    </div>
                </section>

                <section className="group">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                            2
                        </span>
                        المعلومات التي نجمعها
                    </h2>
                    <div className="pr-11">
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-neutral-400">
                                <HiCheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                <span>
                                    <strong className="text-white">بيانات الهوية:</strong> تشمل الاسم الأول،
                                    الاسم الأخير، اسم المستخدم أو معرف مشابه.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-400">
                                <HiCheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                <span>
                                    <strong className="text-white">بيانات الاتصال:</strong> تشمل عنوان البريد
                                    الإلكتروني.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-400">
                                <HiCheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                <span>
                                    <strong className="text-white">البيانات التقنية:</strong> تشمل عنوان IP،
                                    نوع المتصفح، المنطقة الزمنية، ونظام التشغيل.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-400">
                                <HiCheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                <span>
                                    <strong className="text-white">بيانات الاستخدام:</strong> تشمل معلومات حول
                                    كيفية استخدامك لموقعنا وخدماتنا.
                                </span>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="group">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                            3
                        </span>
                        كيف نستخدم معلوماتك
                    </h2>
                    <div className="pr-11">
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-neutral-400">
                                <HiCheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                <span>لتقديم خدمتنا والحفاظ عليها</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-400">
                                <HiCheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                <span>لإخطارك بالتغييرات في خدمتنا</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-400">
                                <HiCheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                <span>لتقديم دعم العملاء</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-400">
                                <HiCheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                <span>لجمع تحليلات أو معلومات قيمة لتحسين خدمتنا</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-400">
                                <HiCheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                <span>لمراقبة استخدام خدمتنا</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-400">
                                <HiCheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                <span>لاكتشاف ومنع ومعالجة المشاكل التقنية</span>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="group">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                            4
                        </span>
                        ملفات تعريف الارتباط
                    </h2>
                    <div className="pr-11">
                        <p className="text-neutral-400 leading-relaxed">
                            نستخدم ملفات تعريف الارتباط وتقنيات التتبع المشابهة لتتبع النشاط على موقعنا.
                            يمكنك توجيه متصفحك لرفض جميع ملفات تعريف الارتباط أو للإشارة عند إرسال ملف
                            تعريف ارتباط. ومع ذلك، إذا لم تقبل ملفات تعريف الارتباط، فقد لا تتمكن من استخدام
                            بعض أجزاء موقعنا.
                        </p>
                    </div>
                </section>

                <section className="group">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                            5
                        </span>
                        أمان البيانات
                    </h2>
                    <div className="pr-11">
                        <p className="text-neutral-400 leading-relaxed">
                            لقد وضعنا تدابير أمنية مناسبة لمنع فقدان بياناتك الشخصية أو استخدامها أو الوصول
                            إليها بشكل غير مصرح به عن طريق الخطأ. نحن نحد الوصول إلى بياناتك الشخصية لأولئك
                            الذين لديهم حاجة عملية للمعرفة.
                        </p>
                    </div>
                </section>

                <section className="group">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                            6
                        </span>
                        حقوقك
                    </h2>
                    <div className="pr-11">
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-neutral-400">
                                <HiCheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                <span>طلب الوصول إلى بياناتك الشخصية</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-400">
                                <HiCheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                <span>طلب تصحيح بياناتك الشخصية</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-400">
                                <HiCheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                <span>طلب مسح بياناتك الشخصية</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-400">
                                <HiCheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                <span>الاعتراض على معالجة بياناتك الشخصية</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-400">
                                <HiCheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                <span>طلب تقييد معالجة بياناتك الشخصية</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-400">
                                <HiCheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                <span>الحق في سحب الموافقة</span>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="group">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                            7
                        </span>
                        تواصل معنا
                    </h2>
                    <div className="pr-11">
                        <p className="text-neutral-400 leading-relaxed mb-4">
                            إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا:
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
                    باستخدام موقعنا، فإنك توافق على سياسة الخصوصية هذه. انظر أيضاً{" "}
                    <Link
                        className="text-orange-500 hover:text-orange-400 font-medium"
                        to="/terms"
                        data-discover="true"
                    >
                        شروط الخدمة
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
}

export default PrivacyTerms;

