import Head from "next/head";
import Header from "@/components/Header";
import ProductCard from "@/components/Product/ProductCard";

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
      <main
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "32px",
          padding: "16px",
        }}
      >
        <ProductCard />
        <ProductCard />
      </main>
    </>
  );
}
