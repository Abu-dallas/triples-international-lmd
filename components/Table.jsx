import Image from "next/image";
import React from "react";

function Table() {
  return (
    <div className="p-6 w-full bg-black px-4">
      <p className="text-indigo-400 text-xl font- md:text-center">
        List of Exportable fruits and Vegetables from Nigeria.
      </p>
      <p className="text-slate-200 text-md mt-2 md:text-center">
        We offer a wide range of exportable vegitables and fruits to our trading
        partners around the world.
      </p>
      <div className="w-full flex items-center justify-center mt-10">
        <table className="w-full text-left md:w-[60%]">
          <thead>
            <tr>
              <th className="text-slate-200 text-xl font-bold py-3 max-sm:text-lg max-sm:font-semibold">
                S/NO
              </th>
              <th className="text-slate-200 text-xl font-bold py-3 pl-3 max-sm:text-lg max-sm:font-semibold">
                Names of Fruits & vegitables
              </th>
              <th className="text-slate-200 text-xl font-bold py-3   max-sm:text-lg max-sm:font-semibold">
                Image
              </th>
            </tr>
          </thead>
          <tbody>
            {listOfFruits.map((fruit, index) => (
              <tr key={index} className=" odd:bg-slate-600/20 ">
                <td className="text-slate-200 pl-3 rounded-l-lg">
                  {index + 1}
                </td>
                <td className="text-slate-200 pl-3 ">{fruit.title}</td>
                <td className="pb-2 pl-3 rounded-r-lg">
                  <Image
                    src={fruit.image}
                    alt="tripples fuits list"
                    width={2000}
                    height={2000}
                    className="h-10 w-10 rounded-full mt-2"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;

const listOfFruits = [
  {
    title: "Pineapple",
    image: "/triples/pineapple2.jpg",
  },
  {
    title: "Orange",
    image: "/triples/orange2.jpg",
  },
  {
    title: "Coconut",
    image: "/triples/coconut2.jpg",
  },
  {
    title: "Sugarcane",
    image: "/triples/sugercane2.jpg",
  },
  {
    title: "Chili",
    image: "/triples/chili2.jpg",
  },
  {
    title: "Yam",
    image: "/triples/yam2.jpg",
  },
  {
    title: "Sorrel",
    image: "/triples/sorrel2.jpg",
  },
  {
    title: "Ginger",
    image: "/triples/ginger2.jpg",
  },
  {
    title: "Garlic",
    image: "/triples/garlic2.jpg",
  },
  {
    title: "Onions",
    image: "/triples/onion2.jpg",
  },
  {
    title: "Pepper",
    image: "/triples/pepper2.jpg",
  },
  {
    title: "Sweet Potato",
    image: "/triples/pineapple2.jpg",
  },
  {
    title: "Peanuts",
    image: "/triples/peanut2.jpg",
  },
  {
    title: "Sesame",
    image: "/triples/sesame2.jpg",
  },
  {
    title: "Lime",
    image: "/triples/limon2.jpg",
  },
  {
    title: "Tamarind",
    image: "/triples/tamarin2.jpg",
  },
  {
    title: "Biobab",
    image: "/triples/biobab2.jpg",
  },
  {
    title: "Habanero Pepper",
    image: "/triples/attarugu2.jpg",
  },
  {
    title: "Tomatoes",
    image: "/triples/tomato2.jpg",
  },
  {
    title: "Watermelon",
    image: "/triples/watermelon2.jpg",
  },
];
