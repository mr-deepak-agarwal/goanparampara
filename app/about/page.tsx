import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OurStory from "@/components/OurStory";
import MakingOfFabric from "@/components/MakingOfFabric";
import Gallery from "@/components/Gallery";

export const metadata = { title: "Our Story | Goan Parampara" };

export default function AboutPage() {
  return (
    <main>
      <Header />
      <div className="pt-20">
        <OurStory />
        <MakingOfFabric />
        <Gallery />
      </div>
      <Footer />
    </main>
  );
}
