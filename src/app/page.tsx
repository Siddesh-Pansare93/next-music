import HeroSection from "@/components/HeroSection";
import FeaturedCards from "@/components/FeaturedCards"

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-center opacity-[0.8]" >Siddesh Music Academy </h1>  */}
      <div className="w-screen">
      <HeroSection/>
      <FeaturedCards/>
      </div>
      
    </main>
  )
}
