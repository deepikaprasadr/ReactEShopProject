//categorylist/index.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Category from "./Category";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/categories"
    );
    // get data//axios returns response object, were we hav prp called data;
    //were we can accept resp from api; tat data we can update in the state;
    setCategories(response.data);
  };

  useEffect(() => {
    fetchData()
  }, [])
//   //to  call in the pgload ;use useeffect with a call back fn with fetchdata [] resp for maintaining lifecyc
//   //comp has 3 states mount update unmount. useEffect single hook to call all three stages.

  return (
    <div className="container">    
      <h2 className="text-center">Category List</h2>
      <div class="row">
        {categories.map((category, index) => (
          <Category key={index} data={category} />
        ))}
      </div>
    </div>
  );

};

export default CategoryList;
