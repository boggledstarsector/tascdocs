import Banner from "../../components/Banner";
import NavigationHeader from "../../components/NavigationHeader";
import Genelab from "../../components/terraforming/buildings/Genelab";
import ButtonFooter from "../../components/ButtonFooter";

export default function GenelabPage() {
  return (
    <main>
      <Banner />
      <NavigationHeader />
      <Genelab />
      <ButtonFooter />
    </main>
  );
}
