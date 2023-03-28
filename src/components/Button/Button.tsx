import styles from "./Button.module.css";

type startButtonProps = {
  width: string;
  height: string;
};

export const StartButton = (props: startButtonProps) => {
  const { width, height } = props;
  return (
    <a
      target="_blank"
      href="https://est.lunagile.com"
      className={`${width} ${height} bg-primary no-underline rounded-lg flex justify-center items-center text-white text-xl font-sans shadow-lg hover:bg-hover`}
    >
      <button>Quick Start</button>
    </a>
  );
};

export const ContactButton = () => {
  return (
    <a
      href="mailto:info@draftcloud.dev"
      className="w-[22rem] h-12 bg-white rounded-lg flex justify-center items-center text-primary text-xl font-sans hover:bg-[#F7F7FA] max-xs:w-full"
    >
      <button>Contact Us</button>
    </a>
  );
};
