"use client";

import { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Sun,
  Home,
  Building2,
  Droplets,
  Wrench,
  Tractor,
  Battery,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  ShieldCheck,
  Zap,
  Leaf,
  ArrowRight,
  Settings,
  Award,
  ThumbsUp,
  CheckCircle2,
  IndianRupee,
  ChevronDown,
  HelpCircle,
  Copy
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-2xl bg-[#0a0a0a]/50 backdrop-blur-md overflow-hidden transition-colors hover:border-white/20 hover:bg-[#121212]/50 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]">
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

export default function LandingPage() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const products = [
    {
      title: "Home Solar Systems",
      icon: <Home className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors duration-300" />,
      desc: "Stop paying high electricity bills with complete rooftop solar solutions for your home. Get massive government subsidies and reduce your carbon footprint while enjoying uninterrupted power.",
      image: "/Images/Products/home_solar_systems.jpg"
    },
    {
      title: "Commercial Solar",
      icon: <Building2 className="w-8 h-8 text-emerald-400 group-hover:text-white transition-colors duration-300" />,
      desc: "Powerful solar panels and sturdy inverters to run your business efficiently. Maximize your roof space to drastically cut operational costs and improve your company's green credentials.",
      image: "/Images/Products/commercial_solar.jpg"
    }
  ];

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
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <div className="relative min-h-screen bg-[#030509] text-zinc-50 font-sans selection:bg-blue-500/30 selection:text-white overflow-hidden">

      {/* Immersive Solar Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Base Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] opacity-[0.25]"></div>

        <motion.div
          style={{ y }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/15 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]) }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-600/15 rounded-full blur-[120px]"
        />
        {/* Central Solar Glow for Hero */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030509]/80 to-[#030509]"></div>
      </div>

      {/* Navigation Layer */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 z-50 w-full flex justify-center px-6 pointer-events-none"
      >
        <div className="flex items-center justify-between pointer-events-auto bg-[#030509]/40 backdrop-blur-2xl border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset,0_8px_32px_rgba(0,0,0,0.6)] rounded-full px-4 h-16 max-w-5xl w-full relative">

          {/* Subtle top glare */}
          <div className="absolute top-0 inset-x-0 h-px w-1/3 mx-auto bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>

          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 cursor-pointer group">
              <div className="relative p-2 rounded-full bg-white/[0.03] border border-white/10 group-hover:bg-blue-500/20 group-hover:border-blue-500/40 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-500 shadow-inner">
                <Sun className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transform group-hover:rotate-45 transition-transform duration-500" />
              </div>
              <div className="hidden sm:block pr-4">
                <h1 className="font-display font-bold tracking-tight text-lg leading-none text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all duration-300">MTR</h1>
              </div>
            </Link>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center justify-center font-medium text-sm text-zinc-400 border-x border-white/5 h-full flex-grow mx-8">
            <div className="flex gap-8 h-full">
              {['Products', 'Subsidy Details', 'Contact Us'].map((item) => (
                <Link key={item} href={item === 'Contact Us' ? '/contact' : (item === 'Subsidy Details' ? '/#subsidy' : '/products')} className="relative hover:text-white transition-colors py-2 group font-display tracking-wide flex items-center h-full">
                  <span className="relative z-10">{item}</span>
                  <span className="absolute bottom-[-1px] left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-emerald-400 rounded-t-full transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                  <div className="absolute inset-x-0 bottom-0 h-[20px] bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center">
            <Link href="/contact" className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <button className="relative flex items-center justify-center bg-[#0a0a0a] hover:bg-white text-white hover:text-black border border-white/10 hover:border-transparent rounded-full px-6 h-10 transition-all duration-300 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset]">
                <span className="flex items-center gap-2 text-sm tracking-wide font-display font-bold">
                  Get Free Quote <Zap className="w-3.5 h-3.5" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Main Content Space */}
      <main className="relative z-10">

        {/* Hero Section */}
        <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-6 flex items-center justify-center min-h-[100vh]">
          {/* Subtle Ambient Glows specific to Hero */}
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-400/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

          <div className="max-w-6xl mx-auto text-center relative z-10 w-full mb-10">
            {/* Animated Floating Tag */}
            <motion.div
              initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl mb-12 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset,0_8px_32px_rgba(0,0,0,0.4)] group hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 cursor-default"
            >
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-emerald-500 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 relative z-10"></div>
              </div>
              <span className="text-zinc-300 font-medium text-sm tracking-wide group-hover:text-white transition-colors duration-300">
                Government Approved APDCL Vendor
              </span>
              <div className="w-px h-4 bg-white/20 mx-1 border-r border-transparent"></div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 font-bold text-sm tracking-wide flex items-center gap-1.5">
                Save up to 90%
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl sm:text-7xl lg:text-[7.5rem] font-bold tracking-tighter leading-[1.05] text-white"
            >
              Power Your Future <br className="hidden sm:block" />
              <span className="relative inline-block mt-3">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-white to-white px-2">
                  With Solar Energy
                </span>
                {/* Glowing text effect */}
                <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500 blur-2xl opacity-50 mix-blend-screen pointer-events-none">
                  With Solar Energy
                </span>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-2xl text-zinc-400/90 mb-14 max-w-3xl mx-auto leading-relaxed font-light mt-8"
            >
              Top-tier rooftop solar solutions across North-East India.
              Eliminate power bills and claim up to <span className="text-white font-medium border-b border-emerald-500/30 pb-0.5">₹1,30,000</span> in subsidies.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link href="/contact" className="w-full sm:w-auto relative group">
                <div className="absolute -inset-1 sm:-inset-1.5 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
                <button className="relative flex items-center justify-center h-14 md:h-16 px-10 text-base md:text-lg bg-white hover:bg-zinc-100 text-black rounded-full w-full sm:w-auto font-bold transition-all duration-300 shadow-[0_0_0_1px_rgba(255,255,255,1)_inset]">
                  Claim Your ₹1.3L Subsidy
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>
              </Link>

              <Link href="/products" className="w-full sm:w-auto group">
                <button className="flex items-center justify-center h-14 md:h-16 px-10 text-base md:text-lg rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white w-full sm:w-auto transition-all duration-300 font-medium backdrop-blur-md">
                  Explore Products
                </button>
              </Link>
            </motion.div>

            {/* Decorative Solar Dashboard Element */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-20 md:mt-28 relative max-w-5xl mx-auto w-full"
            >
              <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

              <div className="relative rounded-2xl md:rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-xl p-6 md:p-8 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex justify-center">

                {/* Internal Glow */}
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[60%] h-[200px] bg-blue-500/20 blur-[80px] rounded-full pointer-events-none mix-blend-screen"></div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full relative z-10">
                  {[
                    { label: "Government Subsidy", value: "Up to ₹1.3L", icon: <IndianRupee className="w-5 h-5 text-emerald-400 mb-2" /> },
                    { label: "ROI", value: "2-3 Years", icon: <Zap className="w-5 h-5 text-blue-400 mb-2" /> },
                    { label: "Panel Warranty", value: "25+ Years", icon: <ShieldCheck className="w-5 h-5 text-indigo-400 mb-2" /> },
                    { label: "Electricity Savings", value: "Up to 100%", icon: <Leaf className="w-5 h-5 text-green-400 mb-2" /> }
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/[0.1] hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] transition-all duration-500 cursor-default group relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                      {stat.icon}
                      <span className="text-zinc-400 text-[10px] md:text-xs font-medium uppercase tracking-widest mb-3 text-center group-hover:text-zinc-300 transition-colors">{stat.label}</span>
                      <span className="text-white font-bold text-xl md:text-3xl tracking-tight">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PM Surya Ghar Data Ribbon */}
        <section id="subsidy" className="py-8 border-y border-white/[0.05] bg-white/[0.01] backdrop-blur-3xl overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#030509] to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#030509] to-transparent z-10"></div>

          <div className="flex items-center gap-16 whitespace-nowrap min-w-full pl-6">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex items-center gap-16"
            >
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center gap-16 text-lg font-display">
                  <span className="flex items-center gap-3 text-zinc-400">
                    <ShieldCheck className="text-emerald-500 w-5 h-5" /> Authorized by APDCL
                  </span>
                  <span className="text-white font-medium tracking-wide">✨ Get up to ₹1,30,000 Cashback</span>
                  <span className="flex items-center gap-3 text-zinc-400">
                    <Sun className="text-blue-500 w-5 h-5" /> Home Rooftop Solar
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 font-bold tracking-wide">PM Surya Ghar Yojana</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PM Surya Ghar Detailed Scheme Section */}
        <section className="py-24 px-6 max-w-7xl mx-auto relative">
          <div className="bg-gradient-to-br from-blue-900/20 via-[#030509] to-emerald-900/10 border border-white/10 rounded-3xl p-8 md:p-16 overflow-hidden relative group shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset]">
            {/* Inner Solar Grid Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10 group-hover:bg-blue-500/20 transition-all duration-700"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10 group-hover:bg-emerald-500/20 transition-all duration-700"></div>

            <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs tracking-wider uppercase mb-6 font-display font-medium">
                  Government of India Initiative
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white leading-tight">
                  A Solar Revolution is Happening in India.
                </h2>
                <p className="text-lg text-zinc-400 font-light leading-relaxed mb-8">
                  The <strong className="text-white">PM Surya Ghar: Muft Bijli Yojana</strong> is a central government scheme aimed at providing free electricity to households. Say goodbye to heavy utility bills and switch to clean, green energy with massive financial support from the government.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 w-fit">
                    <Sun className="w-6 h-6 text-yellow-500" />
                    <div>
                      <p className="text-xs text-zinc-500 uppercase tracking-wider font-display font-semibold">Free Electricity</p>
                      <p className="font-bold text-white text-lg font-display">Up to 300 Units</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 w-fit">
                    <IndianRupee className="w-6 h-6 text-emerald-500" />
                    <div>
                      <p className="text-xs text-zinc-500 uppercase tracking-wider font-display font-semibold">Max Subsidy</p>
                      <p className="font-bold text-emerald-400 text-lg font-display">₹1,30,000</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-6">
                  <div className="flex -space-x-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-[#030509] object-cover bg-white pointer-events-none shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                      src="/Images/PM.jpg"
                      alt="PM Narendra Modi"
                      title="Hon'ble Prime Minister, Shri Narendra Modi"
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-[#030509] object-cover bg-white object-[center_top] pointer-events-none shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                      src="/Images/CM.jpg"
                      alt="CM Himanta Biswa Sarma"
                      title="Hon'ble Chief Minister of Assam, Dr. Himanta Biswa Sarma"
                    />
                  </div>
                  <div className="text-sm md:text-base text-zinc-400 font-medium tracking-wide border-l border-white/10 pl-5 py-2">
                    Empowering Assam with <br /> Clean, Affordable Energy.
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="bg-[#0a0a0a]/50 backdrop-blur-md rounded-2xl border border-white/10 p-6 md:p-8">
                  <h3 className="font-display text-2xl font-bold text-white mb-6">Scheme Benefits</h3>
                  <ul className="space-y-5">
                    <li className="flex gap-4">
                      <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Massive Cost Savings</h4>
                        <p className="text-zinc-500 text-sm font-light">Save ₹15,000 to ₹18,000 annually on electricity bills. Earn extra by selling surplus power back to the grid.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Direct Bank Transfer</h4>
                        <p className="text-zinc-500 text-sm font-light">Get your subsidy amount credited directly into your bank account securely within 30 days of installation.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Easy Finance Options</h4>
                        <p className="text-zinc-500 text-sm font-light">Collateral-free low-interest loans (around 7%) available through public sector banks to cover initial costs.</p>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <Link href="/contact" className="block w-full">
                      <Button className="w-full bg-white text-black hover:bg-zinc-200 font-bold font-display tracking-wide h-12 rounded-xl transition-all">
                        Check Your Eligibility Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem Grid */}
        <section id="products" className="py-32 px-6 max-w-7xl mx-auto relative relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs tracking-wider uppercase mb-6 font-display font-medium">
              Our Products
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-emerald-300">Build For You</span></h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
              From reducing your electricity bills to building strong structures, we provide reliable premium solutions for homes, farms, and businesses.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-12"
          >
            {products.map((product, idx) => (
              <motion.div key={idx} variants={itemVariants} className="w-full">
                <Link href="/products" className="block w-full">
                  <div className={`group relative border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-xl rounded-3xl overflow-hidden hover:border-blue-500/30 hover:bg-white/[0.05] transition-all duration-700 cursor-pointer shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset,0_20px_40px_rgba(0,0,0,0.4)] flex flex-col md:flex-row min-h-[400px] ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>

                    {/* Image Section */}
                    <div className={`md:w-5/12 relative overflow-hidden shrink-0 border-b md:border-b-0 border-white/10 ${idx % 2 === 1 ? 'md:border-l' : 'md:border-r'} bg-black/50 z-10`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none mix-blend-screen"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80 z-10 md:hidden"></div>
                      <div className={`absolute inset-0 bg-gradient-to-r ${idx % 2 === 1 ? 'from-[#0a0a0a]/80' : 'from-transparent to-[#0a0a0a]/80'} via-transparent opacity-60 z-10 hidden md:block`}></div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full min-h-[300px] object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="p-8 md:p-14 relative z-20 flex flex-col justify-center flex-grow">
                      {/* Hover Deep Space Sweep */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                      <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-500 shadow-inner inline-flex transform -rotate-3 group-hover:rotate-0">
                          {product.icon}
                        </div>
                        <h3 className="font-display font-bold text-3xl md:text-5xl mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all duration-500 tracking-tight">{product.title}</h3>
                        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-light mt-4 group-hover:text-zinc-300 transition-colors max-w-2xl">
                          {product.desc}
                        </p>
                        <div className="mt-10 flex items-center">
                          <span className="inline-flex items-center gap-2 text-white font-medium group-hover:text-blue-400 transition-colors bg-white/5 group-hover:bg-blue-500/10 px-6 py-3 rounded-full border border-white/10 group-hover:border-blue-500/30 text-sm tracking-wide shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]">
                            Explore Solution <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 flex justify-center w-full relative z-10"
          >
            <Link href="/products">
              <div className="relative group/btn cursor-pointer">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full blur opacity-0 group-hover/btn:opacity-40 transition duration-500"></div>
                <Button className="h-14 px-10 rounded-full bg-[#0a0a0a] hover:bg-white text-white hover:text-black border border-white/10 hover:border-transparent font-medium transition-all duration-300 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset]">
                  <span className="flex items-center font-display tracking-wide font-bold gap-3">
                    Explore All Products
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </div>
            </Link>
          </motion.div>
        </section>

        {/* Why Choose Us */}
        <section className="py-32 px-6 max-w-7xl mx-auto relative border-t border-white/[0.05]">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs tracking-wider uppercase mb-6 font-display font-medium">
                Our Guarantee
              </div>
              <h2 className="font-display text-5xl md:text-6xl font-black mb-6 tracking-tight text-white leading-tight">
                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-white to-blue-300">Choose Us</span>
              </h2>
              <p className="text-xl md:text-2xl text-zinc-400/90 font-light leading-relaxed mb-10">
                MTR: Your North-East partner for clean, reliable, and affordable solar energy solutions.
              </p>

              <div className="space-y-6 mt-12 relative z-10">
                {[
                  { icon: <Settings className="w-6 h-6" />, title: "Suitable Solutions", desc: "Our customized solar systems meet your specific energy needs and budget.", color: "blue" },
                  { icon: <Award className="w-6 h-6" />, title: "High-Quality Product", desc: "We source best products from reputable manufacturers, ensuring optimal performance and longevity.", color: "emerald" },
                  { icon: <ThumbsUp className="w-6 h-6" />, title: "Professional Installation", desc: "Save big with competitive rates and flexible financing options.", color: "indigo" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group p-4 -ml-4 rounded-2xl hover:bg-white/[0.02] border border-transparent hover:border-white/[0.05] transition-all duration-300">
                    <div className={`shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-${item.color}-400 group-hover:bg-${item.color}-500/20 group-hover:border-${item.color}-500/50 group-hover:shadow-[0_0_20px_rgba(var(--${item.color}-500),0.3)] transition-all duration-500 transform -rotate-3 group-hover:rotate-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 font-display">{item.title}</h3>
                      <p className="text-zinc-400 leading-relaxed font-light group-hover:text-zinc-300 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:w-1/2 w-full"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset,0_20px_60px_rgba(0,0,0,0.5)] group h-[400px] md:h-[600px] bg-black/50">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-emerald-500/20 mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#030509] via-transparent to-transparent z-10 pointer-events-none opacity-50"></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Images/why-choose-us.jpg"
                  alt="Futuristic Solar Installation"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Top FAQs Section */}
        <section className="py-32 px-6 max-w-4xl mx-auto relative border-t border-white/[0.05]">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs tracking-wider uppercase mb-6 font-display font-medium">
              Information Center
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white leading-tight">
              Common Questions
            </h2>
            <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Quick answers about subsidies, installations, and what you can expect when going solar.
            </p>
          </div>

          <div className="space-y-4 mb-16 relative z-10">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="flex justify-center relative z-10">
            <Link href="/faq">
              <Button size="lg" className="h-14 px-8 text-base bg-white border-white/10 hover:bg-zinc-200 text-black font-bold rounded-xl transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] group overflow-hidden">
                <span className="relative z-10 flex items-center gap-2 font-display tracking-wide">
                  <HelpCircle className="w-5 h-5 text-blue-600" />
                  Still Have Questions? View Full FAQ
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-1" />
                </span>
                <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:animate-[shimmer_1.5s_infinite]"></span>
              </Button>
            </Link>
          </div>
        </section>

        {/* Command Center Contact */}
        <section id="contact" className="py-32 px-6 relative border-t border-white/[0.05] bg-[#030509]">
          <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
            <div className="lg:w-5/12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs tracking-wider uppercase mb-6 font-display">
                Ready to Help
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Let's Talk Today.</h2>
              <p className="text-zinc-400 mb-12 text-lg font-light leading-relaxed">
                Want to save on electricity or need a quote for construction? Drop us a message or give us a call, and our friendly team will guide you step by step.
              </p>

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
            </div>

            <div className="lg:w-7/12 relative">
              <div className="absolute inset-0 bg-blue-500/5 blur-3xl -z-10 rounded-full"></div>
              <div className="bg-[#0a0a0a] backdrop-blur-2xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
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
        </section>

        <footer className="w-full border-t border-white/[0.05] bg-[#010204] pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-sm">
              <div className="lg:col-span-2">
                <Link href="/" className="inline-flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <Sun className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold tracking-tight text-xl leading-none text-white">MTR</h2>
                    <p className="text-[9px] font-medium tracking-[0.2em] text-blue-400/80 uppercase mt-1">Construction & Inputs</p>
                  </div>
                </Link>
                <p className="text-zinc-400 leading-relaxed font-light pr-10 max-w-sm mb-8">
                  Leading provider of high-efficiency rooftop solar, farming equipment, and heavy-duty steel structures across North-East India.
                </p>
                <div className="flex items-center gap-2 text-emerald-500/70 border border-emerald-500/20 px-3 py-1.5 rounded-full bg-emerald-500/5 font-display tracking-wide w-fit text-xs">
                  <ShieldCheck className="w-4 h-4" /> APDCL Certified Vendor
                </div>
              </div>

              <div>
                <h4 className="font-display text-white font-semibold tracking-wide mb-6">Company</h4>
                <ul className="space-y-4">
                  <li><Link href="/#why-choose-us" className="text-zinc-400 hover:text-white transition-colors font-light">Why Choose Us</Link></li>
                  <li><Link href="/contact" className="text-zinc-400 hover:text-white transition-colors font-light">Contact Us</Link></li>
                  <li><Link href="/#subsidy" className="text-zinc-400 hover:text-white transition-colors font-light">Subsidy Details</Link></li>
                  <li><Link href="/faq" className="text-zinc-400 hover:text-white transition-colors font-light">FAQ</Link></li>
                  <li><Link href="/privacy-policy" className="text-zinc-400 hover:text-white transition-colors font-light">Privacy Policy</Link></li>
                  <li><Link href="/terms-of-service" className="text-zinc-400 hover:text-white transition-colors font-light">Terms of Service</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-display text-white font-semibold tracking-wide mb-6">Our Products</h4>
                <ul className="space-y-4">
                  <li><Link href="/products" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">All Products <ArrowRight className="w-3 h-3 inline-block ml-1" /></Link></li>
                  <li><Link href="/products" className="text-zinc-400 hover:text-white transition-colors font-light">Home Solar Systems</Link></li>
                  <li><Link href="/products" className="text-zinc-400 hover:text-white transition-colors font-light">Commercial Solar</Link></li>
                  <li><Link href="/products" className="text-zinc-400 hover:text-white transition-colors font-light">Solar Water Pumps</Link></li>
                  <li><Link href="/products" className="text-zinc-400 hover:text-white transition-colors font-light">Green & Poly Houses</Link></li>
                  <li><Link href="/products" className="text-zinc-400 hover:text-white transition-colors font-light">Irrigation Pipes</Link></li>
                  <li><Link href="/products" className="text-zinc-400 hover:text-white transition-colors font-light">Construction Supplies</Link></li>
                  <li><Link href="/products" className="text-zinc-400 hover:text-white transition-colors font-light">Solar Batteries</Link></li>
                </ul>
              </div>
            </div>

            {/* Copyright Info - Moved Above BIGBOLD text */}
            <div className="text-center mb-8">
              <p className="font-display tracking-wide text-zinc-600 text-xs md:text-sm font-light">
                © 2026 MTR Construction & Inputs. All Rights Reserved.
              </p>
            </div>

            {/* BIG BOLD TYPOGRAPHY */}
            <div className="w-full border-t border-b border-white/10 py-10 md:py-16 mb-10 flex justify-center items-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/10 to-transparent pointer-events-none"></div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[8rem] font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-white/10 text-center leading-[0.9] select-none break-words">
                MTR CONSTRUCTION <br />
                AND INPUTS
              </h1>
            </div>

            {/* Author Badge Centered Below */}
            <div className="flex justify-center mt-10 pb-4">
              <a
                href="https://shibucodes.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-row items-center justify-center gap-4 transition-transform hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-[10px] overflow-hidden border border-white/20 shadow-[0_4px_15px_rgba(0,0,0,0.5)] transform rotate-6 group-hover:rotate-12 transition-all duration-300 relative group-hover:border-blue-500/50 shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/Images/pfp.png" alt="Subhasish" className="w-full h-full object-cover" />
                </div>
                <span className="font-display font-medium text-zinc-300 tracking-wide text-sm group-hover:text-white transition-colors">
                  Built with ❤️ by Subhasish
                </span>
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
