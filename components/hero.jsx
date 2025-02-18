"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DotPattern } from "./magicui/dot-pattern";
import { AuroraText } from "./magicui/aurora-text";
import { TypingAnimation } from "./magicui/typing-animation";
import { RainbowButton } from "./magicui/rainbow-button";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        />
        <h1 className="text-6xl font-bold tracking-tighter md:text-8xl lg:text-9xl mt-[-100px]">
          <AuroraText>AI Career Compass</AuroraText>
        </h1>
        <TypingAnimation>Navigating Your Future with Precision and Insight</TypingAnimation>;

        <Link href="/onboarding">
          <RainbowButton className="mt-[50px]">Get Unlimited Access</RainbowButton>
        </Link>
      </div>
    </>
  );
};

export default HeroSection;
