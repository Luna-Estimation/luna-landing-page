import { RealTime } from "./RealTime";
import { Interface } from "./Interface";
import { Custom } from "./Custom";

export const Features = () => {
  return (
    <div className="max-w-[95vw] m-auto flex px-14 pt-14 pb-20 max-md:px-8 max-md:pt-8 max-md:pb-10 gap-6 justify-between 2xl:justify-around bg-secondary rounded-3xl max-md:flex-col max-md:gap-16 max-md:max-w-[90vw]">
      <RealTime />
      <Interface />
      <Custom />
    </div>
  );
};
