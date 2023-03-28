import Image from "next/image";
import createRoom from "../../Images/createRoom.png";
import { Text } from "../TextComponent/Text";

export const CreateRoom = () => {
  return (
    <div className="flex justify-between gap-16 items-center pt-40 2xl:gap-32 max-md:flex-col-reverse">
      <div className="max-w-[582] w-[50%] max-h-[368] max-md:w-full">
        <Image src={createRoom} alt="Create room screen" />
      </div>
      <Text
        title="Create a Room and Invite Teammates:"
        text="Start by creating a new estimation room. Choose a voting system you
          prefer to use or create your own. Invite your teammates by sharing the
          unique room link. No need to create an account or install any
          software."
        width="w-[50%] max-md:w-full"
      />
    </div>
  );
};
