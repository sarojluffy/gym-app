import useMediaQuery from "../mediaquery/mediaq";
import Actionbutton from "./subcomponents/Actionbutton";
import Homepagetext from "/photoes/HomePageText.png";
import Homepagegraphics from "/photoes/HomePageGraphic.png";
import sponserRedBull from "/photoes/SponsorRedBull.png";
import sponserForbes from "/photoes/SponsorForbes.png";
import sponserFortune from "/photoes/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Choosenpage from "../shared/Enums";
import { motion } from "motion/react";
type Props = {
  setselectedpage: (value: Choosenpage) => void;
};

const Home = ({ setselectedpage }: Props) => {
  const AboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <>
      <section className=" bg-gray-20 md:h-full py-10 md:pb-0 gap-16 ">
        {/* h-full is done only for md because in mob screen we have to scroll the same content where we didnt have to in md, hencnce the h-full properties will only be better in first full height of phone and the remaining might be tatti  */}

        {/* also remember why there are py-10 md:pb-0 */}
        {/* heading and images */}
        <div className=" w-5/6 mx-auto md:flex md:h-5/6 items-center  ">
          {/* h-full evaluation ko lai yaxis ma compress expand and bg color rakhera also see */}
          {/* main headings */}
          <div className=" mt-32 md:basis-3/5 z-10">
            {/*  headings  */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              // The once property in viewport={{ once: true }} is a boolean value that determines whether an animation should occur only once or multiple times when the element enters the viewport.

              //      the amont 0.5       Defines how much of the element must be visible in the viewport for the animation or effect to trigger.
              // 0.5 means 50% of the element's height must be visible in the viewport for it to activate.

              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="md:-mt-20 "
            >
              <div className="relative ">
                <div className="z-10 before:absolute  md:before:content-evolvetxt  before:-z-20 before:-top-20 before:-left-20 ">
                  {/* z-10 is for the content of this div and -z-20 is for the pseudo element of the same div . for explanation check your docs */}
                  <img src={Homepagetext}></img>
                </div>
              </div>
            </motion.div>
            <p className="text-sm my-8">
              {" "}
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
            {/* buttons */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              // The once property in viewport={{ once: true }} is a boolean value that determines whether an animation should occur only once or multiple times when the element enters the viewport.

              //      the amont 0.5       Defines how much of the element must be visible in the viewport for the animation or effect to trigger.
              // 0.5 means 50% of the element's height must be visible in the viewport for it to activate.

              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className=" flex items-center gap-8"
            >
              <Actionbutton setselectedpage={setselectedpage}>
                join now
              </Actionbutton>

              <AnchorLink className="text-primary-500 underline hover:text-secondary-500">
                <p>learn more</p>
              </AnchorLink>
            </motion.div>
          </div>

          {/* image */}
          <div
            className="flex md:basis-2/5  justify-center md:z-10
              md:ml-40 md:mt-16 "
          >
            {/* basis ma  justify-items-end wala property haru chalne raicha  */}
            <img src={Homepagegraphics}></img>
          </div>
        </div>
        {AboveMediumScreens && (
          <div className="bg-primary-100 py-10">
            <div className="  w-5/6 mx-auto">
              <div className="flex items-center w-3/5 justify-between">
                <img src={sponserForbes} alt="sponserForbes"></img>
                <img src={sponserFortune} alt="sponserFortune"></img>
                <img src={sponserRedBull} alt="sponserRedBull"></img>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
