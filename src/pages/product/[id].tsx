import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import PageContainer from "@/components/PageContainer";
import ProductPage from "@/components/Product/ProductPage";
import { useAppSelector } from "@/hooks/useAppSelector";

const Product = () => {
  const { product } = useAppSelector((state: IReduxState) => state.product);

  return (
    <>
      <Head>
        <title>
          {product ? product.title : "Product Page"} | Next E-commerce
        </title>
        <meta
          name="description"
          content={`Next E-commerce | ${
            product ? product.title : "Product Page"
          }`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageContainer>
        <div>
          <Header />
          <ProductPage />
        </div>
        <Footer />
      </PageContainer>
    </>
  );
};

export default Product;
