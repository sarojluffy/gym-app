import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Logo from "../../public/photoes/Logo.png";

type Props = {};

const Navbar = (props: Props) => {
  const flexBetween = "bg-red-100  flex items-center justify-between";

  return (
    <div className={`${flexBetween} fixed w-full py-6`}>
      {" "}
      {/*top-0 */}
      <div className={`${flexBetween} mx-auto w-5/6 `}>
        <div className="">
          {" "}
          {/* left*/}
          <img src={Logo} alt="EVOGYM logo" className=""></img>
        </div>
        <div className="flex justify-center items-center">
          {" "}
          {/* right*/}
          <div className="flex justify-center items-center gap-4">
            <p>Home</p>
            <p>Benefits</p>
            <p>Our classes </p>
            <p>Contact US</p>
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
