import ProductsPage from "@/components/ProductsPage";

export const metadata = {
  title: "Our Products | Tripple 'S' International Limited",
  description:
    "We offer a variety of agricultural produce to the customers accross different continents which include Africa, America, Europe and Asia.",
};

function page() {
  return (
    <div>
      <ProductsPage />
    </div>
  );
}

export default page;
