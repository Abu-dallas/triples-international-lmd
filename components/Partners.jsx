import Image from "next/image";
import React from "react";

function Partners() {
  return (
    <div className="w-full bg-black overflow-x-hidden">
      <div className="w-full">
        <div className="w-full flex items-center justify-center pt-6">
          <Image
            src="/triples/dots.png"
            alt="triples internation dots"
            width={2000}
            height={2000}
            className="w-72 h-96 animate-spin"
            style={{ animationDuration: "20s" }}
          />
        </div>
      </div>
      <div className="scroll-left w-full flex items-center gap-12 bg-black py-6">
        {countries.map((country, index) => (
          <Image
            key={index}
            src={country}
            width={2000}
            height={2000}
            alt="triple internatonal partners"
            className="h-12 w-14 rounded-md"
          />
        ))}
      </div>
    </div>
  );
}

export default Partners;

const countries = [
  "/triples/nigeria.jpg",
  "/triples/america.jpg",
  "/triples/brazil.jpg",
  "/triples/saudi.jpg",
  "/triples/cameroon.jpg",
  "/triples/itali.jpg",
  "/triples/england.jpg",
  "/triples/france.jpg",
  "/triples/southafrica.jpg",
  "/triples/spain.jpg",
  "/triples/algeria.jpg",
  "/triples/china.jpg",
  "/triples/senegal.jpg",
  "/triples/korea.jpg",
];
