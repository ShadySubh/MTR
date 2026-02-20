import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPolicyPage() {
    return (
        <div className="relative min-h-screen bg-[#030509] text-zinc-50 font-sans selection:bg-blue-500/30 selection:text-white py-24 px-6 md:px-12">

            {/* Immersive Solar Grid Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.2]"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[150px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030509]/90 to-[#030509]"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10 pt-10">

                <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-12 group font-display tracking-wide text-sm bg-white/5 hover:bg-white/10 px-4 py-2 border border-white/10 rounded-full w-fit">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>

                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm tracking-wider uppercase mb-8 font-display w-fit">
                    <Shield className="w-4 h-4" /> Legal
                </div>

                <h1 className="font-display text-4xl md:text-6xl font-black mb-12 tracking-tight text-white">
                    Privacy Policy
                </h1>

                <div className="prose prose-invert prose-zinc max-w-none space-y-8 font-light leading-relaxed text-zinc-400">
                    <p className="text-xl text-zinc-300">
                        At MTR Construction & Inputs, securing your personal data is our utmost priority. This privacy policy outlines the information we collect and how it is used.
                    </p>

                    <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                        <h2 className="font-display text-2xl text-white font-semibold mb-4">1. Information Collection</h2>
                        <p>
                            We collect information when you register on our site, place an order, subscribe to our newsletter, respond to a survey, or fill out a form. The collected information includes your name, email address, phone number, and APDCL Consumer details necessary for processing PM Surya Ghar subsidies.
                        </p>
                    </section>

                    <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                        <h2 className="font-display text-2xl text-white font-semibold mb-4">2. Usage of Information</h2>
                        <p>
                            Any of the information we collect from you may be used in one of the following ways:
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2 text-zinc-300">
                            <li>To personalize your experience and meet your individual requirements.</li>
                            <li>To improve customer service and our support capabilities.</li>
                            <li>To process transactions and facilitate government subsidy applications.</li>
                            <li>To send periodic emails regarding order status, company news, updates, or related product information.</li>
                        </ul>
                    </section>

                    <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                        <h2 className="font-display text-2xl text-white font-semibold mb-4">3. Data Protection</h2>
                        <p>
                            We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. All sensitive details and financial interactions are rigorously secured.
                        </p>
                    </section>

                    <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                        <h2 className="font-display text-2xl text-white font-semibold mb-4">4. Third-Party Disclosure</h2>
                        <p>
                            We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you (such as APDCL and government bodies for subsidies), so long as those parties agree to keep this information confidential.
                        </p>
                    </section>

                    <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                        <h2 className="font-display text-2xl text-white font-semibold mb-4">5. Contact Us</h2>
                        <p>
                            If there are any questions regarding this privacy policy, you may contact us using the information on our contact page or at <strong className="text-white">contact@mtrconstruction.in</strong>.
                        </p>
                    </section>

                    <p className="text-sm pt-8 text-zinc-500 text-center">
                        Last Updated: {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </div>
    );
}
