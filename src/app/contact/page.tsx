"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

    return (
        <div className="relative min-h-screen bg-[#030509] text-zinc-50 font-sans selection:bg-blue-500/30 selection:text-white py-24 px-6 overflow-hidden">

            {/* Immersive Solar Grid Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.2]"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[150px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030509]/80 to-[#030509]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="mb-20">
                    <div className="mb-12">
                        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group font-display tracking-wide text-sm bg-white/5 hover:bg-white/10 px-4 py-2 border border-white/10 rounded-full w-fit">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
                        </Link>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs tracking-wider uppercase mb-6 font-display w-fit">
                        Ready to Help
                    </div>
                    <h1 className="font-display text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">
                        Let's Talk Today.
                    </h1>
                    <p className="text-xl text-zinc-400 font-light max-w-2xl">
                        Want to save on electricity or need a quote for construction? Drop us a message or give us a call, and our friendly team will guide you step by step.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-5/12">
                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group cursor-pointer">
                                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-300 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]">
                                    <MapPin className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="font-display text-zinc-500 text-xs tracking-widest uppercase mb-1 font-medium">Our Office Location</h4>
                                    <p className="text-white font-medium">H.No. 46, Dwarka Nagar, Downtown<br />Guwahati - 06, Assam</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group cursor-pointer">
                                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all duration-300 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]">
                                    <Phone className="w-6 h-6 text-emerald-400" />
                                </div>
                                <div>
                                    <h4 className="font-display text-zinc-500 text-xs tracking-widest uppercase mb-1 font-medium">Phone Number</h4>
                                    <p className="text-white font-medium">+91 8135971360</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group cursor-pointer">
                                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all duration-300 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]">
                                    <Mail className="w-6 h-6 text-cyan-400" />
                                </div>
                                <div>
                                    <h4 className="font-display text-zinc-500 text-xs tracking-widest uppercase mb-1 font-medium">Email Address</h4>
                                    <p className="text-white font-medium">contact@mtrconstruction.in</p>
                                </div>
                            </div>
                        </div>

                        {/* Embedded Google Map */}
                        <div className="mt-12 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset] relative group h-[300px]">
                            <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay pointer-events-none z-10 opacity-50 group-hover:opacity-0 transition-opacity duration-500"></div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.520549850428!2d91.7877994764893!3d26.147171292567812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5901da178af3%3A0x209e254a93151a30!2sMTR%20CONSTRUCT%20AND%20INPUTS!5e0!3m2!1sen!2sus!4v1771621788450!5m2!1sen!2sus"
                                className="w-full h-full border-0 filter grayscale-[50%] invert-[90%] hue-rotate-180 contrast-[1.2] opacity-80 group-hover:filter-none group-hover:opacity-100 transition-all duration-700"
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    <div className="lg:w-7/12 relative">
                        <div className="absolute inset-0 bg-blue-500/5 blur-3xl -z-10 rounded-full"></div>
                        <div className="bg-[#0a0a0a]/80 backdrop-blur-2xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset]">
                            {/* Subtle top glare */}
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                            <h3 className="font-display text-2xl font-semibold text-white mb-8 relative z-10 flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-pulse"></div>
                                Send a Message
                            </h3>

                            <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="font-display text-xs font-semibold text-zinc-500 uppercase tracking-widest pl-1">Your Full Name</label>
                                        <Input
                                            placeholder="John Doe"
                                            className="bg-black/50 border-white/10 text-white placeholder:text-zinc-700 h-14 rounded-xl focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:border-blue-500 focus-visible:bg-blue-500/5 transition-all outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="font-display text-xs font-semibold text-zinc-500 uppercase tracking-widest pl-1">Mobile Number</label>
                                        <Input
                                            placeholder="+91 Number"
                                            className="bg-black/50 border-white/10 text-white placeholder:text-zinc-700 h-14 rounded-xl focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:border-blue-500 focus-visible:bg-blue-500/5 transition-all outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="font-display text-xs font-semibold text-zinc-500 uppercase tracking-widest pl-1">How can we help?</label>
                                    <Textarea
                                        placeholder="I am looking for rooftop solar..."
                                        className="bg-black/50 border-white/10 text-white placeholder:text-zinc-700 min-h-[140px] rounded-xl p-4 focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:border-blue-500 focus-visible:bg-blue-500/5 resize-none transition-all outline-none"
                                    />
                                </div>
                                <Button className="w-full h-14 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base mt-2 transition-all relative overflow-hidden group/btn font-display tracking-wide shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-blue-400/30">
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        Request a Call Back
                                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </span>
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
