import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Highlight from "../ui/Highlight";
import Box from "../ui/Box";

export default function GsapTo() {
    useGSAP(() => {
        gsap.to("#box", {
            x: 250,
            repeat: -1,
            yoyo: true,
            rotation: 360,
            duration: 2,
            ease: "elastic",
        });
    }, []);

    return (
        <div className="grid gap-6">
            <h2 className="text-xl font-extrabold">Gsap To</h2>
            <div className="grid gap-2">
                <p>
                    <Highlight>gsap.to()</Highlight> nethod is used to animate
                    from a current state to a new state
                </p>
                <p>
                    <Highlight>gsap.to()</Highlight> animates elements from
                    their current state to a new state whereas{" "}
                    <Highlight>gsap.from()</Highlight>
                    methods animates from the new state to their current/initial
                    state
                </p>
                <p>
                    Docs for{" "}
                    <a
                        href="https://gsap.com/docs/v3/GSAP/gsap.to()/"
                        target="_blank"
                    >
                        <Highlight external>gsap.to()</Highlight>
                    </a>
                </p>
            </div>

            <Box />
        </div>
    );
}
