import Banner from "../../components/Banner";
import NavigationHeader from "../../components/NavigationHeader";
import AtmosphereProcessor from "../../components/terraforming/buildings/AtmosphereProcessor";
import ButtonFooter from "../../components/ButtonFooter";

export default function AtmosphereProcessorPage() {
  return (
    <main>
      <Banner />
      <NavigationHeader />
      <AtmosphereProcessor />
      <ButtonFooter />
    </main>
  );
}
