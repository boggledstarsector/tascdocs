import Banner from "../../components/Banner";
import NavigationHeader from "../../components/NavigationHeader";
import SkyCities from "../../components/terraforming/buildings/SkyCities";
import ButtonFooter from "../../components/ButtonFooter";

export default function SkyCitiesPage() {
  return (
    <main>
      <Banner />
      <NavigationHeader />
      <SkyCities />
      <ButtonFooter />
    </main>
  );
}
