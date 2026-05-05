import Banner from "../../../components/Banner";
import NavigationHeader from "../../../components/NavigationHeader";
import TundraTypeChange from "../../../components/terraforming/projects/TundraTypeChange";
import ButtonFooter from "../../../components/ButtonFooter";

export default function TundraTypeChangePage() {
  return (
    <main>
      <Banner />
      <NavigationHeader />
      <TundraTypeChange />
      <ButtonFooter />
    </main>
  );
}
