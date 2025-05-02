"use client";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import AboutUs from "@/components/AboutUs";
import { useState, useEffect } from "react";
import StatsSection from "@/components/Stats";
import Gallary from "@/components/Gallary";
import Partners from "@/components/Partners";
import Link from "next/link";
import Table from "@/components/Table";
import FeatureProducts from "@/components/FeatureProducts";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";

export default function Home() {
  const [isScroll, setisScroll] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 50) {
        setisScroll(true);
      } else {
        setisScroll(false);
      }
    };
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <div className="w-full">
      {/* Navigation Bar */}
      <nav
        className={`${
          isScroll
            ? "sticky top-0 bg-black w-full z-10 p-6"
            : "sticky top-0 w-full z-10 p-4"
        }`}
      >
        <div className="flex items-center justify-between">
          <Image
            src="/globe.svg"
            alt="caliphate aviation logo"
            width={2000}
            height={2000}
            className="w-10 h-10"
          />
          <Image
            onClick={() => setisOpen(true)}
            src="/menu.png"
            alt="caliphate aviation logo"
            width={2000}
            height={2000}
            className="w-8 h-8"
          />
        </div>
      </nav>

      {/* Background Video Section */}
      <div className="relative w-full -mt-18">
        <video
          autoPlay
          loop
          muted
          playsInline
          width={100}
          className="w-full object-cover h-[95vh]"
        >
          <source src="/triples/bg.mp4" type="video/mp4" />
        </video>
        <div className="bg-black/65 w-full h-full absolute top-0">
          <div
            className={`${
              isOpen &&
              "w-full h-screen md:hidden fixed top-0 z-20 backdrop-blur-[2px] transition-all delay-300"
            }`}
          >
            <div
              className={` transition-all delay-300 text-slate-200 ${
                isOpen
                  ? "w-[80%] h-screen fixed z-20 top-0 right-0 bg-black md:hidden"
                  : "w-full h-screen fixed z-20 top-0 right-0 translate-x-full bg-slate-950 md:hidden"
              }`}
            >
              <p className="py-6 px-3">
                <button
                  onClick={() => setisOpen(false)}
                  type="button"
                  className="text-slate-200 flex items-center gap-1 font-semibold text-lg  rounded"
                >
                  <span className="text-lg font-bold">{"<"}</span>
                  Close
                </button>
              </p>
              <p className="text-center text-lg font-bold text-slate-200 pb-12 border-b-2">
                Tripple 's' International LTD
              </p>
              <div className="py-4 flex flex-col gap-3">
                <Link
                  href="/"
                  className="text-slate-200 text-lg font-semibold p-2 px-6 hover:bg-indigo-400 rounded"
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  className="text-slate-200 text-lg font-semibold p-2 px-6 hover:bg-indigo-400 rounded"
                >
                  Products
                </Link>
                <Link
                  href="/about"
                  className="text-slate-200 text-lg font-semibold p-2 px-6 hover:bg-indigo-400 rounded"
                >
                  About Us
                </Link>
                <Link
                  href="/contacts"
                  className="text-slate-200 text-lg font-semibold p-2 px-6 hover:bg-indigo-400 rounded"
                >
                  Contacts
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center px-4 h-full text-slate-50 w-full">
            <div className="pt-14">
              <div className="text-3xl text-slate-50 font-extrabold w-full">
                Welcome to the
                <br />
                <p className="text-indigo-400 min-w-[350px] pt-3">
                  <Typewriter
                    words={[
                      "Tripple 's' International Limited",
                      "Fruits and Vegetables Exportation company for worldwide",
                      "Best Quality Vegetables & Fruits",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={80}
                    delaySpeed={2000}
                  />
                </p>
              </div>

              <button
                type="button"
                className="text-center p-3 w-52 rounded-xl border-2 border-indigo-500 hover:bg-indigo-500 mt-20"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}

      <AboutUs />
      <StatsSection />
      <Partners />
      <Gallary />
      <Table />
      <FeatureProducts />
      <ContactInfo />
      <Footer />
    </div>
  );
}
