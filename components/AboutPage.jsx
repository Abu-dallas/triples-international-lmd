"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import Image from "next/image";
import { useState, useEffect } from "react";

function AboutPage() {
  const [isOpen, setisOpen] = useState(false);
  const [Index, setIndex] = useState(0);

  const images = [
    "/triples/localmarket8.jpg",
    "/triples/localmarket2.jpg",
    "/triples/localmarket3.jpg",
    "/triples/localmarket7.jpg",
    "/triples/localmarket5.jpg",
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
                className="border-1  border-slate-900 p-4 rounded-xl w-full flex flex-col gap-2"
              >
                <Image
                  src={card.icon}
                  alt="tripples international limited cards"
                  width={2000}
                  height={2000}
                  className="w-12 h-12 rounded-full"
                />
                <p className="text-md text-indigo-400 font-bold">
                  {card.title}
                </p>
                <p className="text-md text-slate-200">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="px-4 py-6 text-slate-200 font-bold text-2xl">
          We also deal with local market
        </p>
        <div className="flex items-center justify-center w-full flex-col gap-2 overflow-hidden lg:w-[50%]">
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
        <div className="px-2 w-full lg:w-[70%]">
          <div className="w-full flex flex-col gap-12 items-center justify-center mt-20 border border-slate-900 py-5 rounded-xl">
            {stats.map((stat, index) => (
              <div key={index} className="w-full flex flex-col justify-center">
                <p className="text-xl font-bold px-6 mb-1.5 text-indigo-400">
                  {stat.title}
                </p>
                <p className="text-slate-300 text-sm px-6">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white mt-50">
        <Footer />
      </div>
    </div>
  );
}

export default AboutPage;

const cardItems = [
  {
    title: "Fast & Reliable Delivery",
    icon: "/triples/delivery.png",
    text: "We ensure timely and secure shipping of all products through trusted logistics partners. Your goods arrive fresh, on time, and in excellent condition.",
  },
  {
    title: "Premium Quality Products",
    icon: "/triples/premium.png",
    text: "We export only top-grade, carefully selected agricultural products that meet international standards. Quality control is applied at every stage of the process.",
  },
  {
    title: "Transparent & Fair Practices",
    icon: "/triples/trans.png",
    text: "We work ethically with local farmers, ensuring fair prices and sustainable farming methods. Our business is built on honesty, trust, and long-term partnerships.",
  },
  {
    title: "Customer-Centric Service",
    icon: "/triples/customer.png",
    text: "Our team is responsive, professional, and committed to your satisfaction. We prioritize your needs with personalized support from inquiry to delivery.",
  },
];

const stats = [
  {
    title: "35+ Countries",
    text: "We proudly export to over 35 countries across Africa, Europe, Asia, and the Americas. Our global reach continues to grow as we connect international marketswith the richness and diversity of Nigerian agricultural excellence.",
  },
  {
    title: "100+ Customers",
    text: "Trusted by more than 100 satisfied customers from different parts of the world. We focus on building long-term business relationships based on integrity, consistency, and unmatched product quality.",
  },
  {
    title: "50+ Products",
    text: "With over 1,700 successful deliveries, we ensure every shipment is handled with care and delivered promptly. Our logistics partners are reliable, helping us maintain a track record of efficiency.",
  },
  {
    title: "1700+ Delivery",
    text: "We offer an extensive range of over 50 agricultural products, including spices, vegetables, tubers, and tropical fruits. Every product is handpicked and processed to meet international standards of freshness and quality.",
  },
];
