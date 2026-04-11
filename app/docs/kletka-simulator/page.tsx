import Banner from "../../components/Banner";
import NavigationHeader from "../../components/NavigationHeader";
import KletkaSimulator from "../../components/terraforming/buildings/KletkaSimulator";
import ButtonFooter from "../../components/ButtonFooter";

export default function KletkaSimulatorPage() {
  return (
    <main>
      <Banner />
      <NavigationHeader />
      <KletkaSimulator />
      <ButtonFooter />
    </main>
  );
}
