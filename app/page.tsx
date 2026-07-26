import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LegacyStrip from "@/components/LegacyStrip";
import OurStory from "@/components/OurStory";
import MakingOfFabric from "@/components/MakingOfFabric";
import FeaturedCollection from "@/components/FeaturedCollection";
import ShopByCategory from "@/components/ShopByCategory";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <LegacyStrip />
      <OurStory />
      <MakingOfFabric />
      <FeaturedCollection />
      <ShopByCategory />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
