import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

import { useState } from "react";
import logo from "/photoes/Logo.png";
import NavComponents from "./subcomponents/NavComponents";
import Choosenpage from "../shared/Enums";
import useMediaQuery from "../mediaquery/mediaq";
import Selectbutton from "./subcomponents/Actionbutton";
import Actionbutton from "./subcomponents/Actionbutton";

type Props = {
  selectedpage: Choosenpage;
  setselectedpage: (value: Choosenpage) => void;
};

const Navbar = ({ selectedpage, setselectedpage }: Props) => {
  const flexBetween = " flex items-center justify-between";
  const AboveMediumScreens = useMediaQuery("(min-width:1060px)"); // this returns boolean
  // const [whichpage, setwhichpage] = useState<string>("");

  return (
    <>
      <div>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
          <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
              <img alt="logo" src={logo} />

              {AboveMediumScreens ? (
                <>
                  {" "}
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

                      <Actionbutton>become a member</Actionbutton>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <button className="p-1 bg-secondary-500 rounded-full ">
                    <Bars3Icon className="size-3 text-white" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
