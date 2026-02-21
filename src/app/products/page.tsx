"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const products = [
    {
        title: "Home Solar Systems",
        image: "/Images/Products/home_solar_systems.jpg",
        desc: "Complete rooftop solar solutions for your home. Generate clean electricity, drastically reduce or eliminate utility bills, and get the massive ₹1,30,000 PM Surya Ghar subsidy directly into your bank account. Includes premium bifacial panels, reliable inverters, earthing, installation, and 5 years mandatory system warranty alongside heavy performance assurance."
    },
    {
        title: "Commercial Solar",
        image: "/Images/Products/commercial_solar.jpg",
        desc: "Powerful solar panels and sturdy inverters to run your business efficiently. Maximize factory space, reduce towering commercial energy rates, and increase profit margins with a sustainable power generation solution. Includes comprehensive load analysis, grid integration, advanced net meter provisioning, and heavy-duty structural mountings."
    },
    {
        title: "Solar Water Pumps",
        image: "/Images/Products/solar_pumps.jpg",
        desc: "Reliable solar pumps for farming and easy irrigation without relying on the unpredictable local power grid. Reduce diesel costs to zero with highly efficient submersible and surface pumps perfectly calibrated to complex agriculture needs."
    },
    {
        title: "Steel Structures",
        image: "/Images/Products/steel-structures.jpg",
        desc: "Strong, high-quality pre-fabricated steel structures, customized rooftop frames, and industrial sheds. We engineer robust foundational infrastructures meant to withstand severe weather, securely mounting expensive solar assets with precision."
    },
    {
        title: "Green & Poly Houses",
        image: "/Images/Products/green_and_poly_houses.jpg",
        desc: "Modern greenhouses to protect crops from severe weather, maximize yield, and boost overall agricultural output. Custom designed for local climates guaranteeing optimal UV penetration and temperature retention."
    },
    {
        title: "Irrigation Pipes",
        image: "/Images/Products/irrigation_pipes.jpg",
        desc: "Durable plumbing and high-quality piping solutions ranging from sprinkler systems to extensive drip irrigation networks. Heavy-duty PVC ensuring maximum water delivery with minimal leakage."
    },
    {
        title: "Construction Supplies",
        image: "/Images/Products/construction_supplies.jpg",
        desc: "Wide range of high-quality machinery, construction equipment, and reliable inputs for your heavy structural or building projects. Designed for tough rugged use by professional contractors."
    },
    {
        title: "Solar Batteries",
        image: "/Images/Products/solar_batteries.jpg",
        desc: "Individual premium solar panels, heavy-duty backup batteries, and high-efficiency hybrid inverters for highly customized, standalone energy storage needs and emergency backups."
    }
];

export default function ProductsPage() {
    return (
        <div className="relative min-h-screen bg-[#030509] text-zinc-50 font-sans selection:bg-blue-500/30 selection:text-white py-24 px-6">

            {/* Immersive Solar Grid Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] opacity-[0.25]"></div>
                <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-600/15 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-600/15 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030509]/80 to-[#030509]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16 text-center"
                >
                    <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-10 group font-display tracking-wide text-sm bg-white/5 hover:bg-white/10 px-5 py-2.5 border border-white/10 rounded-full w-fit">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
                    </Link>
                    <h1 className="font-display text-5xl md:text-7xl font-black mb-6 tracking-tighter text-white">
                        Our Full <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-emerald-300">Product Range</span>
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400/90 font-light max-w-3xl mx-auto leading-relaxed">
                        From highly efficient solar energy systems to robust construction materials, discover everything MTR Construction provides.
                    </p>
                </motion.div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    {products.map((product, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-xl rounded-3xl overflow-hidden hover:border-blue-500/30 hover:bg-white/[0.05] transition-all duration-500 flex flex-col shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset,0_20px_40px_rgba(0,0,0,0.5)]"
                        >
                            {/* Inner Glow on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>

                            <div className="w-full h-[300px] relative overflow-hidden bg-black/50 border-b border-white/10 shrink-0 z-10">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80 z-10"></div>
                            </div>

                            <div className="p-8 relative z-20 flex flex-col flex-grow">
                                <h3 className="font-display font-bold text-3xl mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-300 transition-all duration-500 tracking-tight">{product.title}</h3>
                                <p className="text-zinc-400 text-base leading-relaxed font-light mb-10 group-hover:text-zinc-300 transition-colors">
                                    {product.desc}
                                </p>
                                <div className="mt-auto">
                                    <Link href="/contact" className="block w-full">
                                        <div className="relative group/btn cursor-pointer w-full">
                                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl blur opacity-0 group-hover/btn:opacity-40 transition duration-500"></div>
                                            <button className="relative w-full flex items-center justify-center gap-3 h-14 bg-white/5 hover:bg-white/10 text-white border border-white/10 group-hover/btn:border-white/30 rounded-2xl font-display font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset]">
                                                Inquire About This Product
                                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                                            </button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
