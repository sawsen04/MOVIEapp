import "./App.css";
import Home from "./pages/Home";
/*import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import FooterOne from "./components/FooterOne";
import FooterTwo from "./components/FooterTwo"*/
import { Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";
function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="Movies" element={<Movies />} />
        <Route path="/Movie/:id" element={<Movie />} />
      </Route>
    </Routes>
  );
}

export default App;
