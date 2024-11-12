import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

import { useState } from "react";
import logo from "/photoes/Logo.png";
import NavComponents from "./subcomponents/NavComponents";
import Choosenpage from "../shared/Enums";
import useMediaQuery from "../mediaquery/mediaq";

type Props = {
  selectedpage: Choosenpage;
  setselectedpage: (value: Choosenpage) => void;
};

const Navbar = ({ selectedpage, setselectedpage }: Props) => {
  const flexBetween = " flex items-center justify-between";
  const AboveMediumScreens = useMediaQuery("(min-width:1060px)");
  // const [whichpage, setwhichpage] = useState<string>("");

  return (
    <>
      <div>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
          <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
              <img alt="logo" src={logo} />

              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <NavComponents
                    page="Home"
                    selectedpage={selectedpage}
                    setselectedpage={setselectedpage}
                  />
                  <NavComponents
                    page="Benefits"
                    selectedpage={selectedpage}
                    setselectedpage={setselectedpage}
                  />
                  <NavComponents
                    page="Our Classes"
                    selectedpage={selectedpage}
                    setselectedpage={setselectedpage}
                  />
                  <NavComponents
                    page="Contact Us"
                    selectedpage={selectedpage}
                    setselectedpage={setselectedpage}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>

                  <p>Become a Member</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32 py-6">
        <div className=" flex w-5/6 mx-auto justify-between gap-16 items-center">
          {" "}
          {/*items centre le  logo shink expand huna duinna  */}
          <img src={logo}></img>
          <div className="flex w-full justify-between bg-pink-400">
            <div className="flex gap-6">
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
                page="our classes"
                selectedpage={selectedpage}
                setselectedpage={setselectedpage}
              />
              <NavComponents
                page="contact us"
                selectedpage={selectedpage}
                setselectedpage={setselectedpage}
              />
            </div>
            <div className="flex gap-8">
              <p>Sign In </p>
              <p>Become a Member</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
