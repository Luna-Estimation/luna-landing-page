import Image from "next/image";
import custom from "../../Images/customize-icon.png";
import { Text } from "../TextComponent/Text";

export const Custom = () => {
  return (
    <div className="flex flex-col gap-12 items-center max-md:gap-8">
      <Image
        src={custom}
        alt="Real-time feature icon"
        width={100}
        height={100}
      />
      <div className="max-w-[22rem]  text-center flex flex-col gap-3.5 max-md:max-w-full">
        <Text
          title="Customizable:"
          text="Luna is fully customizable to fit your teams and organisations unique
          needs."
          width="max-md:gap-4"
        />
      </div>
    </div>
  );
};
