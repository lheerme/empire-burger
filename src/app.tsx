import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { OpeningHours } from "./components/opening-hours";
import { SpecialOffers } from "./components/special-offers";

export function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SpecialOffers />
        <OpeningHours />
      </main>
    </>
  )
}
