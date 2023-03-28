import Image from "next/image";
import voting from "../../Images/voting.png";
import { Text } from "../TextComponent/Text";

export const StartVoting = () => {
  return (
    <div className="flex justify-between gap-16 items-center 2xl:gap-32 max-md:flex-col">
      <Text
        title="Start the Voting Session and Choose Your Card:"
        text=" Once everyone is in the room, start the voting session by clicking the
          Start Voting button. Choose your card to vote, which will represent
          your estimation for the item being estimated."
        width="w-[50%] max-md:w-full"
      />
      <div className="max-w-[520] w-[50%] max-h-[368] max-md:w-full">
        <Image src={voting} alt="Voting screen" />
      </div>
    </div>
  );
};
