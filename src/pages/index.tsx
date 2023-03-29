import Head from "next/head";
import { Hero } from "../components/HeroSection/Hero";
import { About } from "../components/AboutSection/AboutSection";
import { Features } from "../components/Features/Features";
import { ContactsSection } from "../components/Contacts/ContactsSection";
import { FAQ } from "../components/FAQSection/FAQ";
import { Footer } from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Luna - Agile Estimations</title>
        <meta
          name="description"
          content="Luna is a real-time collaboration tool designed to enhance your agile or scrum team's estimation ceremonies. Streamline your estimation process and stay on track."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lunagile.com" />
        <meta property="og:title" content="Luna - Egile Estimations" />
        <meta
          property="og:description"
          content="Luna is a real-time collaboration tool designed to enhance your agile or scrum team's estimation ceremonies. Streamline your estimation process and stay on track."
        />
        <meta
          property="og:image"
          content="https://lunagile.com/luna_link.png"
        ></meta>

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="lunagile.com" />
        <meta property="twitter:url" content="https://lunagile.com/" />
        <meta name="twitter:title" content="Luna - Agile Estimations" />
        <meta
          name="twitter:description"
          content="Luna is a real-time collaboration tool designed to enhance your agile or scrum team's estimation ceremonies. Streamline your estimation process and stay on track."
        />
        <meta
          name="twitter:image"
          content="https://lunagile.com/luna_link.png"
        ></meta>
      </Head>
      <main>
        <Hero />
        <div className="bg-dark w-screen h-fit pb-24">
          <About />
          <Features />
          <ContactsSection />
          <FAQ />
          <Footer />
        </div>
      </main>
    </>
  );
}
