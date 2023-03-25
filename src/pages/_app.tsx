import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Comfortaa } from "next/font/google";
import { Oxygen } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
});
const oxygen = Oxygen({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-oxygen",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${comfortaa.variable} font-sans ${oxygen.variable} font-sans`}
    >
      <Component {...pageProps} />
    </main>
  );
}
