import Image from "next/image";
import realtime from "../../Images/real-time-icon.png";
import { Text } from "../TextComponent/Text";

export const RealTime = () => {
  return (
    <div className="flex flex-col gap-12 items-center max-md:gap-8">
      <Image
        src={realtime}
        alt="Real-time feature icon"
        width={100}
        height={100}
      />
      <div className="max-w-[22rem] text-center flex flex-col gap-3.5 max-md:max-w-full">
        <Text
          title="Real-time collaboration:"
          text="Luna allows team members to work together in real-time, ensuring that
          everyone is on the same page."
          width="max-md:gap-4"
        />
      </div>
    </div>
  );
};
