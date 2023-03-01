import Head from "next/head";
import Header from "@/components/Header";
import ProductSection from "@/components/Product/ProductSection";
import styled from "styled-components";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next E-commerce | Best Deals</title>
        <meta name="description" content="Next E-commerce homepage!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <SectionContainer>
          <SubTitle>Best deals</SubTitle>
          <ProductSection />
        </SectionContainer>
      </main>
      <Footer />
    </>
  );
}

const SectionContainer = styled.section`
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 32px auto;
  background-color: #eee;
  padding-bottom: 2rem;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  @media (max-width: 1600px) {
    margin: 32px 24px;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.75rem;
  margin: 2rem 1rem;
  font-weight: 500;
`;
