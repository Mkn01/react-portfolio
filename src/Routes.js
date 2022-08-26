import { HashRouter, Route, Link, Routes } from "react-router-dom";
import AboutMePage from "../src/components/aboutMe";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<div>Home</div>} />
      <Route exact path="/about-me" element={<AboutMePage />} />
      <Route exact path="/portfolio" element={<div>Portfolio</div>} />
      <Route exact path="/contact-me" element={<div>Contact Me</div>} />
      <Route exact path="/resume" element={<div>Resume</div>} />
    </Routes>
  );
};
export default AppRouter;
