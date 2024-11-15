import { ReactNode } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Choosenpage from "../../shared/Enums";

type Props = {
  setselectedpage: (value: Choosenpage) => void;
  children: ReactNode;
};

const Actionbutton = ({ children, setselectedpage }: Props) => {
  return (
    <AnchorLink
      className="bg-secondary-500 rounded-sm px-5 py-1 hover:bg-primary-300 hover:text-white transition ease-in-out"
      onClick={() => setselectedpage(Choosenpage.CONTACTUS)}
      href={`#${Choosenpage.CONTACTUS}`}
    >
      {children}
    </AnchorLink>
  );
};

export default Actionbutton;
