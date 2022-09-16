import { HashRouter, Route, Link, Routes } from "react-router-dom";
import PortfolioPage from "./containers/aboutMe";
import ResumePage from "./containers/resume";
import HomePage from "./containers/home";

import ContactPage from "./containers/contact";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/portfolio" element={<PortfolioPage />} />

      <Route exact path="/contact" element={<ContactPage />} />
      <Route exact path="/resume" element={<ResumePage />} />
    </Routes>
  );
};
export default AppRouter;
