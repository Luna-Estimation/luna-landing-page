import createRoom from "../../Images/createRoom.png";
import voting from "../../Images/voting.png";
import results from "../../Images/results1.png";
import { Step } from "./Step";

const stepsContent = [
  {
    image: createRoom,
    title: "Create a Room and Invite Teammates:",
    text: "Start by creating a new estimation room. Choose a voting system you prefer to use or create your own. Invite your teammates by sharing the unique room link. No need to create an account or install any software.",
  },
  {
    image: voting,
    title: "Start the Voting Session and Choose Your Card:",
    text: "Once everyone is in the room, start the voting session by clicking the Start Voting button. Choose your card to vote, which will represent your estimation for the item being estimated.",
    classNames: "flex-row-reverse",
  },
  {
    image: results,
    title: "Reveal Cards to See the Results:",
    text: "Once everyone has voted, reveal the cards to see the results. You can then discuss and adjust the estimation as needed.",
  },
];

export const Steps = () => {
  return (
    <div className="flex flex-col gap-40 pt-40">
      {stepsContent.map((step, index) => {
        return (
          <Step
            image={step.image}
            title={step.title}
            text={step.text}
            classNames={step.classNames}
            key={index}
          />
        );
      })}
    </div>
  );
};
