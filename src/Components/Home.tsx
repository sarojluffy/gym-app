import useMediaQuery from "../mediaquery/mediaq";
import Actionbutton from "./subcomponents/Actionbutton";
import Homepagetext from "../../public/photoes/HomePageText.png";
import Homepagegraphics from "../../public/photoes/HomePageGraphic.png";
import sponserRedBull from "../../public/photoes/SponsorRedBull.png";
import sponserForbes from "../../public/photoes/SponsorForbes.png";
import sponserFortune from "../../public/photoes/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Choosenpage from "../shared/Enums";

type Props = {
  setselectedpage: (value: Choosenpage) => void;
};

const Home = ({ setselectedpage }: Props) => {
  const AboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="bg-gray-20  py-10  h-full ">
      {/* headers and image */}
      <div className="w-5/6 mx-auto mt-20  md:flex  bg-red-400  gap-16 h-5/6">
        {/* headers */}
        <div>
          {/* main headers  */}
          <div className="my-8">
            <div className="my-6">
              <img src={Homepagetext}></img>
            </div>
            <p className=" text-xs text-gray-500">
              {" "}
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </div>

          {/* buttons */}
          <div>
            <Actionbutton setselectedpage={setselectedpage}>
              join now
            </Actionbutton>

            <AnchorLink
              className="text-primary-300 underline hover:text-secondary-500 mx-4"
              href=""
              //   onClick={}
            >
              learn more
            </AnchorLink>
          </div>
        </div>
        {/* home image */}
        <div>
          <img src={Homepagegraphics}></img>
        </div>
      </div>

      {AboveMediumScreens && (
        <div>
          <div>
            <img src={sponserForbes} alt="sponserforbes"></img>
            <img src={sponserFortune} alt="sponserfortune"></img>
            <img src={sponserRedBull} alt="sponserredbull"></img>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
