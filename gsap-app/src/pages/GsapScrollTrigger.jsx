import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Highlight from "../ui/Highlight";

gsap.registerPlugin(ScrollTrigger);

export default function GsapScrollTrigger() {
    const scrollRef = useRef();
    useGSAP(
        () => {
            const boxes = gsap.utils.toArray(scrollRef.current.children);

            boxes.forEach((box) => {
                gsap.to(box, {
                    x: 250 * (boxes.indexOf(box) + 5),
                    rotation: 360,
                    borderRadius: "100%",
                    scale: 1.5,
                    repeat: -1,
                    yoyo: true,
                    scrollTrigger: {
                        trigger: box,
                        start: "bottom bottom",
                        end: "top 100%",
                        // scrub: true,
                    },
                    ease: "power1.inOut",
                });
            });
        },
        { scope: scrollRef }
    );

    return (
        <div className="grid gap-6">
            <h2 className="text-xl font-extrabold">Gsap Scroll Trigger</h2>
            <div className="grid gap-2">
                <p>
                    <Highlight>Scroll Trigger</Highlight> allows us to create
                    animations that are triggered by the scroll position of the
                    page.
                </p>
                <p>
                    Docs for{" "}
                    <a
                        href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/?page=1#simple-example"
                        target="_blank"
                    >
                        <Highlight external>Scroll Trigger</Highlight>
                    </a>
                </p>
            </div>

            <div className="w-full h-[90vh] flex justify-center items-center outline outline-1">
                Scroll Down to see the animation
            </div>

            <div className="mt-20 w-full h-[200vh]" ref={scrollRef}>
                <div
                    className="scroll-box w-20 h-20 rounded-lg bg-pink-500"
                    id="scroll-pink"
                />
                <div
                    className="scroll-box w-20 h-20 rounded-lg bg-orange-500"
                    id="scroll-orange"
                />
            </div>
        </div>
    );
}
