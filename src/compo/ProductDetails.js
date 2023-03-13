import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

function ProductDetails() {
  const api_url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({});
  //const params = useParams();
  //console.log("params:", params);
  useEffect(() => {
    fetch(`${api_url}/${2}`)
      .then((res) => {
        console.log(res);
        return res.json();
        
      })
      .then((product) => {
        setProduct(product);
        console.log("products from productDetails:", product);
      })
      .catch((error)=>{
        console.log(error);
      });
  }, []);
  return <Product product={product} showButton={false} />;
}

export default ProductDetails;
