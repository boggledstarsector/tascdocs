import Banner from "../../../components/Banner";
import NavigationHeader from "../../../components/NavigationHeader";
import FarmlandImprovement from "../../../components/terraforming/projects/FarmlandImprovement";
import ButtonFooter from "../../../components/ButtonFooter";

export default function FarmlandImprovementPage() {
  return (
    <main>
      <Banner />
      <NavigationHeader />
      <FarmlandImprovement />
      <ButtonFooter />
    </main>
  );
}
