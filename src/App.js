import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from "./pages/Books";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";
import Blogs from "./pages/Blogs";
import AboutMe from "./pages/AboutMe";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="blogs" element={<Blogs />} />
        <Route path="projects" element={<Projects />} />
        <Route path="publications" element={<Publications />} />
        <Route path="books" element={<Books />} />
        <Route path="aboutme" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}
