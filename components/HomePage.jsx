"use client";
import { Typewriter } from "react-simple-typewriter";
import AboutUs from "@/components/AboutUs";
import { useState, useEffect } from "react";
import StatsSection from "@/components/Stats";
import Gallary from "@/components/Gallary";
import Partners from "@/components/Partners";
import Table from "@/components/Table";
import FeatureProducts from "@/components/FeatureProducts";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import Link from "next/link";

export default function HomePage() {
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

      <NavBar isScroll={isScroll} setisOpen={setisOpen} />
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
            <SideBar isOpen={isOpen} setisOpen={setisOpen} />
          </div>

          <div className="flex items-center justify-center px-4 h-full text-slate-50 w-full">
            <div className="pt-14">
              <div className="text-3xl text-slate-50 font-extrabold w-full">
                Tripples 'S' International limited
                <br />
                <p className="text-indigo-400 min-w-[350px] text-[1.5rem] pt-3">
                  <Typewriter
                    words={["Best Quality Vegetables & Fruits from Nigeria"]}
                    loop={1}
                    typeSpeed={90}
                  />
                </p>
              </div>

              <Link
                href="/contacts"
                type="button"
                className="text-center p-2 w-52 rounded-xl border-2 border-indigo-500 hover:bg-indigo-500 mt-20"
              >
                Contact Us
              </Link>
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
