import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Carousel from "@/components/carousel";
import Footer from "@/components/footer";
import Mainpage from "@/components/mainpage";
import Mainpage2 from "@/components/mainpage2";

export default function Home() {
  return (
    <>
    {/* Navbar */}
      <Navbar/>
      {/* carousel */}
      
      {/* hero section */}
      <Hero/>
      {/* main page  */}
      <Mainpage/>
      <Mainpage2/>

      {/* footer */}
      <Footer/>
    </>
  );
}
