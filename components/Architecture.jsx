"use client";
import { motion } from "framer-motion";

export default function Architecture() {
    const stack = [
        {
            category: "Frontend",
            tech: "Next.js, React & Tailwind CSS",
            desc: "Delivering a lightning-fast, responsive user interface with seamless page transitions."
        },
        {
            category: "Backend Engine",
            tech: "PHP & REST APIs",
            desc: "Handling complex GST calculations and secure inventory data processing."
        },
        {
            category: "Database Strategy",
            tech: "MySQL & Supabase",
            desc: "Relational database architecture designed for scaling vast product catalogs and invoice histories."
        },
        {
            category: "Real-time Events",
            tech: "Firebase WebSockets",
            desc: "Pushing live stock updates to the dashboard the moment a sale is processed."
        },
    ];

    return (
        <section className="py-24 bg-zinc-950 text-white px-6 border-t border-zinc-900">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">System Architecture</h2>
                    <p className="text-zinc-400">Built on a modern, enterprise-grade technology stack.</p>
                </motion.div>

                <div className="space-y-6">
                    {stack.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors"
                        >
                            <div className="md:w-1/3 mb-4 md:mb-0">
                                <span className="text-sm font-medium text-blue-500 uppercase tracking-wider">{item.category}</span>
                                <h3 className="text-xl font-bold mt-1">{item.tech}</h3>
                            </div>
                            <div className="md:w-2/3 md:pl-8 md:border-l md:border-zinc-800">
                                <p className="text-zinc-400">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}