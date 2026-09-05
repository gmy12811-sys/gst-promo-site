"use client";
import { motion } from "framer-motion";

export default function Features() {
    const features = [
        { title: "Real-time Dashboard", desc: "Monitor sales and stock metrics instantly." },
        { title: "Automated GST Calculation", desc: "No more manual tax math." },
        { title: "Instant Invoicing", desc: "Generate and export PDFs in seconds." },
    ];

    return (
        <section className="py-24 bg-zinc-950 text-white px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Core Capabilities</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 transition-colors cursor-pointer group"
                        >
                            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-zinc-400">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}