import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Highlight from "../ui/Highlight";
import Box from "../ui/Box";

export default function GsapFrom() {
    useGSAP(() => {
        gsap.from("#box", {
            x: 250,
            repeat: -1,
            yoyo: true,
            rotation: 360,
            duration: 2,
            ease: "power1.inOut",
        });
    }, []);

    return (
        <div className="grid gap-6">
            <h2 className="text-xl font-extrabold">Gsap From</h2>
            <div className="grid gap-2">
                <p>
                    <Highlight>gsap.from()</Highlight> method is used to animate
                    from a new state to their current state
                </p>
                <p>
                    <Highlight>gsap.from()</Highlight> methods animates from the
                    new state to their current/initial state
                </p>
                <p>
                    Docs for{" "}
                    <a
                        href="https://gsap.com/docs/v3/GSAP/gsap.from()"
                        target="_blank"
                    >
                        <Highlight external>gsap.from()</Highlight>
                    </a>
                </p>
            </div>

            <Box />
        </div>
    );
}
