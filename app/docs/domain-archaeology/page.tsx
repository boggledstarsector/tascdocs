import Banner from "../../components/Banner";
import NavigationHeader from "../../components/NavigationHeader";
import DomainArchaeology from "../../components/terraforming/buildings/DomainArchaeology";
import ButtonFooter from "../../components/ButtonFooter";

export default function DomainArchaeologyPage() {
  return (
    <main>
      <Banner />
      <NavigationHeader />
      <DomainArchaeology />
      <ButtonFooter />
    </main>
  );
}
