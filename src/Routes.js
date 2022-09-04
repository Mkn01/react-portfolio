import { HashRouter, Route, Link, Routes } from "react-router-dom";
import AboutMePage from "./containers/aboutMe";
import ResumePage from "./containers/resume";
import HomePage from "./containers/home";
import BackendProjectsPage from "./containers/backend-projects";
import ContactPage from "./containers/contact";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/about-me" element={<AboutMePage />} />

      <Route exact path="/backend-projects" element={<BackendProjectsPage />} />
      <Route exact path="/contact" element={<ContactPage />} />
      <Route exact path="/resume" element={<ResumePage />} />
    </Routes>
  );
};
export default AppRouter;
