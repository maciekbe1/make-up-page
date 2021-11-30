import Header from "@components/Header";
import Footer from "@components/Footer";
import Head from "next/head";

export default function Layout({ children, className }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="noodp" />
        <meta
          name="keyworld"
          content="Make up, Makijaż, Gdynia, Sopot, Gdańsk, Trójmiasto"
        />
        <meta property="og:site_name" content="Make up" key="ogsitename" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pl_PL" />
        {/* <meta
          name="google-site-verification"
          content="Kf4IUf_oTBSgATrEnejZ-PGm6sjFe1Hy4KJn4glevcE"
        /> */}
      </Head>
      <main>
        <Header />
        <div className={className}>{children}</div>
        <Footer />
      </main>
    </>
  );
}
