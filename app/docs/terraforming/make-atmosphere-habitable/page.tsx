import Banner from "../../../components/Banner";
import NavigationHeader from "../../../components/NavigationHeader";
import MakeAtmosphereHabitable from "../../../components/terraforming/projects/MakeAtmosphereHabitable";
import ButtonFooter from "../../../components/ButtonFooter";

export default function MakeAtmosphereHabitablePage() {
  return (
    <main>
      <Banner />
      <NavigationHeader />
      <MakeAtmosphereHabitable />
      <ButtonFooter />
    </main>
  );
}
