import BackgroundDisplay from "@/components/common/backgroundDisplay";
import HeroSection from "@/components/home/hero-section";


export default function Home() {
  return (
   <>
   <BackgroundDisplay />
   <main className="relative z-11 text-white min-h-screen w-full">
    <HeroSection />
   </main>
   </>
  );
}
