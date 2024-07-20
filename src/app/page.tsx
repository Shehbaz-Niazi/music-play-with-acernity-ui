import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MovingCards from "@/components/MovingCards";
import UpcomingWbinars from "@/components/UpcomingWbinars";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      {/* <MovingCards/>S */}
      <UpcomingWbinars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
