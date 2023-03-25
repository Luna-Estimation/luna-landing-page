import { RealTime } from "./RealTime";
import { Interface } from "./Interface";
import { Custom } from "./Custom";

export const Features = () => {
  return (
    <div className="max-w-[95vw] m-auto flex px-14 pt-14 pb-20 gap-6 justify-between 2xl:justify-around bg-secondary rounded-3xl">
      <RealTime />
      <Interface />
      <Custom />
    </div>
  );
};
