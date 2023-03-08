import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageContainer from "@/components/PageContainer";
import ProductSection from "@/components/Product/ProductSection";
import SectionTitle from "@/components/SectionTitle";
import ProductFavoriteContainer from "@/components/Product/ProductFavoriteContainer";

const Favorites = () => {
  return (
    <>
      <Head>
        <title>Next E-commerce | Favorites</title>
        <meta
          name="description"
          content="Next E-commerce | My favorites page."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageContainer>
        <div>
          <Header />
          <main>
            <ProductSection>
              <SectionTitle>My favorites</SectionTitle>
              <ProductFavoriteContainer />
            </ProductSection>
          </main>
        </div>
        <Footer />
      </PageContainer>
    </>
  );
};

export default Favorites;
