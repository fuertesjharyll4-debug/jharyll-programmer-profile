import "./globals.css";

export const metadata = {
  title: "Jharyll | Programmer Profile",
  description: "My student programmer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
