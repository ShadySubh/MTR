"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Copy, CheckCircle2, Phone, ArrowLeft, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
    {
        question: "Is Roof Top Solar fully free?",
        answer: "It is not fully free but there is a very huge amount of subsidy provided by the Government of India. There is subsidy from central and state government after installation."
    },
    {
        question: "How much is the Central & State Goverment Subsidy?",
        answer: "Assam is a special category state hence central subsidy here is 10% higher than other states.\nCentral Govt Subsidy (for Assam): 1 KW – Rs 33000, 2KW – 66000, 3KW & Above – 85800.\nEvery State has additional State Subsidy which is different from state to state. Assam State Govt Subsidy: 1KW - Rs 15000, 2KW – 30000, 3KW & Above – 45000.\nTotal (Central + Assam State): 1KW - 48000, 2KW - 96000, 3KW & above - 130800."
    },
    {
        question: "How to get Central Subsidy?",
        answer: "Step 1: Register yourself in Portal (Documents needed: APDCL Consumer number, mobile number for OTP. Portal will fetch all details from consumer number.)\nStep 2: Select KW capacity (you can change later also)\nStep 3: Select Vendor (you can change later also)\nStep 4: Agreement between Vendor & Consumer on Rs 100 stamp paper.\nStep 5: If Bank Loan needed – In portal choose bank loan option. Redirected to Jan Samarth Portal for Aadhaar authentication and loan processing. Banks finance up to 90% of the Solar Plant costs.\nStep 6: No Bank Loan needed – Consumer to make payment to Vendor and Vendor will start installation process.\nStep 7: After installation, vendor to submit installation report in the portal.\nStep 8: APDCL will inspect the installation and submit commissioning report.\nStep 9: Agreement between Consumer & APDCL for Net Metering Arrangement.\nStep 10: APDCL will install net meter at consumer site.\nStep 11: Consumer will submit bank details and cancelled cheque for subsidy claim in portal.\nStep 12: Central Govt will submit Central Subsidy directly in the bank account of Consumer (15-30 days usually).\nStep 13: State Government will pay its portion directly to consumer in their bank account after Central subsidy."
    },
    {
        question: "How to get State Subsidy?",
        answer: "There is no extra document submission or paper work needed to get State Subsidy. After Central Government Subsidy payment State Government will pay on its own directly."
    },
    {
        question: "How much is product warranty?",
        answer: "IB Solar Panel offers 12 years product warranty and 30 years performance warranty.\nPahal Solar Panels offers 10 years product warranty and 27 years of performance warranty.\nEVVO AND V-SOLE Solar Inverters offers 8 years warranty."
    },
    {
        question: "What is not covered under Warranty Period?",
        answer: "Any defect which occurs due to manufacturing defect is covered under warranty. Any defects arising due to reasons like thunder storms, extreme high voltage supply, flood, normal wear and tear, rat bites, physical damage, electrical damages are not covered under warranty. For more details please refer to Warranty Manuals of manufacturers and Government guidelines on subsidy."
    },
    {
        question: "What brands of Solar Panels and Inverters do you provide?",
        answer: "We provide only MNRE empanelled companies materials which meets highest quality standards. Depending on stock availability we are providing solar panels of IB & Pahal brands. We are providing inverters of EVVO & V-Sole brands. All other materials provided are of top notch quality."
    },
    {
        question: "How much space do I need on my roof to install Roof Top Solar?",
        answer: "Space needed to install roof top solar:\n1 KW – 100 sq ft\n2 KW – 200 sq ft\n3 KW – 300 sq ft"
    },
    {
        question: "How many Units are generated in one month?",
        answer: "1 KW Solar Panel generates minimum 100 Units in 1 month.\nIn summers this can increase from 100 to 130 units per month.\n2KW, 3KW and above will increase proportionally."
    },
    {
        question: "Will I get batteries also in this package?",
        answer: "No. This is an On Grid system which does not require any battery storage system. If you produce solar energy more than you consume it will automatically go to APDCL grid. If you produce less than demand then APDCL grid will directly provide extra electricity. There is no need and use of storage."
    },
    {
        question: "Will Solar System work during power cut from APDCL?",
        answer: "No. Solar System will shut down during APDCL power outage. This is done keeping safety of lineman and other people and systems. If a lineman is working on the line and for his safety APDCL cut the power but Solar System provides power to the grid then lineman safety is compromised."
    },
    {
        question: "How will I get paid for the extra electrical units I supply to APDCL?",
        answer: "Units supplied by consumer to APDCL will be deducted from units supplied by APDCL to consumer. This will be carry forwarded to subsequent month if unit supplied by consumer to GRID is more than unit supplied from GRID to consumer."
    },
    {
        question: "What type of Panel do you supply?",
        answer: "We supply bifacial mono perc half cut PV panels. This is the latest technology which has more efficiency. These are Made in India panel in adherence to Government of India policies."
    },
    {
        question: "What is the warranty of the system and service?",
        answer: "The warranty of the system is for 5 years. If there is any fault in the system consumer will contact the vendor. Vendor will rectify the defect upto 5 years from the date of installation."
    },
    {
        question: "What is the differance between System Warranty & Product Warranty?",
        answer: "System Warranty of 5 years is mandatory as per government rules. If any component of Solar System or supply of electricity is affected then the vendor has to rectify the connection or defective product upto 5 years. However product warranty is available only for the product as per product manufacturers warranty norms."
    },
    {
        question: "How should we deal with the shadow falling on panel?",
        answer: "Shadow free area are required for better performance of Solar System. In case of partial shadowing performance can be improved by installing Panel level optimiser or microinverter."
    },
    {
        question: "How many units are produced by a 1KW Panel?",
        answer: "In summer or sunny days generation per kw per day vary from 4-5 kWh. In cloudy days 3-3.5 unit per kw per day."
    },
    {
        question: "How to know how much units are produced today or yesterday by Solar Panels?",
        answer: "Inverters have a Data logger. Through which we can check Daily, Monthly, Yearly generation in our Mobile apps."
    },
    {
        question: "How often should we clean the panel? What should we use to clean the panel?",
        answer: "Panels should be cleaned two times in a month. This can be done by spraying water and using a wiper."
    },
    {
        question: "What is the life of the Roof top Solar plant?",
        answer: "Lifespan of a Solar Installation is 25 years."
    },
    {
        question: "What will happen if there is rain, thunderstorm, lightning?",
        answer: "Solar Panel is water proof so there is no effect of rain on it. Solar Inverters etc stay inside the house and is already protected. In case of lightning we already have lightning arrestors and earthing provided with the system. These will protect the system."
    },
    {
        question: "What to do if there is any fault in the system?",
        answer: "Any fault in the system will show in the mobile app. The screen shot of the same to be shared with us for fixing of fault. Our service team will assist in resolving the fault."
    }
];

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-white/10 rounded-2xl bg-[#0a0a0a]/50 backdrop-blur-md overflow-hidden transition-colors hover:border-white/20 hover:bg-[#121212]/50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none cursor-pointer"
            >
                <h3 className="font-display text-lg font-medium text-white pr-4">{question}</h3>
                <div className={`shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-blue-500/20 border-blue-500/50 text-blue-400' : 'text-zinc-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6 text-zinc-400 font-light leading-relaxed border-t border-white/5 pt-4 whitespace-pre-line">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FAQPage() {
    const [copied, setCopied] = useState(false);
    const phoneNumber = "+91 8135971360 / +91 6003195639";

    const handleCopy = () => {
        navigator.clipboard.writeText("+918135971360, +916003195639");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative min-h-screen bg-[#030509] text-zinc-50 font-sans selection:bg-blue-500/30 selection:text-white py-24 px-6">

            {/* Immersive Solar Grid Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.2]"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[150px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030509]/80 to-[#030509]"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">

                {/* Header */}
                <div className="mb-16">
                    <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 group font-display tracking-wide text-sm">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
                    </Link>
                    <h1 className="font-display text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xl text-zinc-400 font-light max-w-2xl">
                        Everything you need to know about rooftop solar, government subsidies, and our installation process.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4 mb-32">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>

                {/* CTA Section */}
                <div className="relative bg-gradient-to-br from-[#0a0a0a] to-[#121212] border border-white/10 rounded-3xl p-8 md:p-16 text-center overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.05)] group">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none -z-10 group-hover:bg-blue-500/30 transition-colors duration-700"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-inner">
                            <Sun className="w-8 h-8 text-yellow-500" />
                        </div>

                        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 max-w-2xl leading-tight">
                            MTR believes in making a positive impact on society and the planet.
                        </h2>
                        <p className="text-lg text-zinc-400 font-light mb-12 max-w-xl mx-auto">
                            Join us on our journey towards a more sustainable future. Start saving on electricity while doing your part for the environment.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-5">
                            <Link href="/#contact">
                                <Button size="lg" className="h-14 px-8 text-base bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-blue-400/30 w-full sm:w-auto">
                                    Contact Us Today
                                </Button>
                            </Link>

                            <div className="flex items-center gap-2 h-14 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 transition-colors font-display text-zinc-300 w-full sm:w-auto">
                                <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                                <span className="font-medium px-2">{phoneNumber}</span>
                                <button
                                    onClick={handleCopy}
                                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-colors ml-auto flex items-center justify-center shrink-0 w-10 h-10 cursor-pointer"
                                    title="Copy Phone Number"
                                >
                                    {copied ? (
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 animate-in spin-in-180" />
                                    ) : (
                                        <Copy className="w-4 h-4 text-zinc-400" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
