import Image from "next/image";
import results from "../../Images/results1.png";
import { Text } from "../TextComponent/Text";

export const RevealCards = () => {
  return (
    <div className="flex justify-between gap-16 items-center 2xl:gap-32">
      <div className="max-w-[582] w-[50%] max-h-[368]">
        <Image src={results} alt="Results screen" />
      </div>
      <Text
        title="Reveal Cards to See the Results:"
        text="Once everyone has voted, reveal the cards to see the results. You can
          then discuss and adjust the estimation as needed."
        width="w-[50%]"
      />
    </div>
  );
};
