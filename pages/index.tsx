import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { useEffect, useState } from "react";
import About from "@/components/About";
import "animate.css";
import Skills from "@/components/Skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isScroller, setIsScroller] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      if (window.scrollY >= 70) {
        setIsScroller(true);
      } else {
        setIsScroller(false);
      }
    });
  }, []);
  return (
    <div
      className={
        "bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0"
      }
    >
      <Head>
        <title>Wishma's portfolio</title>
      </Head>
      {/* header */}
      <section
        id="home"
        className={`snap-start ${
          !isScroller
            ? "pb-4 fixed bg-[rgb(36,36,36)]/[.95] top-0 left-0 right-5 z-40 shadow-fill-dropdown-hover"
            : "snap-start"
        }`}
      >
        <Header />
      </section>

      {/* hero */}
      <section id="hero" className={"snap-start"}>
        <Hero />
      </section>

      {/* about */}
      <section id="about" className={"snap-center"}>
        <About />
      </section>

      {/* skills */}
      <section id="skills" className={"snap-center"}>
        <Skills />
      </section>

      {/* footer */}
      <section id="contact" className={"snap-end"}>
        <Footer />
      </section>
    </div>
  );
}
