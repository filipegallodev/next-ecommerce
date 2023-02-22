import Head from "next/head";
import Header from "@/components/Header";
import ProductSection from "@/components/Product/ProductSection";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next E-commerce</title>
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
    </>
  );
}

const SectionContainer = styled.section`
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;
`;

const SubTitle = styled.h2`
  font-size: 1.75rem;
  margin: 1rem;
  font-weight: 500;
`;
