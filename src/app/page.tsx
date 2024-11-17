"use client"
import HeroSection from "@/components/HeroSection";
import FeaturedCards from "@/components/FeaturedCards"
import { HeroParallaxDemo } from "@/components/Parallax";
import { useMediaQuery } from "react-responsive";
import { StickyScrollComponent } from "@/components/WhyToChooseUs";
import { TestimonialsCard } from "@/components/testimonialsCard";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import MeetOurTutors from "@/components/MeetOurTutors";

export default function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  return (
    <main className="min-h-screen w-full bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-center opacity-[0.8]" >Siddesh Music Academy </h1>  */}
      <div className="w-full">
         {isMobile ? <HeroSection /> :  <HeroParallaxDemo />}
        <FeaturedCards />
        <StickyScrollComponent/>
        <TestimonialsCard/>
        <UpcomingWebinars/>
        <MeetOurTutors/>
      </div>


    </main>
  )
}
