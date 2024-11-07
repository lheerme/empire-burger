import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { Menu } from "./components/menu";
import { OpeningHours } from "./components/opening-hours";
import { SpecialOffers } from "./components/special-offers";
import { CustomerService } from "./components/customer-service";
import { OurRoyalty } from "./components/our-royalty";
import { InstagramPosts } from "./components/instagram-posts";
import { OurDeliveries } from "./components/our-deliveries";
import { RequestOrder } from "./components/request-order";
import { WhereIsOurCastle } from "./components/where-is-our-castle";
import { Footer } from "./components/footer";


const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="overflow-hidden">
        <HeroSection />
        <SpecialOffers />
        <OpeningHours />
        <Menu />
        <CustomerService />
        <div className='w-[calc(100%-48px)] md:w-full h-px bg-title-black-38/15 max-w-6xl mx-auto px-2 my-16 md:my-32' />
        <OurRoyalty />
        <InstagramPosts />
        <OurDeliveries />
        <RequestOrder />
        <WhereIsOurCastle />
      </main>
      <Footer />
    </QueryClientProvider>
  )
}
