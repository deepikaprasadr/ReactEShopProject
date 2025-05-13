
//App.js
// import HomePage from "../../eshop/src/pages/HomePage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return ( <BrowserRouter>
    <Routes>
      {/* <Route path="/HomePage" element={<HomePage/>}/>  */}
      <Route path="/" element={<HomePage/>}/>
      <Route path="/products" element={<ProductPage/>}/>
      <Route path="/products/detail/:id" element={<ProductDetailPage/>}/>
      {/* <Route path="/About" element={<About/>}/> */}
      {/* To  read values from the url; we should use USEParams in productdetail component */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;

   {/* return a fragment and call the homepage */}
    {/* <HomePage/> */}
    {/* <ProductPage/> */}
  //   <>
  //   <ProductDetailPage/>
  //  </>