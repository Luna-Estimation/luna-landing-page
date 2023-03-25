import { Text } from "../TextComponent/Text";
import Image from "next/image";
import contact from "../../Images/contact_image.png";
import { ContactButton } from "../Button/Button";

export const ContactUs = () => {
  return (
    <div className="flex justify-between items-center gap-14">
      <div className="flex flex-col gap-12">
        <Text
          title="Get in Touch"
          text="We value your input and are always looking for ways to improve our tool. Whether you have a suggestion, a concern, or just want to say hello, we're here to listen."
          width="max-w-xl"
        />
        <ContactButton />
      </div>
      <div className="max-w-[50%] w-[30.625rem] h-[18.75rem]">
        <Image src={contact} alt="Contact us image" />
      </div>
    </div>
  );
};
