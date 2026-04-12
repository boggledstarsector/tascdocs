import Banner from "../../components/Banner";
import NavigationHeader from "../../components/NavigationHeader";
import AstropolisStation from "../../components/station_construction/abilities/AstropolisStation";
import ButtonFooter from "../../components/ButtonFooter";

export default function AstropolisStationPage() {
  return (
    <main>
      <Banner />
      <NavigationHeader />
      <AstropolisStation />
      <ButtonFooter />
    </main>
  );
}
