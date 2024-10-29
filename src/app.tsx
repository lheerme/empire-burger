import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { Menu } from "./components/menu";
import { OpeningHours } from "./components/opening-hours";
import { SpecialOffers } from "./components/special-offers";
import { CustomerService } from "./components/customer-service";
import { NossaRealeza } from "./components/nossa-realeza";
import { PublicacoesDoInstagram } from "./components/publicacoes-do-instagram";
import { NossasEntregas } from "./components/nossas-entregas";

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main>
        <HeroSection />
        <SpecialOffers />
        <OpeningHours />
        <Menu />
        <CustomerService />
        <div className='w-full h-px bg-title-black-38/15 max-w-6xl mx-auto px-2 my-32' />
        <NossaRealeza />
        <PublicacoesDoInstagram />
        <NossasEntregas />
      </main>
    </QueryClientProvider>
  )
}
