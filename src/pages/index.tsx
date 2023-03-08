import Head from "next/head";
import Header from "@/components/Header";
import ProductContainer from "@/components/Product/ProductContainer";
import styled, { keyframes } from "styled-components";
import Footer from "@/components/Footer";
import PageContainer from "@/components/PageContainer";
import Image from "next/image";
import LeftPoster from "../../public/images/left-poster.webp";
import RightPoster from "../../public/images/right-poster.webp";
import ProductSection from "@/components/Product/ProductSection";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next E-commerce | Best Deals</title>
        <meta name="description" content="Next E-commerce homepage!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageContainer>
        <div>
          <Header />
          <main>
            <PosterContainer>
              <Image
                src={LeftPoster}
                alt="Next E-commerce homepage!"
                width={2000}
                height={2000}
              />
              <Image
                src={RightPoster}
                alt="Next E-commerce homepage!"
                width={2000}
                height={2000}
              />
            </PosterContainer>
            <ProductSection>
              <SectionTitle>Best deals</SectionTitle>
              <ProductContainer />
            </ProductSection>
          </main>
        </div>
        <Footer />
      </PageContainer>
    </>
  );
}

const fadeAnime = keyframes`
  from {
    transform: scale(0.85);
    opacity: 0;
  }
  to {
    transform: initial;
    opacity: 1;
  }
`;

const PosterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem auto;
  max-width: max-content;
  width: 100%;
  height: auto;
  background-color: #f6fcff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  & img {
    max-width: 40vw;
    height: auto;
    border-radius: 6px;
    animation: ${fadeAnime} 0.3s linear forwards;
  }
  @media (max-width: 1290px) {
    max-width: max-content;
    & img {
      max-width: 48vw;
    }
  }
  @media (max-width: 600px) {
    gap: 0.15rem;
  }
`;
