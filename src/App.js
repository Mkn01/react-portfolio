import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/navigation";
import Footer from "./components/footer";
import { HashRouter } from "react-router-dom";
import AppRouter from "../src/Routes";

function App() {
  return (
    <HashRouter>
      <NavigationBar link="About me"></NavigationBar>
      <AppRouter />

      <Footer></Footer>
    </HashRouter>
  );
}

export default App;
