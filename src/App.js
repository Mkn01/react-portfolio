import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/navigation";
import { HashRouter } from "react-router-dom";
import AppRouter from "../src/Routes";

function App() {
  return (
    <HashRouter>
      <NavigationBar link="About me"></NavigationBar>;
      
      <AppRouter />

    </HashRouter>
  );
}

export default App;
