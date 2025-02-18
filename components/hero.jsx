"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DotPattern } from "./magicui/dot-pattern";
import { AuroraText } from "./magicui/aurora-text";
import { TypingAnimation } from "./magicui/typing-animation";
import { RainbowButton } from "./magicui/rainbow-button";
import { BackgroundLines } from "./ui/background-lines";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { MagicCard } from "./magicui/magic-card";
import { useTheme } from "next-themes";

const tabs = [
  {
    title: "How do UI components improve UX?",
    description:
      "UI components can improve UX by providing familiar, consistent interactions that make it easy for users to navigate and interact with an application.",
    imageUrl:
      "https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format",
  },
  {
    title: "Common UI component design challenges?",
    description:
      "Some common challenges include maintaining consistency across different devices and screen sizes, ensuring compatibility with various browsers and assistive technologies, and balancing flexibility with ease of use.",
    imageUrl:
      "https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format",
  },
  {
    title: "Ensuring UI component responsiveness?",
    description:
      "Developers can ensure the responsiveness of UI components by using techniques such as fluid layouts, flexible grids, and media queries to adapt the components to different screen sizes and orientations.",
    imageUrl:
      "https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format",
  },
];

const HeroSection = () => {
  const imageRef = useRef(null);
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(null); // Define activeIndex state

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

  // Handle FAQ Clicks
  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the active index
  };

  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        />
        <h1 className="text-6xl font-bold tracking-tighter md:text-8xl lg:text-9xl mt-[-100px]">
          <AuroraText>AI Career Compass</AuroraText>
        </h1>
        <TypingAnimation>
          Navigating Your Future with Precision and Insight
        </TypingAnimation>

        <Link href="/onboarding">
          <RainbowButton className="mt-[50px]">Get Unlimited Access</RainbowButton>
        </Link>
      </div>

      <BackgroundLines />

      {/* Magic Card Section */}
      <div className="flex mt-[-700px] h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row justify-center items-center">
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          Magic
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          Card
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          Magic
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          Card
        </MagicCard>
      </div>

      {/* FAQ Section */}
      <div className=" mx-auto pb-10 pt-2">
        <h1 className="uppercase text-center text-4xl font-bold pt-2 pb-4">
          FAQ
        </h1>
        <div className="h-fit border rounded-lg p-2 dark:bg-[#000000] bg-[#F2F2F2]">
          {tabs.map((tab, index) => (
            <motion.div
              key={index}
              className={`overflow-hidden ${index !== tabs.length - 1 ? "border-b" : ""}`}
            >
              <button
                className="p-3 px-2 w-full cursor-pointer sm:text-base text-xs items-center transition-all font-semibold dark:text-white text-black flex gap-2"
                onClick={() => handleClick(index)}
              >
                <Plus
                  className={`transition-transform ease-in-out w-5 h-5 dark:text-gray-200 text-gray-600 ${
                    activeIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                />
                {tab.title}
              </button>
              <AnimatePresence mode="sync">
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.14,
                    }}
                  >
                    <p className="dark:text-white text-black p-3 xl:text-base sm:text-sm text-xs pt-0 w-[90%]">
                      {tab.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
