"use client";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-zinc-950 text-white overflow-hidden">

            {/* Subtle Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 text-center px-6 max-w-5xl">

                {/* Animated Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium"
                >
                    v1.0 Ready for Deployment
                </motion.div>

                {/* Updated Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
                >
                    <span className="text-blue-500">GST Billing</span> and <br />
                    Inventory Management System.
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto"
                >
                    Automate tax compliance, generate real-time invoices, and track stock levels seamlessly. A complete backend solution built for scale.
                </motion.p>

                {/* Call to Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row justify-center gap-4"
                >
                    <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                        Explore Features
                    </button>
                    <button className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold rounded-full transition-all border border-zinc-800">
                        View Architecture
                    </button>
                </motion.div>

            </div>
        </section>
    );
}