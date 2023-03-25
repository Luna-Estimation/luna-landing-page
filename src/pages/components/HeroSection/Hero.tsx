import { Header } from "../Header/Header";
import { StartButton } from "../Button/Button";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <div className="bg-[#F8F8FF] w-screen h-[90vh]">
      <div
        className={`bg-no-repeat bg-bottom bg-cover w-full h-full ${styles.heroImage}`}
      >
        <div className="max-w-[90vw] m-auto pt-10 flex flex-col gap-[20%] justify-start h-full">
          <Header />
          <div className="flex flex-col gap-10">
            <h1 className="font-sans text-5xl text-[#2C2B4F]">
              Agile Estimations
            </h1>
            <p className="font-body text-xl max-w-md text-[#2C2B4F]">
              Streamline your agile workflow with real-time estimations tool
            </p>
            <StartButton width="w-60" height="h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};
