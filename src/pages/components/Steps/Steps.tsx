import { CreateRoom } from "./CreateRoom";
import { StartVoting } from "./StartVoting";
import { RevealCards } from "./RevealCards";

export const Steps = () => {
  return (
    <div className="flex flex-col gap-40">
      <CreateRoom />
      <StartVoting />
      <RevealCards />
    </div>
  );
};
