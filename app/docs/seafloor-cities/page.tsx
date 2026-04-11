import Banner from "../../components/Banner";
import NavigationHeader from "../../components/NavigationHeader";
import SeafloorCities from "../../components/terraforming/buildings/SeafloorCities";
import ButtonFooter from "../../components/ButtonFooter";

export default function SeafloorCitiesPage() {
  return (
    <main>
      <Banner />
      <NavigationHeader />
      <SeafloorCities />
      <ButtonFooter />
    </main>
  );
}
