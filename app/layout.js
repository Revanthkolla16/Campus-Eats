import "../app/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContextProvider } from "../context/CartContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body style={{ fontFamily: 'Inter, Segoe UI, Helvetica Neue, Arial, sans-serif' }}>
        <CartContextProvider>
          <Navbar />
          {children}
          <Footer />
        </CartContextProvider>
      </body>
    </html>
  );
}
