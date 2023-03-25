import { CTA } from "./CTASection";
import { ContactUs } from "./ContactUs";

export const ContactsSection = () => {
  return (
    <div className="m-auto max-w-[80vw] flex flex-col pb-40">
      <CTA />
      <ContactUs />
    </div>
  );
};
