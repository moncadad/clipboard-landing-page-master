import "./App.scss";
import ClientRibbon from "./components/ClientRibbon/ClientRibbon";
import Convinience from "./components/Convinience/Convinience";
import Workflow from "./components/Workflow/Workflow";
import DownloadCOA from "./components/DownloadCOA/DownloadCOA";
import Functionality from "./components/Functionality/Functionality";
import Landing from "./components/Landing/Landing";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <main className="container__wrapper">
        {/* Wrapper ---- */}
        <Landing />
        <Functionality />
        <Convinience />
        <Workflow />
        <ClientRibbon />
        <DownloadCOA />
        {/* Wrapper ---- */}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
