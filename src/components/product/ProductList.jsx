import React from "react";
 import ProductSearch from "../../components/product/ProductSearch"
import ProductListComponent from "./ProductListComponent";



const ProductList = () => {
    return (

    <div className="recipeCatAndList">
      <ProductSearch /> 

      <ProductListComponent />
    </div>
  );
};

export default ProductList;