"use client";
import NavBar from "@/components/NavBar";
import { useState } from "react";
import SideBar from "@/components/SideBar";
import Image from "next/image";
import Footer from "@/components/Footer";

function Products() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="bg-black w-full">
      <NavBar setisOpen={setisOpen} />

      <SideBar isOpen={isOpen} setisOpen={setisOpen} />
      <div className="py-6 bg-black">
        <p className="text-3xl text-indigo-500 font-bold mt-12 px-3">
          What Tripple 'S' Exports
        </p>
        <p className="text-slate-200 lg:w-[70%] p-3 ">
          Tripple 'S' Exports is a proudly Nigerian company committed to
          supplying high-quality agricultural products to the global market. We
          specialize in the export of a wide range of farm produce including
          tropical fruits, vegetables, spices, and tubers that are cultivated in
          the rich, fertile soils of Nigeria. Our product range includes ginger,
          garlic, sesame seeds, peanuts, yams, sweet potatoes, sorrel (karkade),
          chili, habanero pepper, and more. These products are grown under
          natural conditions, harvested with care, and processed to meet
          international standards. With a focus on quality, consistency, and
          sustainability, we work closely with local farmers and cooperatives to
          ensure fair practices and premium output. Our mission is to showcase
          the richness of Nigerian agriculture to the world by delivering
          nutritious, fresh, and authentic products that meet the needs of
          consumers and industries across continents. At Tripple 'S' Exports, we
          believe in building long-term business relationships grounded in
          trust, excellence, and value.
        </p>
        <div className="grid grid-cols-1 lg:gap-3 gap-12 lg:space-y-25 px-1 md:grid-cols-2 lg:grid-cols-4 mt-20">
          {ProductsImages.map((product, index) => (
            <div key={index} className="max-md:w-full">
              <Image
                src={product.image}
                alt="tripples images"
                width={2000}
                height={2000}
                className="rounded-xl h-80 w-full"
              />
              <p className="text-lg font-bold mt-2 text-indigo-400 p-2">
                {product.title}
              </p>
              <p className="text-md text-slate-200 p-2">{product.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white w-full mt-50">
        <Footer />
      </div>
    </div>
  );
}

const ProductsImages = [
  {
    title: "Pineapple",
    image: "/triples/pineapple2.jpg",
    desc: "The pineapple is a tropical fruit known for its sweet and tangy flavor, widely enjoyed both fresh and processed. Rich in vitamins, especially vitamin C, it is consumed as juice, canned fruit, and in fruit salads. The core and skin are used in some traditional remedies and in animal feed. Pineapple is also used in the preparation of jams, sauces, and desserts. Its enzymes are known for aiding digestion and tenderizing meat. It grows abundantly in tropical climates and is an important crop in Nigeria’s agricultural exports.",
  },
  {
    title: "Orange",
    image: "/triples/orange2.jpg",
    desc: "Oranges are among the most popular fruits in the world, valued for their juicy segments and refreshing taste. Rich in vitamin C and antioxidants, they support immunity and skin health. Oranges are consumed fresh, as juice, or in marmalades and desserts. The peel is used to extract essential oils, flavorings, and in some natural remedies. Nigeria’s fertile soil allows for the cultivation of sweet and flavorful oranges, making them suitable for both local consumption and export.",
  },
  {
    title: "Surgarcane",
    image: "/triples/sugercane1.jpg",
    desc: "Sugarcane is a tall tropical plant grown widely for its sweet juice, which is processed into raw and refined sugar. In addition to table sugar, it is used to produce ethanol, molasses, and rum. The fiber (bagasse) left after juice extraction is used for paper and fuel. Sugarcane juice is also consumed fresh and is valued for its energizing and hydrating properties. Nigeria’s warm climate supports robust sugarcane growth, contributing to agro-industrial development and export.",
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
    title: "Surrel (karkade)",
    image: "/triples/sorrel1.jpg",
    desc: "Sorrel, also known as Karkade, is a flowering plant whose deep red calyces are used to make beverages, sauces, and herbal teas. It has a tart, cranberry-like flavor and is rich in vitamin C and antioxidants. Sorrel is often boiled and sweetened to produce refreshing drinks, especially during festive seasons. It can also be dried for preservation and export. Grown in various parts of Nigeria, it has both culinary and medicinal applications.",
  },
  {
    title: "Yam",
    image: "/triples/yam1.jpg",
    desc: "Yam is a staple tuber crop widely cultivated and consumed across Nigeria and West Africa. It is known for its starchy texture and nutritional content, including complex carbohydrates, fiber, and minerals. Yams can be boiled, roasted, fried, or pounded into a popular dish called “pounded yam.” Dried yam flour is also processed for ease of export and preparation. Nigeria is the world’s largest producer of yam, making it a vital export commodity.",
  },
  {
    title: "Ginger",
    image: "/triples/ginger1.jpg",
    desc: "Ginger is a root spice known for its pungent aroma and strong, spicy flavor. It is used in both sweet and savory dishes, as well as in teas and beverages. Ginger has long been valued for its medicinal properties, including anti-inflammatory and digestive benefits. It can be consumed fresh, dried, powdered, or as an oil or juice. Nigerian ginger is highly regarded globally for its high quality and strong potency.",
  },
  {
    title: "Garlic",
    image: "/triples/garlic1.jpg",
    desc: "Garlic is a bulbous plant used worldwide as a seasoning and for its health benefits. It has a distinctive flavor that enhances a variety of dishes, from soups to stir-fries. Garlic contains compounds like allicin, which have antibacterial and cardiovascular benefits. It is consumed fresh, dried, powdered, or in oil form. Nigeria produces large quantities of garlic, which is exported to meet increasing global demand.",
  },
  {
    title: "Onions",
    image: "/triples/onion1.jpg",
    desc: "Onions are one of the most essential ingredients in cooking, adding flavor and aroma to countless dishes. They can be used fresh, dried, fried, or powdered. Onions also have health benefits due to their antioxidants and sulfur-containing compounds. Nigeria is a leading producer of onions in West Africa, with varieties suitable for both local consumption and international export in fresh or processed forms.",
  },
  {
    title: "Peanut",
    image: "/triples/peanut1.jpg",
    desc: "Peanuts, also known as groundnuts, are legumes rich in protein, healthy fats, and essential nutrients. They are consumed raw, roasted, or processed into peanut butter, oil, and confectionery products. Peanuts are also used in sauces and stews in many African cuisines. Nigeria is one of Africa’s top producers of peanuts, which are increasingly exported for their nutritional and economic value.",
  },
  {
    title: "Pepper",
    image: "/triples/pepper2.jpg",
    desc: "Pepper, including bell and hot varieties, is a staple in Nigerian cooking, adding both flavor and color. It is used fresh, dried, or ground into powder for use in soups, sauces, and stews. Peppers are rich in vitamins A and C, and their antioxidants support immune health. Nigerian peppers are cultivated in large quantities and are exported due to their vibrant taste and quality.",
  },
  {
    title: "Sweet Potato",
    image: "/triples/dankali1.jpg",
    desc: "Sweet potatoes are root vegetables valued for their sweet flavor, nutritional benefits, and versatility. They are rich in beta-carotene, fiber, and vitamins, especially vitamin A. Sweet potatoes can be boiled, baked, roasted, or processed into flour and chips. They are a key food security crop and a growing export commodity from Nigeria due to their adaptability and long shelf life.",
  },
  {
    title: "Sesame",
    image: "/triples/sesame1.jpg",
    desc: "Sesame seeds are small, oil-rich seeds used in culinary and industrial applications. They are valued for their nutty flavor and are used in baking, cooking oil, tahini, and snacks. Sesame oil is high in unsaturated fats and antioxidants. Nigeria is a major exporter of sesame seeds, especially the white variety, which is in high demand in Asian and Middle Eastern markets.",
  },
  {
    title: "Lime",
    image: "/triples/limon1.jpg",
    desc: "Limes are citrus fruits known for their acidic juice and strong aroma. They are used to flavor foods, beverages, and desserts, as well as in traditional remedies and cleaning products. Lime juice is rich in vitamin C and has immune-boosting and preservative properties. Nigeria’s climate supports lime farming, and the fruit is exported both fresh and as juice concentrate.",
  },
  {
    title: "Tamarind",
    image: "/triples/tamarin2.jpg",
    desc: "Tamarind is a tropical fruit used for its tangy pulp in sauces, drinks, and sweets. It is also used as a natural preservative and in traditional medicine. Tamarind is rich in antioxidants, vitamins, and minerals. The fruit can be processed into paste or powder for easier storage and export. Tamarind grows well in Nigeria’s tropical climate and is gaining international popularity.",
  },
  {
    title: "Biobab",
    image: "/triples/biobab2.jpg",
    desc: "Baobab is a unique tree known for its fruit, often called “superfruit,” due to its high vitamin C, fiber, and antioxidant content. The pulp is used in drinks, smoothies, and health supplements, while the seeds are used for oil extraction. Baobab is also used in cosmetics and wellness products. Native to Africa, Nigeria’s baobab is valued globally for its nutritional and medicinal properties.",
  },
  {
    title: "Habanero Papper",
    image: "/triples/attarugu2.jpg",
    desc: "Habanero peppers are among the hottest chili peppers and are known for their fruity flavor and intense heat. They are widely used in spicy sauces, marinades, and seasoning blends. Habaneros are rich in vitamins and capsaicin, which has health and preservative benefits. Nigeria’s habanero production is growing due to increasing global demand, especially in North America and Europe.",
  },
  {
    title: "Tomato",
    image: "/triples/tomato2.jpg",
    desc: "Tomatoes are one of the most widely consumed vegetables in the world, used in sauces, soups, salads, and stews. They are rich in lycopene, vitamin C, and other antioxidants. Tomatoes can be consumed fresh, canned, or processed into paste or powder. Nigeria produces a wide range of tomato varieties suited for both fresh consumption and industrial processing for export.",
  },
  {
    title: "Watermelon",
    image: "/triples/watermelon2.jpg",
    desc: "Watermelon is a refreshing fruit known for its high water content and sweet taste. It is a good source of hydration and contains vitamins A and C as well as antioxidants. Watermelons are consumed fresh, juiced, or used in fruit salads and desserts. Nigeria’s favorable climate allows for year-round watermelon farming, making it an attractive product for export markets.",
  },
];

export default Products;
