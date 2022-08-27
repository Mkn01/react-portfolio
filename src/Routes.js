import { HashRouter, Route, Link, Routes } from "react-router-dom";
import AboutMePage from "../src/components/aboutMe";
import ResumePage from "./components/resume";
import HomePage from "./components/home";
import BackendProjectsPage from "./components/backend-projects";
import FrontendProjectsPage from "./components/frontend-projects";
import FullstackProjectsPage from "./components/full-stack-projects";
import ContactPage from "./components/contact";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/about-me" element={<AboutMePage />} />
      <Route
        exact
        path="/full-stack-projects"
        element={<FullstackProjectsPage />}
      />
      <Route
        exact
        path="/frontend-projects"
        element={<FrontendProjectsPage />}
      />
      <Route exact path="/backend-projects" element={<BackendProjectsPage />} />
      <Route exact path="/contact" element={<ContactPage />} />
      <Route exact path="/resume" element={<ResumePage />} />
    </Routes>
  );
};
export default AppRouter;
