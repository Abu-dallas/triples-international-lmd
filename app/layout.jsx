import "./globals.css";

export const metadata = {
  title: "Caliphate Avation Service",
  description: "caliphate aviation services is your best food delivery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
