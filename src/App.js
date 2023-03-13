import { Routes, Route } from "react-router-dom";
import About from "./compo/About";
import Navbar from "./compo/Navbar";
import ProductDetails from "./compo/ProductDetails";
import ProductsList from "./compo/ProductLisr";
import Slider from "./compo/Slider";

function App() {
  return (
    <div className="App">
      <Navbar />
    
        
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductsList />
            </>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="Product/:ProductId" element={<ProductDetails />} />
        </Routes>
    </div>
  );
}

export default App;
