import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
//1.cr a state 2.Useeffect for fn() call 3. fn() call for all prods 4.Display in grid
//5. Map fn iterate prods 5.a.ProdComp for each prod

const ProductList = () => {
  const [products, setProducts] = useState([]);


const fetchData = async () => {
  const response = await axios.get("https://api.escuelajs.co/api/v1/products");
  setProducts(response.data);
};

useEffect(() => {
  fetchData();
}, []);

return (
  <>
    <div className="container">
      <h2 className="text-center">Product List</h2>
      <div class="row">
        {products.map((product, index) => (
          <Product key={index} data={product} />
        ))}
      </div>
    </div>
  </>
);
};
export default ProductList;