"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import HeadingTwo from "@/components/ui/heading-two";
import LottiePlayer from "@/components/ui/lottie-player";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { AnimationItem } from "lottie-web";
export const Footer: React.FC = () => {
    const lottieAnimRef = useRef<AnimationItem | null>(null);
    const lottieTriggerRef = useRef<ScrollTrigger | null>(null);
    const imageContainer = useRef<HTMLAnchorElement | null>(null);
    const handleLottieReady = (anim: AnimationItem) => {
        lottieAnimRef.current = anim;
        anim.goToAndStop(0, true);

        lottieTriggerRef.current?.kill();

        if (imageContainer.current) {
            lottieTriggerRef.current = ScrollTrigger.create({
                trigger: imageContainer.current,
                start: "top 80%",
                onEnter: () => anim.goToAndPlay(0, true),
                onLeaveBack: () => anim.goToAndStop(0, true),
            });
        }
    };
    return (
        <footer className="bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] ">
            {/* Copyright */}
            <div className="">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-6">
                    <p className="text-white text-center">
                        © 2025 All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
