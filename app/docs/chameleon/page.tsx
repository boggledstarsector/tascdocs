import Banner from "../../components/Banner";
import NavigationHeader from "../../components/NavigationHeader";
import Chameleon from "../../components/terraforming/buildings/Chameleon";
import ButtonFooter from "../../components/ButtonFooter";

export default function ChameleonPage() {
  return (
    <main>
      <Banner />
      <NavigationHeader />
      <Chameleon />
      <ButtonFooter />
    </main>
  );
}
