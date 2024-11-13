import { ReactNode } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  children: ReactNode;
};

const Actionbutton = ({ children }: Props) => {
  return (
    <AnchorLink
      href=""
      className="bg-secondary-500 rounded-md px-3 py-1 hover:bg-primary-300 hover:text-white transition ease-in-out"
    >
      {children}
    </AnchorLink>
  );
};

export default Actionbutton;
