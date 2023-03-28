import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Comfortaa } from "next/font/google";
import { Oxygen } from "next/font/google";
import Script from "next/script";

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
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-L82VNYKVV8"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-L82VNYKVV8');`}
      </Script>
      <main
        className={`${comfortaa.variable} font-sans ${oxygen.variable} font-sans`}
      >
        <Component {...pageProps} />
      </main>
    </>
  );
}
