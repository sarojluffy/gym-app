import {
  UserGroupIcon,
  HomeModernIcon,
  AcademicCapIcon,
} from "@heroicons/react/16/solid";

import Arry from "../shared/arry";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Choosenpage from "../shared/Enums";

import benefitgraphics from "../../public/photoes/BenefitsPageGraphic.png";
import Actionbutton from "./subcomponents/Actionbutton";

import { motion } from "motion/react";

type Props = {
  setselectedpage: (value: Choosenpage) => void;
};
// interface Arry {
//   icon: JSX.Element;
//   title: string;
//   desc: string;
// }

const Benefit = ({ setselectedpage }: Props) => {
  const benearr: Array<Arry> = [
    {
      icon: <HomeModernIcon className="h-5 w-5" />,
      title: "State of the Art Facilities",
      desc: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    },
    {
      icon: <UserGroupIcon className="h-5 w-5" />,
      title: "100's of Diverse Classes",
      desc: "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
    {
      icon: <AcademicCapIcon className="h-5 w-5" />,
      title: "Expert and Pro Trainers",
      desc: "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
  ];

  //   const container = {
  //     hidden: {},
  //     visible: {
  //       transition: { staggerChildren: 0.2 },
  //     },
  //   };
  //   const childVariant = {
  //     hidden: { opacity: 0, scale: 0.9 },
  //     visible: { opacity: 1, scale: 1 },
  //   };
  return (
    <>
      <section id="benefits" className="my-20">
        <div className="w-5/6 mx-auto">
          <div className="md:my-5 md:w-3/5">
            <h1 className="text-3xl font-bold">MORE THAN JUST GYM.</h1>
            <p className="text-sm">
              We provide world class fitness equipment, trainers and classes to
              get you to your ultimate fitness goals with ease. We provide true
              care into each and every member.
            </p>
          </div>
          <motion.div
            className="md:flex   gap-5 mt-5 "
            initial="xyz"
            whileInView="def"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              xyz: {},
              def: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {benearr.map((abc) => {
              return (
                <>
                  <motion.div
                    variants={{
                      xyz: { opacity: 0, scale: 0.9 },
                      def: { opacity: 1, scale: 1 },
                    }}
                    // this motion property comes from parent , the initial and while on view vaiables are same for the child divs
                    className=" border-2 border-slate-300 py-16 px-6 mt-5 rounded-lg "
                  >
                    <div className="flex justify-center items-center">
                      <div className="rounded-full inline-block bg-primary-100 p-3 border border-slate-400 ">
                        {abc.icon}
                      </div>
                    </div>
                    <div className="text-center my-2">
                      <h2 className="font-bold ">{abc.title}</h2>
                      <p className="my-3">{abc.desc}</p>

                      <AnchorLink
                        href={`#${Choosenpage.CONTACTUS}`}
                        className="underline text-primary-500 font-semibold hover:text-secondary-500"
                        onClick={() => {
                          setselectedpage(Choosenpage.CONTACTUS);
                        }}
                      >
                        <p>Learn more</p>
                      </AnchorLink>
                    </div>
                  </motion.div>
                </>
              );
            })}
          </motion.div>
        </div>
        {/* benefit images and desc */}

        <div className="w-5/6 mx-auto md:flex mt-20 gap-10 justify-center items-center">
          <div className="z-10 basis-3/5 flex items-center justify-center">
            <img src={benefitgraphics} alt="benefitgraphics"></img>
          </div>

          <div className=" z-10 relative before:absolute before:z-[-1] before:-top-[70px] before:content-abstractwave before:-left-16  basis-3/5 ">
            <motion.h1
              className="font-bold text-2xl"
              initial="abc"
              whileInView="def"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                abc: { x: -50, opacity: 0 },
                def: { x: 0, opacity: 1 },
              }}
            >
              MILLIONS OF HAPPY MEMBERS GETTING
              <span className="text-primary-500"> FIT .</span>
            </motion.h1>
            <motion.div
              className="text-sm my-4"
              initial="abc"
              whileInView="def"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                abc: { x: 50, opacity: 0 },
                def: { x: 0, opacity: 1 },
              }}
            >
              <p>
                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                Felis orci diam odio.
              </p>
              <p className="mt-2">
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </p>
            </motion.div>
            <div>
              <div className="relative mt-8  before:absolute before:content-sparkles before:z-[-1] before:-top-6">
                <Actionbutton setselectedpage={setselectedpage}>
                  Join now
                </Actionbutton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefit;
