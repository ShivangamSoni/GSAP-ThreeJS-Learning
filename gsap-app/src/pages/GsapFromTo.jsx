import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Highlight from "../ui/Highlight";
import Box from "../ui/Box";

export default function GsapFromTo() {
    useGSAP(() => {
        gsap.fromTo(
            "#box",
            // From Object
            {
                x: 750,
                rotation: 0,
                borderRadius: "0%",
            },
            // To Object
            {
                x: 250,
                rotation: 360,
                borderRadius: "100%",
                repeat: -1,
                yoyo: true,
                ease: "bounce.inOut",
                duration: 5,
            }
        );
    }, []);

    return (
        <div className="grid gap-6">
            <h2 className="text-xl font-extrabold">Gsap From To</h2>
            <div className="grid gap-2">
                <p>
                    <Highlight>gsap.fromTo()</Highlight> method is used to
                    animate from a new state to a new state
                </p>
                <p>
                    While <Highlight>gsap.from()</Highlight> animates from the
                    new state to their current/initial state &{" "}
                    <Highlight>gsap.to()</Highlight> animates from the initial
                    to a new state. <Highlight>gsap.fromTo()</Highlight> goes
                    from a new state to a new state completely disregarding the
                    initial/default state that was defined by the UI
                </p>
                <p>
                    Docs for{" "}
                    <a
                        href="https://gsap.com/docs/v3/GSAP/gsap.fromTo()"
                        target="_blank"
                    >
                        <Highlight external>gsap.fromTo()</Highlight>
                    </a>
                </p>
            </div>

            <Box />
        </div>
    );
}
