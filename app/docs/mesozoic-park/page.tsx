import Banner from "../../components/Banner";
import NavigationHeader from "../../components/NavigationHeader";
import MesozoicPark from "../../components/terraforming/buildings/MesozoicPark";
import ButtonFooter from "../../components/ButtonFooter";

export default function MesozoicParkPage() {
  return (
    <main>
      <Banner />
      <NavigationHeader />
      <MesozoicPark />
      <ButtonFooter />
    </main>
  );
}
