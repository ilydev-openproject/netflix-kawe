import "@/styles/globals.css";
import "@/styles/mystyle.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Layout from "./components/Layout";

import React from "react";

class MyApp extends App {
  componentDidCatch(error, errorInfo) {
    // Handle error globally here
    console.error("Error occurred:", error);
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#000" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
