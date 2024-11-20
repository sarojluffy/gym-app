import { useState } from "react";
import image1 from "../../public/photoes/image1.png";
import image2 from "../../public/photoes/image2.png";
import image3 from "../../public/photoes/image3.png";
import image4 from "../../public/photoes/image4.png";
import image5 from "../../public/photoes/image5.png";
import image6 from "../../public/photoes/image6.png";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { transform } from "framer-motion";

type Props = {};
const OurClasses = (props: Props) => {
  const ph = [image1, image2, image3, image4, image5, image6];
  const [count, setcount] = useState(2);

  const prev = () => {
    if (count === 0) {
      setcount(ph.length - 1);
    } else setcount(count - 1);
  };

  const next = () => {
    if (count === ph.length - 1) {
      setcount(0);
    } else setcount(count + 1);
  };
  return (
    <>
      <div id="ourclasses" className="w-full bg-primary-100 py-20 ">
        <div className="md:flex w-5/6 mx-auto  justify-center">
          <div className="w-full mx-auto my-8 md:basis-3/5">
            <h1 className="font-bold text-xl mb-5">OUR CLASSES</h1>
            <div className="w-4/5">
              <p className="text-sm ">
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </p>
            </div>
          </div>
          <div className="basis-4/5 mx-auto relative z-10 rounded-full">
            {/* only the part visible in this div wil be shown and remaining will be overflowed */}
            <div className=" absolute flex w-full h-full z-20 justify-around items-center gap-[300px]">
              <div
                onClick={prev}
                className="size-8 bg-primary-300 rounded-full hover:bg-primary-100 transition
              hover:ease-in-out hover:scale-110"
              >
                <ChevronLeftIcon className="" />
              </div>
              <div
                onClick={next}
                className="size-8 bg-primary-300 rounded-full hover:bg-primary-100 transition
              hover:ease-in-out hover:scale-110"
              >
                <ChevronRightIcon />
              </div>
            </div>
            <div className="w-full  overflow-hidden">
              <div
                className=" mx-auto flex  w-full rounded-full "
                // this div specially creates a train whole position will just change and not much
                style={{ transform: `translateX(-${100 * count}%)` }}

                // dynamic values are not accepted in the tailwind classname so inline css is used here
              >
                {ph.map((def) => {
                  return (
                    <>
                      <img className="object-fill rounded-xl" src={def}></img>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurClasses;
