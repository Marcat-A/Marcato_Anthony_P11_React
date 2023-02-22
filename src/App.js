import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Logement from "./pages/Logement/Logement";
import NotFound from "./pages/NotFound/NotFound";
import CheckId from "./utils/CheckId";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<CheckId />}>
          <Route element={<Logement />} path="logements/:id" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
