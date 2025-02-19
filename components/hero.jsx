"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { DotPattern } from "./magicui/dot-pattern"
import { AuroraText } from "./magicui/aurora-text"
import { TypingAnimation } from "./magicui/typing-animation"
import { RainbowButton } from "./magicui/rainbow-button"
import { BackgroundLines } from "./ui/background-lines"
import { AnimatePresence, motion } from "framer-motion"
import { Plus } from "lucide-react"
import { MagicCard } from "./magicui/magic-card"
import { useTheme } from "next-themes"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"
import { WordRotate } from "./magicui/word-rotate"
import { FileText, PencilLine, GraduationCap, Grid } from "lucide-react"

const features = [
  {
    title: "Build Resume",
    description: "Create a professional resume with ATS-friendly formatting to stand out in job applications.",
    icon: FileText,
  },
  {
    title: "Cover Letter",
    description: "Craft compelling cover letters that highlight skills, achievements, and career goals effectively.",
    icon: PencilLine,
  },
  {
    title: "Interview Prep",
    description: "Prepare for job interviews with mock sessions, common questions, and expert tips.",
    icon: GraduationCap,
  },
  {
    title: "Industry Insights",
    description: "Stay updated with the latest industry trends, skills, and career opportunities.",
    icon: Grid,
  },
]

const testimonials = [
  {
    quote:
      "This AI Career Compass transformed the way I approached my job search. The personalized guidance helped me land my dream role in tech!",
    name: "Sarah Johnson",
    title: "Software Engineer at Google",
  },
  {
    quote:
      "The AI-driven resume and interview tips gave me the confidence to apply for roles I never thought I'd qualify for. Now, I'm a Data Scientist at Microsoft!",
    name: "James Patel",
    title: "Data Scientist at Microsoft",
  },
  {
    quote:
      "I was stuck in my career, but the AI Career Compass provided me with a structured roadmap to upskill and switch from marketing to UX design.",
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
      "AI Career Compass is like having a personal mentor available 24/7. The job recommendations and skill-building advice are spot on!",
    name: "Sophia Lee",
    title: "AI Researcher at OpenAI",
  },
]

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
]

const HeroSection = () => {
  const imageRef = useRef(null)
  const { theme } = useTheme()
  const [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {
    if (!imageRef.current) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const scrollThreshold = 100

      if (scrollPosition > scrollThreshold) {
        imageRef.current.classList.add("scrolled")
      } else {
        imageRef.current.classList.remove("scrolled")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>

     <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <div className="flex flex-col items-center justify-center min-h-screen w-full bg-black px-4 sm:px-6 lg:px-8">
  <DotPattern className={cn("[mask-image:radial-gradient(450px_circle_at_center,white,transparent)]")} />
  
  <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-center leading-tight">
    <AuroraText>AI Career Compass</AuroraText>
  </h1>
  
  <TypingAnimation className="text-base sm:text-lg md:text-xl lg:text-3xl mt-4 text-center leading-relaxed">
    Navigating Your Future with Precision and Insight
  </TypingAnimation>
  
  <Link href="/onboarding">
    <RainbowButton className="mt-6 sm:mt-10 md:mt-12 lg:mt-16">Get Started</RainbowButton>
  </Link>
</div>

</BackgroundLines>


<div className="py-16 sm:py-24 bg-white dark:bg-transparent dark:bg-grid-white/[0.05] mt-16 sm:mt-24 md:mt-32 lg:mt-40">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <WordRotate
      className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white text-center mb-12"
      words={["Features", "Features"]}
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <MagicCard
            key={index}
            className="flex flex-col items-center justify-center h-[280px] sm:h-[300px] p-6 text-center"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          >
            <div className="flex items-center justify-center mb-4">
              <Icon className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold mb-2">{feature.title}</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{feature.description}</p>
          </MagicCard>
        );
      })}
    </div>
  </div>
</div>


        {/* Testimonials */}
      <div className="py-16 sm:py-24 bg-white dark:bg-black dark:bg-grid-white/[0.05] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WordRotate
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-black dark:text-white text-center mb-12"
            words={["Testimonials", "Testimonials"]}
          />
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">FAQ</h1>
        <div className="space-y-4">
          {tabs.map((tab, index) => (
            <motion.div key={index} className="border rounded-lg overflow-hidden">
              <button
                className="p-4 w-full text-left font-semibold flex items-center justify-between focus:outline-none"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="pr-2">{tab.title}</span>
                <Plus className={`transition-transform ${activeIndex === index ? "rotate-45" : "rotate-0"}`} />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="p-4 text-sm sm:text-base">{tab.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default HeroSection

