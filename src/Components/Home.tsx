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
    <>
      <section className=" bg-gray-50 md:h-full py-10 md:pb-0 gap-16">
        {/* h-full is done only for md because in mob screen we have to scroll the same content where we didnt have to in md, hencnce the h-full properties will only be better in first full height of phone and the remaining might be tatti  */}

        {/* also remember why there are py-10 md:pb-0 */}
        {/* heading and images */}
        <div className=" w-5/6 mx-auto md:flex md:h-full items-center ">
          {/* h-full evaluation ko lai yaxis ma compress expand and bg color rakhera also see */}
          {/* main headings */}
          <div className=" mt-32 md:basis-3/5">
            {/*  headings  */}
            <div className="md:-mt-20">
              <div>
                <img src={Homepagetext}></img>
              </div>
            </div>
            <p className="text-sm my-8">
              {" "}
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
            {/* buttons */}
            <div className=" flex items-center gap-8">
              <Actionbutton>join now</Actionbutton>

              <AnchorLink>
                <p>learn more</p>
              </AnchorLink>
            </div>
          </div>

          {/* image */}
          <div
            className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
          >
            {/* basis ma  justify-items-end wala property haru chalne raicha  */}
            <img src={Homepagegraphics}></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
