// Local Imports
import AwardsSection from "@/components/awards";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/about";
import NavbarSection from "@/components/navbar";
import NewsSection from "@/components/news";
import PublicationSection from "@/components/publications";
import ScrollToggleButton from "@/components/scroll-btn";
import TalksSection from "@/components/talks";
import ServicesSection from "@/components/services";
import BooksSection from "@/components/books";

export default function HomePage() {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <PublicationSection />
      <NewsSection />
      <TalksSection />
      <AwardsSection />
      <ServicesSection />
      <BooksSection />
      <FooterSection />
      <ScrollToggleButton />
    </>
  );
}
