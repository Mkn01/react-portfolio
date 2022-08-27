import { HashRouter, Route, Link, Routes } from "react-router-dom";
import AboutMePage from "../src/components/aboutMe";
import ResumePage from "./components/resume";
import HomePage from "./components/home";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/about-me" element={<AboutMePage />} />
      <Route exact path="/full-stack-projects" element={<div>Portfolio</div>} />
      <Route exact path="/frontend-projects" element={<div>Portfolio</div>} />
      <Route exact path="/backend-projects" element={<div>Portfolio</div>} />
      <Route exact path="/contact-me" element={<div>Contact Me</div>} />
      <Route exact path="/resume" element={<ResumePage />} />
    </Routes>
  );
};
export default AppRouter;
