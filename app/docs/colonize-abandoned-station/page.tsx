import Banner from "../../components/Banner";
import NavigationHeader from "../../components/NavigationHeader";
import ColonizeAbandonedStation from "../../components/station_construction/abilities/ColonizeAbandonedStation";
import ButtonFooter from "../../components/ButtonFooter";

export default function ColonizeAbandonedStationPage() {
  return (
    <main>
      <Banner />
      <NavigationHeader />
      <ColonizeAbandonedStation />
      <ButtonFooter />
    </main>
  );
}
