import { useGSAP } from "@gsap/react";
import Highlight from "../ui/Highlight";
import gsap from "gsap";

export default function GsapStagger() {
    useGSAP(() => {
        gsap.to(".stagger-box", {
            y: 250,
            rotation: 360,
            borderRadius: "100vw",
            repeat: -1,
            yoyo: true,
            // stagger: 0.5,
            stagger: {
                amount: 1.5,
                grid: [2, 1],
                axis: "y",
                ease: "circ.inOut",
                from: "random",
            },
        });

        gsap.to(".stagger-grid", {
            scale: 0.1,
            borderRadius: "100vw",
            repeat: -1,
            yoyo: true,
            stagger: {
                amount: 5,
                grid: [5, 5],
                from: "center",
            },
        });
    }, []);

    return (
        <div className="grid gap-6">
            <h2 className="text-xl font-extrabold">Gsap Stagger</h2>
            <div className="grid gap-2">
                <p>
                    <Highlight>Stagger()</Highlight> allows us to apply
                    animations with a staggered delay to a group of elements.
                </p>
                <p>
                    Docs for{" "}
                    <a
                        href="https://gsap.com/resources/getting-started/Staggers/"
                        target="_blank"
                    >
                        <Highlight external>Stagger</Highlight>
                    </a>
                </p>
            </div>

            <div className="flex gap-5">
                <div className="w-20 h-32 bg-indigo-100 rounded-lg stagger-box" />
                <div className="w-20 h-32 bg-indigo-200 rounded-lg stagger-box" />
                <div className="w-20 h-32 bg-indigo-300 rounded-lg stagger-box" />
                <div className="w-20 h-32 bg-indigo-400 rounded-lg stagger-box" />
                <div className="w-20 h-32 bg-indigo-500 rounded-lg stagger-box" />
                <div className="w-20 h-32 bg-indigo-600 rounded-lg stagger-box" />
                <div className="w-20 h-32 bg-indigo-700 rounded-lg stagger-box" />
                <div className="w-20 h-32 bg-indigo-800 rounded-lg stagger-box" />
                <div className="w-20 h-32 bg-indigo-900 rounded-lg stagger-box" />
            </div>

            <div className="grid grid-cols-5 grid-rows-5 gap-5 mt-64">
                <div className="w-20 h-20 bg-emerald-300 rounded-lg stagger-grid" />
                <div className="w-20 h-20 bg-emerald-300 rounded-lg stagger-grid" />
                <div className="w-20 h-20 bg-emerald-300 rounded-lg stagger-grid" />
                <div className="w-20 h-20 bg-emerald-300 rounded-lg stagger-grid" />
                <div className="w-20 h-20 bg-emerald-300 rounded-lg stagger-grid" />
                <div className="w-20 h-20 bg-emerald-300 rounded-lg stagger-grid" />
                <div className="w-20 h-20 bg-emerald-300 rounded-lg stagger-grid" />
                <div className="w-20 h-20 bg-emerald-300 rounded-lg stagger-grid" />
                <div className="w-20 h-20 bg-emerald-300 rounded-lg stagger-grid" />
                <div className="w-20 h-20 bg-emerald-300 rounded-lg stagger-grid" />
                <div className="w-20 h-20 bg-emerald-300 rounded-lg stagger-grid" />
                <div className="w-20 h-20 bg-emerald-300 rounded-lg stagger-grid" />
                <div className="w-20 h-20 bg-emerald-300 rounded-lg stagger-grid" />
                <div className="w-20 h-20 bg-emerald-300 rounded-lg stagger-grid" />
                <div className="w-20 h-20 bg-emerald-300 rounded-lg stagger-grid" />
                <div className="w-20 h-20 bg-emerald-300 rounded-lg stagger-grid" />
                <div className="w-20 h-20 bg-emerald-300 rounded-lg stagger-grid" />
                <div className="w-20 h-20 bg-emerald-300 rounded-lg stagger-grid" />
                <div className="w-20 h-20 bg-emerald-300 rounded-lg stagger-grid" />
                <div className="w-20 h-20 bg-emerald-300 rounded-lg stagger-grid" />
                <div className="w-20 h-20 bg-emerald-300 rounded-lg stagger-grid" />
                <div className="w-20 h-20 bg-emerald-300 rounded-lg stagger-grid" />
                <div className="w-20 h-20 bg-emerald-300 rounded-lg stagger-grid" />
                <div className="w-20 h-20 bg-emerald-300 rounded-lg stagger-grid" />
                <div className="w-20 h-20 bg-emerald-300 rounded-lg stagger-grid" />
            </div>
        </div>
    );
}
