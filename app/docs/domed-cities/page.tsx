import Banner from "../../components/Banner";
import NavigationHeader from "../../components/NavigationHeader";
import DomedCities from "../../components/terraforming/buildings/DomedCities";
import ButtonFooter from "../../components/ButtonFooter";

export default function DomedCitiesPage() {
  return (
    <main>
      <Banner />
      <NavigationHeader />
      <DomedCities />
      <ButtonFooter />
    </main>
  );
}
