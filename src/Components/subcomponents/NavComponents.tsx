import AnchorLink from "react-anchor-link-smooth-scroll";

import Choosenpage from "../../shared/Enums";

type Props = {
  page: string;
  selectedpage: Choosenpage;
  setselectedpage: (value: Choosenpage) => void;
};

const NavComponents = ({ page, selectedpage, setselectedpage }: Props) => {
  const lowercase = page.toLowerCase().replace(/ /g, "") as Choosenpage;
  {
    /* as choosenpage is used because onclick ma error dekhayeko thyo , seselectpage(choosenpage ) le parameter choosenpage khojeko thyo bvut we referred it to "lowercase " which is infact a string value , if we gop to the navbar file we can see the page is passing the string valaue , now as choosenpage is used beacuse it iis certain lowercase will always be one of the Choosenpage enum values.*/
  }
  return (
    <>
      <AnchorLink
        className={`${
          selectedpage === lowercase ? "text-primary-500" : ""
        } hover:text-primary-300 transition hover:ease-in-out `}
        href="#abc"
        onClick={() => {
          setselectedpage(lowercase);
        }}
      >
        {/* onclick wont work unless the href is passed with the id of the div we are trying to scroll to*/}
        {page}
      </AnchorLink>
    </>
  );
};

export default NavComponents;
