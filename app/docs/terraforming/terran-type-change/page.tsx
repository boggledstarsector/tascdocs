import Banner from "../../../components/Banner";
import NavigationHeader from "../../../components/NavigationHeader";
import TerranTypeChange from "../../../components/terraforming/projects/TerranTypeChange";
import ButtonFooter from "../../../components/ButtonFooter";

export default function TerranTypeChangePage() {
  return (
    <main>
      <Banner />
      <NavigationHeader />
      <TerranTypeChange />
      <ButtonFooter />
    </main>
  );
}
