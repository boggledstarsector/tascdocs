import Banner from "../../components/Banner";
import NavigationHeader from "../../components/NavigationHeader";
import Hydroponics from "../../components/terraforming/buildings/Hydroponics";
import ButtonFooter from "../../components/ButtonFooter";

export default function HydroponicsPage() {
  return (
    <main>
      <Banner />
      <NavigationHeader />
      <Hydroponics />
      <ButtonFooter />
    </main>
  );
}
