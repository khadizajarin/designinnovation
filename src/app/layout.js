import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/Pacifico-Regular.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});


export const metadata = {
  title: "Design Innovation Intership Task",
  description: "Design Innovation Intership Task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
