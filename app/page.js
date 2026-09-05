import Hero from "@/components/Hero";
import Features from "@/components/Features";

export default function Home() {
    return (
        <main className="bg-zinc-950 min-h-screen selection:bg-blue-500/30">
            <Hero />
            <Features />
        </main>
    );
}