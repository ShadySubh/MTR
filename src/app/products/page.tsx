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
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.2]"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[150px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030509]/80 to-[#030509]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="mb-16">
                    <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 group font-display tracking-wide text-sm">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
                    </Link>
                    <h1 className="font-display text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">
                        Our Full Product Range
                    </h1>
                    <p className="text-xl text-zinc-400 font-light max-w-2xl">
                        From highly efficient solar energy systems to robust construction materials, discover everything MTR Construction provides.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    {products.map((product, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="group relative border border-white/5 bg-[#0a0a0a]/40 backdrop-blur-sm rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 flex flex-col shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]"
                        >
                            {/* Solar Cell Inner Texture */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <div className="w-full h-[250px] relative overflow-hidden bg-white/5 border-b border-white/10 shrink-0">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-8 relative z-10 flex flex-col flex-grow">
                                <h3 className="font-display font-semibold text-2xl mb-4 text-white group-hover:text-blue-400 transition-colors">{product.title}</h3>
                                <p className="text-zinc-400 text-base leading-relaxed font-light mb-8 group-hover:text-zinc-300 transition-colors">
                                    {product.desc}
                                </p>
                                <div className="mt-auto">
                                    <Link href="/contact">
                                        <Button className="w-full sm:w-auto px-6 h-12 rounded-xl bg-blue-600/10 hover:bg-blue-600 border border-blue-500/30 hover:border-blue-500 text-blue-400 hover:text-white font-medium transition-all group/btn flex items-center gap-2">
                                            Inquire About This Product
                                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </Button>
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
