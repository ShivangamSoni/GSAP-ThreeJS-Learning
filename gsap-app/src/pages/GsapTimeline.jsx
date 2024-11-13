import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Highlight from "../ui/Highlight";
import Box from "../ui/Box";

export default function GsapTimeline() {
    const timeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 2,
        yoyo: true,
    });

    useGSAP(() => {
        timeline.to("#box", {
            x: 250,
            rotation: 360,
            borderRadius: "100%",
            duration: 2,
            ease: "back.inOut",
        });
        timeline.to("#box", {
            y: 250,
            scale: 1.5,
            rotation: 360,
            duration: 2,
            ease: "back.inOut",
        });
        timeline.to("#box", {
            x: 500,
            scale: 1,
            rotation: 720,
            borderRadius: "8px",
            duration: 2,
            ease: "back.inOut",
        });
    }, [timeline]);

    return (
        <div className="grid gap-6">
            <h2 className="text-xl font-extrabold">Gsap Timeline</h2>
            <div className="grid gap-2">
                <p>
                    <Highlight>gsap.timeline()</Highlight> method is used to
                    create a timeline instance that is used to manage multiple
                    animations including other timelines. It helps in sequencing
                    the animations to make a nice animation flow.
                </p>
                <p>
                    Docs for{" "}
                    <a
                        href="https://gsap.com/docs/v3/GSAP/gsap.timeline()"
                        target="_blank"
                    >
                        <Highlight external>gsap.timeline()</Highlight>
                    </a>
                </p>
            </div>

            <button
                onClick={() => {
                    if (timeline.paused()) {
                        timeline.play();
                    } else {
                        timeline.pause();
                    }
                }}
                className="bg-slate-200 text-indigo-600 place-self-start px-8 py-2 rounded-full hover:bg-indigo-600 hover:text-slate-200 focus-visible:bg-indigo-600 focus-visible:text-slate-200 transition-colors duration-150"
            >
                Play / Pause
            </button>
            <Box />
        </div>
    );
}
