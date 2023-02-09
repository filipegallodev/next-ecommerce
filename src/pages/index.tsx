import Head from "next/head";
import Header from "@/components/Header";
import ProductCard from "@/components/Product/ProductCard";
import ProductSection from "@/components/Product/ProductSection";

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
        <section>
          <h2>Best deals</h2>
          <ProductSection />
        </section>
      </main>
    </>
  );
}
