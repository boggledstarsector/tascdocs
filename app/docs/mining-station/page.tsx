import Banner from "../../components/Banner";
import NavigationHeader from "../../components/NavigationHeader";
import MiningStation from "../../components/station_construction/abilities/MiningStation";
import ButtonFooter from "../../components/ButtonFooter";

export default function MiningStationPage() {
  return (
    <main>
      <Banner />
      <NavigationHeader />
      <MiningStation />
      <ButtonFooter />
    </main>
  );
}
