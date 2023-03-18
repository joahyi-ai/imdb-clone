import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "IMDb Clone",
  description: "This is the IMDb Clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Header />

        {/* Navbar */}

        {/* SearchBox */}
        {children}
      </body>
    </html>
  );
}
