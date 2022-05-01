import FeaturedGame from "../components/organims/FeaturedGame";
import Footer from "../components/organims/Footer";
import MainBanner from "../components/organims/MainBaner";
import Navbar from "../components/organims/Navbar/navbar";
import Reached from "../components/organims/Reached";
import Story from "../components/organims/Story";
import TransactionStep from "../components/organims/TransactionStep";
import Head from 'next/head'
export default function Home() {
  return (
    <>
      <Head>
        <title>
          Ini buat basic SEO
        </title>
        <meta name="decription" content="Ini situs top-up termurah di indonesia"></meta>
        <meta property="og:title" content="StoraGG"></meta>
      </Head>
      <Navbar />
      <MainBanner />
      <TransactionStep/>
      <FeaturedGame/>
      <Reached/>
      <Story/>
     <Footer/>
    </>
  );
}
