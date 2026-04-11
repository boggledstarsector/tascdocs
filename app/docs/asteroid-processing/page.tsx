import Banner from "../../components/Banner";
import NavigationHeader from "../../components/NavigationHeader";
import AsteroidProcessing from "../../components/terraforming/buildings/AsteroidProcessing";
import ButtonFooter from "../../components/ButtonFooter";

export default function AsteroidProcessingPage() {
  return (
    <main>
      <Banner />
      <NavigationHeader />
      <AsteroidProcessing />
      <ButtonFooter />
    </main>
  );
}
