import Logo from "../../Images/luna_logo.png";
import Image from "next/image";

export const Header = () => {
  return (
    <div>
      <Image src={Logo} alt="Logo" width={153} height={80} />
    </div>
  );
};
