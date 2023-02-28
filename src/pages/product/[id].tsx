import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { fetchOneProduct } from "@/store/reducers/product";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Product = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error } = useAppSelector(
    (state: IReduxState) => state.product
  );
  let { product } = useAppSelector((state: IReduxState) => state.product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id === null || id === undefined) return;
    dispatch(fetchOneProduct(String(id)));
  }, [dispatch, id]);

  if (!product) return <Header />;
  return (
    <>
      <Head>
        <title>{product.title} | Next E-commerce</title>
        <meta
          name="description"
          content={`Next E-commerce | ${product.title}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <button onClick={router.back}>Go back</button>
        {loading ? <Loading /> : <h2>Product {product.title} page.</h2>}
      </main>
      <Footer />
    </>
  );
};

export default Product;
