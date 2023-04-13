import Image, { StaticImageData } from "next/image";
import { Text } from "../TextComponent/Text";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5,
      ease: "easeInOut",
      duration: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.2,
    },
  },
};

type StepProps = {
  image: StaticImageData;
  title: string;
  text: string;
  classNames?: string;
};

export const Step = (props: StepProps) => {
  const { image, title, text, classNames } = props;
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`flex ${classNames} justify-between gap-16 items-center 2xl:gap-32 max-md:flex-col-reverse`}
    >
      <motion.div
        variants={item}
        className="max-w-[582] w-[50%] max-h-[368] max-md:w-full"
      >
        <Image src={image} alt={title} />
      </motion.div>
      <motion.div variants={item} className="w-[50%] max-md:w-full">
        <Text title={title} text={text} width="w-full max-md:w-full" />
      </motion.div>
    </motion.div>
  );
};
