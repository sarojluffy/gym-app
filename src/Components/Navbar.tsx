import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

import { useState } from "react";
import logo from "/photoes/Logo.png";
import NavComponents from "./subcomponents/NavComponents";
import Choosenpage from "../shared/Enums";
import useMediaQuery from "../mediaquery/mediaq";
import Actionbutton from "./subcomponents/Actionbutton";

type Props = {
  selectedpage: Choosenpage;
  setselectedpage: (value: Choosenpage) => void;
  ScrollisTopOfPage: boolean;
};

const Navbar = ({
  selectedpage,
  setselectedpage,
  ScrollisTopOfPage,
}: Props) => {
  const flexBetween = " flex items-center justify-between";
  const AboveMediumScreens = useMediaQuery("(min-width:1060px)"); // this returns boolean
  // const [whichpage, setwhichpage] = useState<string>("");
  const [toogle, setToogle] = useState<boolean>(false);

  const NavbackgroundScroll = ScrollisTopOfPage ? "" : "bg-primary-100";

  console.log(NavbackgroundScroll);

  return (
    <>
      <nav>
        <div
          className={`${flexBetween} ${NavbackgroundScroll} fixed top-0 z-30 w-full py-6`}
        >
          {" "}
          {/*  fixed does two stuff at a time , fix the position , and the defaylt w-full of div is reduced to the contetnt of the div*/}
          {/*  */}
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

                      <Actionbutton setselectedpage={setselectedpage}>
                        become a member
                      </Actionbutton>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <button
                    className="p-2 bg-secondary-500 rounded-full "
                    onClick={() => {
                      setToogle(!toogle);
                    }}
                  >
                    <Bars3Icon className="size-5 text-white" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {toogle && !AboveMediumScreens ? (
        <>
          {/* mobile toogle*/}
          <div className="flex flex-col  justify-center items-center fixed right-0 h-full bg-primary-100 z-40 w-[50%] shadow-xl ">
            <div
              className="flex justify-end w-[80%] "
              onClick={() => setToogle(!toogle)}
            >
              <XMarkIcon className="size-6 text-gray-600" />
            </div>
            <div className="flex h-5/6 flex-col gap-8 text-2xl">
              {" "}
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
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
