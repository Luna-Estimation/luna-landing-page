import Image from "next/image";
import custom from "../../Images/customize-icon.png";
import { Text } from "../TextComponent/Text";

export const Custom = () => {
  return (
    <div className="flex flex-col gap-12 items-center">
      <Image
        src={custom}
        alt="Real-time feature icon"
        width={100}
        height={100}
      />
      <div className="max-w-[22rem]  text-center flex flex-col gap-3.5">
        <Text
          title="Customizable:"
          text="Luna is fully customizable to fit your teams and organisations unique
          needs."
        />
      </div>
    </div>
  );
};
