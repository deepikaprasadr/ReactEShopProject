import React, { useState, useEffect } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
//1.cr a st-2.Axios get-3.UseEffect.4showData
//qn:we cud hv assigned to a var, but why we're using
//an arrowfn instead?
const ProductDetail = () => {

  // below is the usage of useParams.
  // const params=useParams();
  // console.log(params);
// we can also do the destructuring to read id from the url
const {id}=useParams();
//it automatically retreive the value. This helps to read id value from url dynamically
//  the ids are passed dynamically 
//UseParams will give a snapshot of the url

 //const id = 19;
  const [product, setProduct] = useState({});

  //to store data assign getfn to a var
  //Q:does '' or "" make a difference?
  const fetchData = async () => {
    var response =await axios.get("https://api.escuelajs.co/api/v1/products/"+id);
    // if await is not used. the productg will not load
    setProduct(response.data);
  };

  //  setProduct=>{
  //     product=response.data;
  //  }
  //call on pgload or on comp loading on pag
  //2params, a.callbck fn actual task to perform b.
  useEffect(() => {
    fetchData();
  }, [id]); //[] is dependency; when id is changed;callback fn is called again//update phase of the component
  //first phase=mounting phase; 2nd phase=update phase; 3rd unmounting phase

  return (
    <div className="container">
      <div className="row">
        {/*.row */}
        {/* .col-md-6 */}
        <div className="col-md-6">
          {/* img.img-fluid  is a css class */}
  
          <img src={product.images} alt="" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h5 class="card-title">{product.title}</h5>
          <p class="card-text">
            <span class="badge badge-secondary">{" "}{product?.category?.name}</span>    
            {/* obj?.arr?.name since I got err as this object had null values */}
          </p>
<p>{product?.description}</p>
          <h2>
            <span>&#8377;</span>
            {product.price}
          </h2>
          <a href="#" class="btn btn-primary">
            Add To Cart
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;