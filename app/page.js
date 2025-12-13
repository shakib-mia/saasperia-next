import GettingStarted from "./components/GettingStarted/GettingStarted";
import Header from "./components/Header/Header";
import ManageProjects from "./components/ManageProjects/ManageProjects";
import Services from "./components/Services/Services";
import Stats from "./components/Stats/Stats";
import Testimonials from "./components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Services />
      <GettingStarted />
      <Stats />
      <ManageProjects />
      <Testimonials />
    </>
  );
}
