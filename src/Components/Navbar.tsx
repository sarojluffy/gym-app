import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

import { useState } from "react";
import logo from "/photoes/Logo.png";
import NavComponents from "./subcomponents/NavComponents";

type Props = {
  selectedpage: string;
  setselectedpage: (value: string) => void;
};

const Navbar = ({ selectedpage, setselectedpage }: Props) => {
  const flexBetween = "bg-red-100  flex items-center justify-between";

  const [whichpage, setwhichpage] = useState<string>("");

  return (
    <div className={`${flexBetween} fixed w-full py-6`}>
      {" "}
      {/*top-0 */}
      <div className={`${flexBetween} mx-auto w-5/6 `}>
        <div className="">
          {" "}
          {/* left*/}
          <img src={logo} alt="EVOGYM logo" className=""></img>
        </div>
        <div className="flex justify-center items-center">
          {" "}
          {/* right*/}
          <div className="flex justify-center items-center gap-4">
            <NavComponents
              page="home"
              selectedpage={selectedpage}
              setselectedpage={setselectedpage}
            />
            <NavComponents
              page="benefits"
              selectedpage={selectedpage}
              setselectedpage={setselectedpage}
            />
            <NavComponents
              page="contact us"
              selectedpage={selectedpage}
              setselectedpage={setselectedpage}
            />
            <NavComponents
              page="sign in"
              selectedpage={selectedpage}
              setselectedpage={setselectedpage}
            />
          </div>
          <div className={`${flexBetween} gap-4`}>
            <p>Sign In </p>
            <p>Become a Member</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
