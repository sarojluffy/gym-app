import {
  UserGroupIcon,
  HomeModernIcon,
  AcademicCapIcon,
} from "@heroicons/react/16/solid";

import Arry from "../shared/arry";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Choosenpage from "../shared/Enums";

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
  return (
    <>
      <section className="">
        <div className="w-5/6 mx-auto">
          <div>
            <h1 className="text-2xl font-bold">MORE THAN JUST GYM.</h1>
            <p>
              {" "}
              We provide world class fitness equipment, trainers and classes to
              get you to your ultimate fitness goals with ease. We provide true
              care into each and every member.
            </p>
          </div>
          <div className="md:flex items-center justify-center  gap-5 mt-5 ">
            {benearr.map((abc) => {
              return (
                <>
                  <div className=" border-2 border-slate-300 py-16 px-6 mt-5 rounded-lg">
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
                        {" "}
                        <p>Learn more</p>
                      </AnchorLink>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefit;
