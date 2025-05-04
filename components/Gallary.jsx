import Image from "next/image";
import Link from "next/link";
import React from "react";

function Gallary() {
  return (
    <div className="bg-black w-full lg:flex lg:items-center lg:justify-center lg:flex-col overflow-hidden px-1 pt-24 py-12">
      <p className="text-indigo-400 text-2xl font-semibold px-3 mb-4">
        We export variety of products to many countries in the world
      </p>
      <p className="text-slate-100 px-3 text-md mb-35 lg:w-[70%]">
        We export a wide range of fresh and high-quality agricultural products
        including fruits, vegetables, and other farm produce to numerous
        countries across the globe. Our export destinations span multiple
        continents, including Europe, Asia, the Middle East, and North America.
        By maintaining strict quality control and adhering to international food
        safety standards, we ensure that our products consistently meet the
        expectations of global buyers. Our efficient supply chain and strong
        logistics partnerships enable timely delivery and sustained freshness,
        making us a trusted name in the international agricultural export
        market.
      </p>
      <div className="grid grid-cols-1 gap-6 lg:w-[70%]  md:grid-cols-2 lg:grid-cols-3">
        {Products.map((product, index) => (
          <div key={index} className="max-md:w-full">
            <Image
              src={product.image}
              alt="tripples images"
              width={2000}
              height={2000}
              className="rounded-xl h-80 w-full"
            />
            <p className="text-slate-200 text-lg font-bold p-2">
              {product.title}
            </p>
            <p className="text-md text-slate-200 p-2">{product.desc}</p>
          </div>
        ))}
      </div>
      <p className="px-4 my-6">
        <Link
          href="/products"
          className="bg-slate-800 px-4 py-2 text-slate-200 hover:bg-slate-700 rounded-lg "
        >
          See all products
        </Link>
      </p>
    </div>
  );
}

export default Gallary;

const Products = [
  {
    title: "Pineapple",
    image: "/triples/pineapple1.jpg",
    desc: "The pineapple (Ananas comosus) is a tropical plant with edible multiple fruit consisting of coalesced berries. Raw pineapple is an excellent of source of manganese and vitamin C . They can be consumed fresh, cooked, juiced, and preserved, and are found in a wide array of cuisines. ",
  },
  {
    title: "Coconut",
    image: "/triples/coconut1.jpg",
    desc: "The coconut is known for its great versatility as seen in the many uses of its different parts and found throughout the tropics and subtopics. Coconuts are part of the daily diets of many people. The various parts of the coconut have a number of culinary uses. The seed provides oil for frying, cooking, and making margarine. The white, fleshy part of the seed, the coconut meat, is used fresh or dried in cooking, especially in confections and desserts such as macaroons. Desiccated coconut or coconut milk made from it is frequently added to curries and other savory dishes. Coconut flour has also been developed for use in baking, to combat malnutrition ",
  },
  {
    title: "Chili",
    image: "/triples/chili1.jpg",
    desc: "The chili pepper also called chilli pepper, is the fruit of plants from the genus Capsicum. Despite its hot taste, it contain large amounts of vitamin C and small amounts of carotene (provitamin A). It is an important part of many cuisines and curries especially in India. ",
  },
  {
    title: "Yam",
    image: "/triples/yam1.jpg",
    desc: "Yam, a tropical crop in the genus Dioscorea, has as many as 600 species out of which six are economically important staple species. Nigeria is by far the world’s largest producer of yams, accounting for over 70–76 percent of the world production. Yam is in the class of roots and tubers that is a staple of the Nigerian and West African diet. It is a good source of cartbohydrates and dietary fiber.",
  },
  {
    title: "Sugercane",
    image: "/triples/sugercane1.jpg",
    desc: "Sugarcane belongs to the grass family (Poaceae) and used for sugar production. It has stout jointed fibrous stalks that are rich in sugar, and measure two to six metres (6 to 19 feet) tall. It is grown extensively in Africa and is native to the warm temperate to tropical regions of South Asia,",
  },
  {
    title: "Peanut",
    image: "/triples/peanut2.jpg",
    desc: "Sugarcane belongs to the grass family (Poaceae) and used for sugar production. It has stout jointed fibrous stalks that are rich in sugar, and measure two to six metres (6 to 19 feet) tall. It is grown extensively in Africa and is native to the warm temperate to tropical regions of South Asia,",
  },
];
