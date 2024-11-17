import useMediaQuery from "../mediaquery/mediaq";
import Actionbutton from "./subcomponents/Actionbutton";
import Homepagetext from "../../public/photoes/HomePageText.png";
import Homepagegraphics from "../../public/photoes/HomePageGraphic.png";
import sponserRedBull from "/photoes/SponsorRedBull.png";
import sponserForbes from "/photoes/SponsorForbes.png";
import sponserFortune from "/photoes/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Choosenpage from "../shared/Enums";

type Props = {
  setselectedpage: (value: Choosenpage) => void;
};

const Home = ({ setselectedpage }: Props) => {
  const AboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <>
      <div className="bg-gray-50 flex items-center justify-center h-full ">
        <div className="  w-1/2">
          {/* <div className="1 bg-red-200 h-30 w-full  relative top-0 z-40">
            <div className="bg-red-500 h-20 w-20"></div>
            <div></div>
          </div> */}
          <div className="2 bg-green-200 h-20 w-full relative -top-10 z-10 after:bg-red-500 after:h-5 after:w-20 after:absolute after:-z-[1] after:left-3 after:content-abc after:top-0">
            {/* Child element is now visually below the parent */}
            <img src={Homepagegraphics}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
