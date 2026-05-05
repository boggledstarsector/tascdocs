import Banner from "../../../components/Banner";
import NavigationHeader from "../../../components/NavigationHeader";
import WaterTypeChange from "../../../components/terraforming/projects/WaterTypeChange";
import ButtonFooter from "../../../components/ButtonFooter";

export default function WaterTypeChangePage() {
  return (
    <main>
      <Banner />
      <NavigationHeader />
      <WaterTypeChange />
      <ButtonFooter />
    </main>
  );
}
