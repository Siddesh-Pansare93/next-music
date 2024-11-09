import HeroSection from "@/components/HeroSection";
import FloatingCard from "../components/Floating_card"

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-center opacity-[0.8]" >Siddesh Music Academy </h1>  */}
      <HeroSection/>
      <FloatingCard/>
    </main>
  )
}
