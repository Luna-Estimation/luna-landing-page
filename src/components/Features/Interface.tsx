import Image from "next/image";
import interfaceicon from "../../Images/interface-icon.png";
import { Text } from "../TextComponent/Text";

export const Interface = () => {
  return (
    <div className="flex flex-col gap-12 items-center max-md:gap-8">
      <Image
        src={interfaceicon}
        alt="Real-time feature icon"
        width={100}
        height={100}
      />
      <div className="max-w-[22rem] text-center flex flex-col gap-3.5 max-md:max-w-full">
        <Text
          title="Intuitive interface:"
          text="Lunas interface is designed to be easy to use, making it simple for
          team members to estimate project tasks."
          width="max-md:gap-4"
        />
      </div>
    </div>
  );
};
