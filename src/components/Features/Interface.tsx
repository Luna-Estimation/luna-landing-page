import Image from "next/image";
import interfaceicon from "../../Images/interface-icon.png";
import { Text } from "../TextComponent/Text";

export const Interface = () => {
  return (
    <div className="flex flex-col gap-12 items-center">
      <Image
        src={interfaceicon}
        alt="Real-time feature icon"
        width={100}
        height={100}
      />
      <div className="max-w-[22rem] text-center flex flex-col gap-3.5">
        <Text
          title="Intuitive interface:"
          text="Lunas interface is designed to be easy to use, making it simple for
          team members to estimate project tasks."
        />
      </div>
    </div>
  );
};
