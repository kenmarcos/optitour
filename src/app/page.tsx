import Hero from "./components/Hero";
import QuickSearch from "./components/QuickSearch";
import RecommendedTrips from "./components/RecommendedTrips";

export default function Home() {
  return (
    <main>
      <Hero />
      <QuickSearch />
      <RecommendedTrips />
    </main>
  );
}
