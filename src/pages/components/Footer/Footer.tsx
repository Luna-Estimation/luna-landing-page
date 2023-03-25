import { FaHeart } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="pt-40">
      <div className="bg-secondary h-[2px] max-w-[60vw] m-auto rounded"></div>
      <p className="text-white flex items-center justify-center gap-1 pt-14">
        Built with <FaHeart className="text-primary" /> by Luna Team
      </p>
    </div>
  );
};
