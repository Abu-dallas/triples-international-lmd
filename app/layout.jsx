import "./globals.css";

export const metadata = {
  title: "Tripple 'S' International Limited",
  description:
    "Tripple 'S' international limited is best known as world wide company transporting a variety of agricultural products to many countries all over the world. such as vegetables and fruits like sorrel, yam, mongo and much more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
