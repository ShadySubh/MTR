"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Phone, Mail, ChevronRight, Copy, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

function CopyablePhone({ number }: { number: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(number);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <span className="inline-flex items-center gap-2 group/phone">
            {number}
            <button
                onClick={handleCopy}
                className="p-1 rounded-md bg-white/5 hover:bg-white/10 border border-white/5 transition-colors opacity-0 group-hover/phone:opacity-100 cursor-pointer"
                title="Copy Phone Number"
            >
                {copied ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 animate-in spin-in-180" />
                ) : (
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                )}
            </button>
        </span>
    );
}

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

    return (
        <div className="relative min-h-screen bg-[#030509] text-zinc-50 font-sans selection:bg-blue-500/30 selection:text-white py-24 px-6 overflow-hidden">

            {/* Immersive Solar Grid Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] opacity-[0.25]"></div>
                <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-600/15 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-600/15 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030509]/80 to-[#030509]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-20"
                >
                    <div className="mb-12">
                        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group font-display tracking-wide text-sm bg-white/5 hover:bg-white/10 px-5 py-2.5 border border-white/10 rounded-full w-fit">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
                        </Link>
                    </div>
                    {/* Animated Tag */}
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl mb-8 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset,0_8px_32px_rgba(0,0,0,0.4)] group hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 cursor-default">
                        <div className="relative flex items-center justify-center">
                            <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-blue-400 relative z-10"></div>
                        </div>
                        <span className="text-zinc-300 font-medium text-sm tracking-wide group-hover:text-white transition-colors duration-300">
                            Ready to Help
                        </span>
                    </div>

                    <h1 className="font-display text-5xl md:text-7xl font-black mb-6 tracking-tighter text-white">
                        Let's Talk <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-emerald-300">Today.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400/90 font-light max-w-3xl leading-relaxed">
                        Want to save on electricity or need a quote for construction? Drop us a message or give us a call, and our friendly team will guide you step by step.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:w-5/12"
                    >
                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group cursor-pointer">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] transform -rotate-3 group-hover:rotate-0">
                                    <MapPin className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="font-display text-zinc-500 text-xs tracking-widest uppercase mb-1 font-medium">Headquarters</h4>
                                    <p className="text-white font-medium text-lg">H.No. 46, Dwarka Nagar, Downtown<br />Guwahati - 06, Assam</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group cursor-pointer">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] transform -rotate-3 group-hover:rotate-0">
                                    <MapPin className="w-6 h-6 text-cyan-400" />
                                </div>
                                <div>
                                    <h4 className="font-display text-zinc-500 text-xs tracking-widest uppercase mb-1 font-medium">Barak Valley Office</h4>
                                    <p className="text-white font-medium text-lg">SARAPUR, NEAR GAS AGENCY<br />BHANGA BAZAR, SRIBHUMI</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group cursor-pointer">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] transform -rotate-3 group-hover:rotate-0">
                                    <Phone className="w-6 h-6 text-emerald-400" />
                                </div>
                                <div>
                                    <h4 className="font-display text-zinc-500 text-xs tracking-widest uppercase mb-1 font-medium">Phone Numbers</h4>
                                    <p className="text-white font-medium text-lg leading-loose">
                                        <CopyablePhone number="+91 8135971360" /><br />
                                        <CopyablePhone number="+91 6003195639" />
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Embedded Google Map */}
                        <div className="mt-14 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset,0_20px_40px_rgba(0,0,0,0.5)] relative group h-[300px]">
                            <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay pointer-events-none z-10 opacity-50 group-hover:opacity-0 transition-opacity duration-500"></div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.520549850428!2d91.7877994764893!3d26.147171292567812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5901da178af3%3A0x209e254a93151a30!2sMTR%20CONSTRUCT%20AND%20INPUTS!5e0!3m2!1sen!2sus!4v1771621788450!5m2!1sen!2sus"
                                className="w-full h-full border-0 filter grayscale-[50%] invert-[90%] hue-rotate-180 contrast-[1.2] opacity-80 group-hover:filter-none group-hover:opacity-100 transition-all duration-700"
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:w-7/12 relative"
                    >
                        <div className="absolute inset-0 bg-blue-500/10 blur-3xl -z-10 rounded-full mix-blend-screen"></div>
                        <div className="bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-2xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset]">
                            {/* Subtle top glare */}
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

                            <h3 className="font-display text-3xl font-bold text-white mb-10 relative z-10 flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] animate-pulse"></div>
                                Send a Message
                            </h3>

                            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="font-display text-xs font-semibold text-zinc-400 uppercase tracking-widest pl-1">Your Full Name</label>
                                        <Input
                                            placeholder="John Doe"
                                            className="bg-black/40 border-white/10 text-white placeholder:text-zinc-600 h-14 rounded-2xl focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:border-blue-500 focus-visible:bg-blue-500/5 transition-all outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="font-display text-xs font-semibold text-zinc-400 uppercase tracking-widest pl-1">Mobile Number</label>
                                        <Input
                                            placeholder="+91 Number"
                                            className="bg-black/40 border-white/10 text-white placeholder:text-zinc-600 h-14 rounded-2xl focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:border-blue-500 focus-visible:bg-blue-500/5 transition-all outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="font-display text-xs font-semibold text-zinc-400 uppercase tracking-widest pl-1">How can we help?</label>
                                    <Textarea
                                        placeholder="I am looking for rooftop solar..."
                                        className="bg-black/40 border-white/10 text-white placeholder:text-zinc-600 min-h-[160px] rounded-2xl p-5 focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:border-blue-500 focus-visible:bg-blue-500/5 resize-none transition-all outline-none"
                                    />
                                </div>
                                <div className="pt-4">
                                    <div className="relative group/btn cursor-pointer w-full">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl blur opacity-40 group-hover/btn:opacity-75 transition duration-500"></div>
                                        <button className="relative w-full flex items-center justify-center gap-3 h-16 bg-[#0a0a0a] hover:bg-white text-white hover:text-black border border-white/10 hover:border-transparent rounded-2xl font-display font-bold text-base md:text-lg tracking-wide transition-all duration-300 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset]">
                                            Request a Call Back
                                            <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
