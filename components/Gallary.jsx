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
    desc: "The pineapple is a tropical fruit known for its sweet and tangy flavor, widely enjoyed both fresh and processed. Rich in vitamins, especially vitamin C, it is consumed as juice, canned fruit, and in fruit salads. The core and skin are used in some traditional remedies and in animal feed. Pineapple is also used in the preparation of jams, sauces, and desserts. Its enzymes are known for aiding digestion and tenderizing meat. It grows abundantly in tropical climates and is an important crop in Nigeria’s agricultural exports.",
  },
  {
    title: "Coconut",
    image: "/triples/coconut1.jpg",
    desc: "The coconut is known for its great versatility as seen in the many uses of its different parts and found throughout the tropics and subtropics. Coconuts are part of the daily diets of many people. The various parts of the coconut have a number of culinary uses. The seed provides oil for frying, cooking, and making margarine. The white, fleshy part of the seed, the coconut meat, is used fresh or dried in cooking, especially in confections and desserts such as macaroons. Desiccated coconut or coconut milk made from it is frequently added to curries and other savory dishes. Coconut flour has also been developed for use in baking, to combat malnutrition.",
  },
  {
    title: "Chili",
    image: "/triples/chili1.jpg",
    desc: "Chili peppers are widely used to add heat and flavor to a variety of dishes, both fresh and dried. They are rich in capsaicin, which has health benefits including pain relief and boosting metabolism. Chilies are used in sauces, soups, marinades, and spice blends. They can be processed into powder, flakes, or pastes. In Nigeria, chilies are an essential part of the cuisine and a significant export crop due to their demand in international markets.",
  },
  {
    title: "Yam",
    image: "/triples/yam1.jpg",
    desc: "Yam is a staple tuber crop widely cultivated and consumed across Nigeria and West Africa. It is known for its starchy texture and nutritional content, including complex carbohydrates, fiber, and minerals. Yams can be boiled, roasted, fried, or pounded into a popular dish called “pounded yam.” Dried yam flour is also processed for ease of export and preparation. Nigeria is the world’s largest producer of yam, making it a vital export commodity.",
  },
  {
    title: "Sugercane",
    image: "/triples/sugercane1.jpg",
    desc: "Sugarcane is a tall tropical plant grown widely for its sweet juice, which is processed into raw and refined sugar. In addition to table sugar, it is used to produce ethanol, molasses, and rum. The fiber (bagasse) left after juice extraction is used for paper and fuel. Sugarcane juice is also consumed fresh and is valued for its energizing and hydrating properties. Nigeria’s warm climate supports robust sugarcane growth, contributing to agro-industrial development and export.",
  },
  {
    title: "Peanut",
    image: "/triples/peanut2.jpg",
    desc: "Peanuts, also known as groundnuts, are legumes rich in protein, healthy fats, and essential nutrients. They are consumed raw, roasted, or processed into peanut butter, oil, and confectionery products. Peanuts are also used in sauces and stews in many African cuisines. Nigeria is one of Africa’s top producers of peanuts, which are increasingly exported for their nutritional and economic value.",
  },
];
