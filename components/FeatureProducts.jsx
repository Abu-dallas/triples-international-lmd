import Image from "next/image";
import React from "react";

function FeatureProducts() {
  return (
    <div className="w-full bg-black relative overflow-x-hidden">
      <div className="py-8 px-4 w-full h-[912px] max-sm:h-[560px] flex items-center justify-center bg-black mb-18 pt-32">
        <Image
          src="/triples/tamarin1.jpg"
          alt="tripples feature image"
          width={2000}
          height={2000}
          className="w-[50%] h-[380px] self-start rounded-lg max-sm:h-[250px]"
        />
        <Image
          src="/triples/tomato1.jpg"
          alt="tripples feature image"
          width={2000}
          height={2000}
          className="w-[50%] h-[380px] self-end rounded-lg max-sm:h-[250px]"
        />
      </div>
      <div className="w-full grid items-center grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1.5 bg-black px-0.5">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="tripples"
            width={2000}
            height={2000}
            className="w-full rounded-sm h-[300px]"
          />
        ))}
      </div>
    </div>
  );
}

export default FeatureProducts;

const images = [
  "/triples/banana1.jpg",
  "/triples/attarugu1.jpg",
  "/triples/watermelon1.jpg",
  "/triples/limon2.jpg",
  "/triples/sesame2.jpg",
  "/triples/apple1.jpg",
  "/triples/orange2.jpg",
  "/triples/sugercane2.jpg",
];
