import Banner from "../../components/Banner";
import NavigationHeader from "../../components/NavigationHeader";
import SiphonStation from "../../components/station_construction/abilities/SiphonStation";
import ButtonFooter from "../../components/ButtonFooter";

export default function SiphonStationPage() {
  return (
    <main>
      <Banner />
      <NavigationHeader />
      <SiphonStation />
      <ButtonFooter />
    </main>
  );
}
