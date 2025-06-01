import { Outfit as OutfitFont, Ovo as OvoFont } from "next/font/google";
import "./globals.css";

// Load fonts
const outfit = OutfitFont({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = OvoFont({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Portfolio - Mamun Hossain",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${ovo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
