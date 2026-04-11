import Banner from "../../components/Banner";
import NavigationHeader from "../../components/NavigationHeader";
import PlanetCracker from "../../components/terraforming/buildings/PlanetCracker";
import ButtonFooter from "../../components/ButtonFooter";

export default function PlanetCrackerPage() {
  return (
    <main>
      <Banner />
      <NavigationHeader />
      <PlanetCracker />
      <ButtonFooter />
    </main>
  );
}
