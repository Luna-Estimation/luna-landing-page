import { Header } from "../Header/Header";
import { StartButton } from "../Button/Button";
import styles from "./Hero.module.css";
import Image, { ImageProps } from "next/image";
import screen1 from "../../Images/screen1.png";
import screen2 from "../../Images/screen2.png";
import screen3 from "../../Images/screen3n.png";
import screen4 from "../../Images/screen4.png";
import screen5 from "../../Images/screen5.png";
import screen6 from "../../Images/screen6.png";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { forwardRef } from "react";

const MotionImage = forwardRef<HTMLImageElement, ImageProps>(
  function ExoticImageWrapper(props, ref) {
    return <Image {...props} ref={ref} />;
  }
);

const MotionComponent = motion(MotionImage);

export const Hero = () => {
  let { scrollYProgress } = useScroll();
  let x1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  let x2 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  let x3 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="relative bg-[#F8F8FF] w-screen h-[90vh] min-h-[40rem]">
      <MotionComponent
        src={screen1}
        alt="1"
        className="absolute object-cover object-left-bottom"
        style={{ x: x1 }}
        fill
      />
      <MotionComponent
        src={screen2}
        alt="2"
        className="absolute object-cover object-left-bottom max-sm:-left-80"
        style={{ x: x1 }}
        fill
      />
      <MotionComponent
        src={screen3}
        alt="3"
        className="absolute object-cover object-left-bottom"
        style={{ x: x2 }}
        fill
      />
      <MotionComponent
        src={screen4}
        alt="4"
        className="absolute object-cover object-left-bottom"
        style={{ x: x2 }}
        fill
      />
      <MotionComponent
        src={screen5}
        alt="5"
        className="absolute object-cover object-left-bottom"
        style={{ x: x3 }}
        fill
      />
      <MotionComponent
        src={screen6}
        alt="6"
        className="absolute object-cover object-left-bottom"
        style={{ x: x1 }}
        fill
      />
      <div className="w-full h-full">
        <div className="max-w-[90vw] m-auto pt-10 flex flex-col gap-[20%] justify-start h-full">
          <Header />
          <div className="flex flex-col gap-10">
            <h1 className="font-sans text-5xl text-[#2C2B4F]">
              Agile Estimations
            </h1>
            <p className="font-body text-xl max-w-md text-[#2C2B4F]">
              Streamline your agile workflow with real-time estimations tool
            </p>
            <StartButton width="w-60 max-xs:w-full" height="h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};
