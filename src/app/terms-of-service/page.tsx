import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function TermsOfServicePage() {
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
                    <BookOpen className="w-4 h-4" /> Legal
                </div>

                <h1 className="font-display text-4xl md:text-6xl font-black mb-12 tracking-tight text-white">
                    Terms of Service
                </h1>

                <div className="prose prose-invert prose-zinc max-w-none space-y-8 font-light leading-relaxed text-zinc-400">
                    <p className="text-xl text-zinc-300">
                        Please read these Terms of Service carefully before using our website or utilizing the services and products provided by MTR Construction & Inputs.
                    </p>

                    <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                        <h2 className="font-display text-2xl text-white font-semibold mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing this website, we assume you accept these terms and conditions. Do not continue to use MTR Construction & Inputs if you do not agree to take all of the terms and conditions stated on this page.
                        </p>
                    </section>

                    <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                        <h2 className="font-display text-2xl text-white font-semibold mb-4">2. Services Scope</h2>
                        <p>
                            MTR Construction & Inputs acts as an authorized APDCL vendor providing solar installation, construction materials, and agricultural inputs across North-East India. All product warranties are strictly tied to guidelines outlined by the original manufacturer and governing bodies representing PM Surya Ghar schemes.
                        </p>
                    </section>

                    <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                        <h2 className="font-display text-2xl text-white font-semibold mb-4">3. Quotations & Subsidies</h2>
                        <ul className="list-disc pl-6 mt-4 space-y-2 text-zinc-300">
                            <li>All quotes provided are estimates based on standard material costs and are subject to change after physical surveying.</li>
                            <li>The final PM Surya Ghar subsidy disbursement is subject to government approvals and bank reviews; we act as facilitators but do not control final payout timelines.</li>
                            <li>Any misrepresentation of user premises/status leading to rejection of subsidies is not the liability of MTR.</li>
                        </ul>
                    </section>

                    <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                        <h2 className="font-display text-2xl text-white font-semibold mb-4">4. Content Reliability</h2>
                        <p>
                            All content, information, imagery, and diagrams presented on the site are illustrative. Actual product implementations and site structures may differ based on engineering demands and local geography. MTR holds the right to modify services based on product inventory and government regulatory changes under short notice.
                        </p>
                    </section>

                    <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                        <h2 className="font-display text-2xl text-white font-semibold mb-4">5. Governing Law</h2>
                        <p>
                            These terms shall be governed and construed in accordance with the laws of India, particularly within the jurisdiction of Assam courts, without regard to its conflict of law provisions.
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
