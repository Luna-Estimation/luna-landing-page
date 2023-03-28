import { StartButton } from "../Button/Button";

export const CTA = () => {
  return (
    <div className="flex flex-col justify-center items-center p-40 gap-12 max-md:px-0 max-md:py-40">
      <p className="max-w-xl font-body text-xl text-white text-center max-md:max-w-full">
        With Luna, you can streamline your agile estimation process and keep
        everyone on the same page.
      </p>
      <StartButton width="w-[22rem] max-xs:w-full" height="h-12" />
    </div>
  );
};
