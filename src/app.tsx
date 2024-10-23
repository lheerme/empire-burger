import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { OpeningHours } from "./components/opening-hours";
import { SpecialOffers } from "./components/special-offers";

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main>
        <HeroSection />
        <SpecialOffers />
        <OpeningHours />
      </main>
    </QueryClientProvider>
  )
}
