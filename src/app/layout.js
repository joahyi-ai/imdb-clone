import "./globals.css";

export const metadata = {
  title: "IMDb Clone",
  description: "This is the IMDb Clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
