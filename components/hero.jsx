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
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { LineShadowText } from "./magicui/line-shadow-text";
import { WordRotate } from "./magicui/word-rotate";
import { FileText, PencilLine, GraduationCap, Grid } from "lucide-react";

const features = [
  {
    title: "Build Resume",
    description: "Create a professional resume with ATS-friendly formatting to stand out in job applications.",
    icon: FileText
  },
  {
    title: "Cover Letter",
    description: "Craft compelling cover letters that highlight skills, achievements, and career goals effectively.",
    icon: PencilLine
  },
  {
    title: "Interview Prep",
    description: "Prepare for job interviews with mock sessions, common questions, and expert tips.",
    icon: GraduationCap
  },
  {
    title: "Industry Insights",
    description: "Stay updated with the latest industry trends, skills, and career opportunities.",
    icon: Grid
  },
];


const testimonials = [
  {
    quote:
      "This AI Career Coach transformed the way I approached my job search. The personalized guidance helped me land my dream role in tech!",
    name: "Sarah Johnson",
    title: "Software Engineer at Google",
  },
  {
    quote:
      "The AI-driven resume and interview tips gave me the confidence to apply for roles I never thought I’d qualify for. Now, I’m a Data Scientist at Microsoft!",
    name: "James Patel",
    title: "Data Scientist at Microsoft",
  },
  {
    quote:
      "I was stuck in my career, but the AI Career Coach provided me with a structured roadmap to upskill and switch from marketing to UX design.",
    name: "Emily Carter",
    title: "UX Designer at Adobe",
  },
  {
    quote:
      "The mock interviews and AI feedback were game-changers. I secured a top-tier internship and feel prepared for my career ahead.",
    name: "Rahul Verma",
    title: "Intern at Amazon",
  },
  {
    quote:
      "AI Career Coach is like having a personal mentor available 24/7. The job recommendations and skill-building advice are spot on!",
    name: "Sophia Lee",
    title: "AI Researcher at OpenAI",
  },
];


const tabs = [
  {
    title: "How can AI help me choose the right career path?",
    description:
      "AI analyzes your skills, interests, and market trends to suggest career paths that best match your strengths and aspirations.",
  },
  {
    title: "What skills do I need to land a job in AI/Tech?",
    description:
      "Essential skills include programming (Python, Java), machine learning, data structures, algorithms, cloud computing, and problem-solving abilities.",
  },
  {
    title: "How do I build a strong resume for tech roles?",
    description:
      "Focus on projects, highlight technical skills, and quantify achievements. Use AI-powered resume analysis to optimize your resume for applicant tracking systems (ATS).",
  },
  {
    title: "How can I prepare for coding interviews?",
    description:
      "Practice data structures, algorithms, and system design. Use platforms like LeetCode and mock interviews with AI-driven feedback.",
  },
  {
    title: "What are the best ways to network in tech?",
    description:
      "Join LinkedIn, attend hackathons, contribute to open-source projects, and engage with tech communities like GDSC and GitHub.",
  },
  {
    title: "How do I transition from college to a full-time job?",
    description:
      "Gain internships, work on real-world projects, build a portfolio, and apply for entry-level roles that align with your skills and interests.",
  },
  {
    title: "How can I stay updated with industry trends?",
    description:
      "Follow tech blogs, enroll in online courses, attend webinars, and participate in tech meetups and AI research discussions.",
  },
];


const HeroSection = () => {
  const imageRef = useRef(null);
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (!imageRef.current) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageRef.current.classList.add("scrolled");
      } else {
        imageRef.current.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="flex min-h-screen w-full flex-col items-center justify-center  bg-black">
        <DotPattern className={cn("[mask-image:radial-gradient(450px_circle_at_center,white,transparent)]")} />
        <h1 className="text-6xl font-bold tracking-tighter md:text-8xl lg:text-9xl mt-[-100px]">
          <AuroraText>AI Career Compass</AuroraText>
        </h1>
        <TypingAnimation> Navigating Your Future with Precision and Insight </TypingAnimation>
        <Link href="/onboarding">
          <RainbowButton className="mt-[50px]">Get Started</RainbowButton>
        </Link>
      </div>

      <BackgroundLines />

      {/* Feature Section */}
      <div className="h-[40rem] mt-[-920px] rounded-md flex flex-col antialiased bg-white dark:bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <WordRotate className="text-6xl font-bold text-black dark:text-white" words={["Features", "Features"]} />
      </div>

      <div className="mt-[-150px] h-screen">
        <div className="flex mx-9 gap-7 lg:h-[250px] justify-center items-center">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <MagicCard
              key={index}
              className="cursor-pointer flex-col items-center justify-center h-[350px] w-[500px] text-center text-4xl p-6"
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              >
              <div className="flex items-center justify-center ">
                <Icon className="w-10 h-10 mb-3" />
              </div>
              <h2 className="font-bold mb-5">{feature.title}</h2>
              <p className="text-xl text-gray-300">{feature.description}</p>
              </MagicCard>
            );
          })}
        </div>
      </div>


      {/* Testimonials */}
      <div className="h-[40rem] mt-[-450px] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <WordRotate className="text-6xl font-bold text-black dark:text-white mb-7" words={["Testimonials", "Testimonials"]} />
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      </div>

      {/* FAQ Section */}
      <div className=" mx-auto pb-10 pt-2">
        <h1 className="uppercase text-center text-4xl font-bold pt-2 pb-4">FAQ</h1>
        <div className="h-fit border rounded-lg p-2 dark:bg-[#000000] bg-[#F2F2F2]">
          {tabs.map((tab, index) => (
            <motion.div key={index} className={`overflow-hidden ${index !== tabs.length - 1 ? "border-b" : ""}`}>
              <button
                className="p-3 px-2 w-full cursor-pointer sm:text-base text-xs items-center transition-all font-semibold dark:text-white text-black flex gap-2"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <Plus className={`transition-transform ease-in-out w-5 h-5 dark:text-gray-200 text-gray-600 ${activeIndex === index ? "rotate-45" : "rotate-0"}`} />
                {tab.title}
              </button>
              <AnimatePresence mode="sync">
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut", delay: 0.14 }}
                  >
                    <p className="dark:text-white text-black p-3 xl:text-base sm:text-sm text-xs pt-0 w-[90%]">{tab.description}</p>
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
