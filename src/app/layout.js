import "./globals.css";
import Header from "./components/Header";
import Providers from "./Providers";

export const metadata = {
  title: "IMDb Clone",
  description: "This is the IMDb Clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {" "}
          {/* Header */}
          <Header />
          {/* Navbar */}
          {/* SearchBox */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
