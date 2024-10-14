import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const pop = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Breast Cancer Detection",
  description: "Project by Kumar Priyanshu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pop.className}>
        <Link
          href="/"
          className="text-3xl border shadow-md p-6 flex justify-between items-center font-semibold"
        >
          Cancer Detection
        </Link>
        <div>{children}</div>
      </body>
    </html>
  );
}
