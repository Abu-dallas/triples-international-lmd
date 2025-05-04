"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import Image from "next/image";
import { useState, useEffect } from "react";

function About() {
  const [isOpen, setisOpen] = useState(false);
  const [Index, setIndex] = useState(0);

  const images = [
    "/triples/orange2.jpg",
    "/triples/apple1.jpg",
    "/triples/tomato2.jpg",
  ];

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => (prev === Index.length - 1 ? 0 : Index + 1));
    }, 3000);

    return () => clearInterval(slider);
  }, []);
  return (
    <div className="w-full bg-black">
      <NavBar setisOpen={setisOpen} />
      <SideBar isOpen={isOpen} setisOpen={setisOpen} />
      <div className="w-full lg:flex lg:items-center lg:justify-center lg:flex-col py-6 pt-20">
        <div className="w-full lg:w-[80%] max-md:px-4">
          <p className="text-3xl text-indigo-500 font-bold">
            About Tripples 'S' International limited
          </p>
          <p className="text-slate-200 mt-6 mb-6 lg:w-[75%]">
            Tripple 's' International Limited, established in 2018, is a leading
            fruits and vegetable export company based in Nigeria. Specializing
            in the sourcing, packaging, and export of fresh, high-quality
            produce, the company connects Nigerian farmers to global markets
            across Europe, the Middle East, and North America. With a commitment
            to international standards, Triples International ensures that all
            products are handled with care and meet stringent quality
            requirements. Backed by a dedicated team and strategic partnerships,
            the company has earned a reputation for reliability, sustainability,
            and promoting agricultural growth within local communities.
          </p>
        </div>
        <div className="w-full px-2 py-12 lg:w-[83%]">
          <p className="text-2xl px-2 text-slate-200 font-bold">
            We're committed to making food delivery easier than ever for you,
            across the globe.
          </p>
          <div className="flex w-full lg:items-center gap-6 lg:gap-4 lg:justify-center flex-col lg:flex-row mt-6">
            {cardItems.map((card, index) => (
              <div
                key={index}
                className="border-1  border-slate-800/80 p-4 rounded w-full flex flex-col gap-2"
              >
                <Image
                  src={card.icon}
                  alt="tripples international limited cards"
                  width={2000}
                  height={2000}
                  className="w-12 h-12 rounded-full"
                />
                <p className="text-md text-indigo-300 font-bold">
                  {card.title}
                </p>
                <p className="text-md text-slate-200">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center w-full flex-col  overflow-hidden">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="triples international limited images"
              width={2000}
              height={2000}
              className="w-full shrink-0 h-[350px]"
            />
          ))}
        </div>
        <div className="w-full flex flex-col gap-12 items-center justify-center mt-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="w-full flex flex-col items-center justify-center"
            >
              <p className="text-2xl text-slate-200 font-bold">{stat.title}</p>
              <p className="text-slate-300 text-sm text-center">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white mt-50">
        <Footer />
      </div>
    </div>
  );
}

export default About;

const cardItems = [
  {
    title: "Fast goods delivery",
    icon: "/globe.svg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nam, quod dolorem sunt temporibus in! Repellendus",
  },
  {
    title: "100+ Customers",
    icon: "/globe.svg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nam, quod dolorem sunt temporibus in! Repellendus",
  },
  {
    title: "50+ Products",
    icon: "/globe.svg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nam, quod dolorem sunt temporibus in! Repellendus",
  },
  {
    title: "Fast goods delivery",
    icon: "/globe.svg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nam, quod dolorem sunt temporibus in! Repellendus",
  },
];

const stats = [
  {
    title: "35+ Countries",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat excum exercitationem magnam aliquam itaque unde soluta deleniti              aperiam. Magnam quo maiores dolorum mollitia corrupti!",
  },
  {
    title: "35+ Countries",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat excum exercitationem magnam aliquam itaque unde soluta deleniti              aperiam. Magnam quo maiores dolorum mollitia corrupti!",
  },
  {
    title: "35+ Countries",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat excum exercitationem magnam aliquam itaque unde soluta deleniti              aperiam. Magnam quo maiores dolorum mollitia corrupti!",
  },
  {
    title: "1700+ Delivery",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat excum exercitationem magnam aliquam itaque unde soluta deleniti              aperiam. Magnam quo maiores dolorum mollitia corrupti!",
  },
];
