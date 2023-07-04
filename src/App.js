import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import About from "./pages/About";
import Error from "./pages/Error";
import Item from "./components/Item/Item";
import Categorias from "./pages/Categorias";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home greeting="Bienvenidos a ZeroHero" />} />

            <Route path="productos" element={<Productos />} />

            <Route path="productos/:itemid" element={<Item />} />
            <Route path="about" element={<About />} />

            <Route path="categorias/:categoria" element={<Categorias />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;