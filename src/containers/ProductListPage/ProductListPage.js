import React from "react";
import Layout from "../../components/Layout/Layout";
import "./productListPage.css";
import ProductStore from "./ProductStore/ProductStore";

const ProductListPage = (props) => {
  const renderProduct = () => {
    console.log(props);
  };

  return (
    <Layout>
      <ProductStore {...props} />
      {renderProduct()}
    </Layout>
  );
};

export default ProductListPage;
