import Banner from "../../components/Banner";
import NavigationHeader from "../../components/NavigationHeader";
import AIMiningDrones from "../../components/terraforming/buildings/AIMiningDrones";
import ButtonFooter from "../../components/ButtonFooter";

export default function AIMiningDronesPage() {
  return (
    <main>
      <Banner />
      <NavigationHeader />
      <AIMiningDrones />
      <ButtonFooter />
    </main>
  );
}
