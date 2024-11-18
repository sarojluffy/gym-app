import {
  UserGroupIcon,
  HomeModernIcon,
  AcademicCapIcon,
} from "@heroicons/react/16/solid";

const Benefit = (props: Props) => {
  const benearr: Array<object> = [
    {
      logo: <UserGroupIcon />,
      title: "State of the Art Facilities",
      desc: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    },
    {
      logo: <HomeModernIcon />,
      title: "100's of Diverse Classes",
      desc: "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
    {
      logo: <AcademicCapIcon />,
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
        </div>
      </section>
    </>
  );
};

export default Benefit;
