import Banner from "../../components/Banner";
import NavigationHeader from "../../components/NavigationHeader";
import PlanetaryAgravField from "../../components/terraforming/buildings/PlanetaryAgravField";
import ButtonFooter from "../../components/ButtonFooter";

export default function PlanetaryAgravFieldPage() {
  return (
    <main>
      <Banner />
      <NavigationHeader />
      <PlanetaryAgravField />
      <ButtonFooter />
    </main>
  );
}
