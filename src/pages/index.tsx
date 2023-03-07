import Head from "next/head";
import Header from "@/components/Header";
import ProductSection from "@/components/Product/ProductSection";
import styled, { keyframes } from "styled-components";
import Footer from "@/components/Footer";
import PageContainer from "@/components/PageContainer";
import Image from "next/image";
import LeftPoster from "../../public/images/left-poster.webp";
import RightPoster from "../../public/images/right-poster.webp";

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
            <SectionContainer>
              <SubTitle>Best deals</SubTitle>
              <ProductSection />
            </SectionContainer>
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

const SectionContainer = styled.section`
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 32px auto;
  background-color: #e2edf5;
  padding-bottom: 2rem;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  @media (max-width: 1600px) {
    margin: 32px;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.75rem;
  margin: 2rem 1rem;
  font-weight: 500;
  &:before {
    content: "";
    margin-right: 0.5rem;
    width: 20px;
    height: 4px;
    padding: 2px;
    background-color: #f2bf24;
  }
`;
