import Banner from "./components/Banner";
import NavigationHeader from "./components/NavigationHeader";
import Sections from "./components/Sections";
import ButtonFooter from "./components/ButtonFooter";

export default function Home() {
  return (
    <main>
      <Banner />
      <NavigationHeader />
      <Sections />
      <ButtonFooter />
    </main>
  );
}
