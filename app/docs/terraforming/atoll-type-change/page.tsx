import Banner from "../../../components/Banner";
import NavigationHeader from "../../../components/NavigationHeader";
import AtollTypeChange from "../../../components/terraforming/projects/AtollTypeChange";
import ButtonFooter from "../../../components/ButtonFooter";

export default function AtollTypeChangePage() {
  return (
    <main>
      <Banner />
      <NavigationHeader />
      <AtollTypeChange />
      <ButtonFooter />
    </main>
  );
}
