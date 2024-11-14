import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/all";

import Highlight from "../ui/Highlight";

gsap.registerPlugin(TextPlugin);

export default function GsapText() {
    useGSAP(() => {
        gsap.to("#text", {
            ease: "power1.inOut",
            opacity: 1,
            y: 0,
        });

        gsap.fromTo(
            ".para",
            {
                opacity: 0,
                y: 20,
            },
            {
                opacity: 1,
                y: 0,
                delay: 1,
                stagger: 0.5,
            }
        );
    }, []);

    return (
        <div className="grid gap-6">
            <h2
                id="text"
                className="text-xl font-extrabold opacity-0 translate-y-10"
            >
                Gsap Text
            </h2>
            <div className="grid gap-2">
                <p className="para">
                    <Highlight>Text</Highlight> Plugin allows us to animate text
                    giving access to effects like fade in, slide in, etc.
                </p>
                <p className="para">
                    Docs for{" "}
                    <a
                        href="https://gsap.com/docs/v3/Plugins/TextPlugin"
                        target="_blank"
                    >
                        <Highlight external>Text</Highlight>
                    </a>
                </p>
            </div>
        </div>
    );
}
