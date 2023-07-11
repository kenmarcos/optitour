import Hero from "./components/Hero";
import QuickSearch from "./components/QuickSearch";
import RecommendedTrips from "./components/RecommendedTrips";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Hero />
      <QuickSearch />
      <RecommendedTrips />
    </main>
  );
}
