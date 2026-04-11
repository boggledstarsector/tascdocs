import Banner from "../../components/Banner";
import NavigationHeader from "../../components/NavigationHeader";
import HarmonicDamper from "../../components/terraforming/buildings/HarmonicDamper";
import ButtonFooter from "../../components/ButtonFooter";

export default function HarmonicDamperPage() {
  return (
    <main>
      <Banner />
      <NavigationHeader />
      <HarmonicDamper />
      <ButtonFooter />
    </main>
  );
}
