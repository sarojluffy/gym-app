import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedpage: string;
  setselectedpage: (value: string) => void;
};

const NavComponents = ({ page, selectedpage, setselectedpage }: Props) => {
  const lowercase = page.toLowerCase().replace(/ /g, "");
  return (
    <>
      <AnchorLink
        className={`${
          selectedpage === lowercase ? "text-primary-500" : ""
        } hover:text-blue-400`}
        onClick={() => {
          setselectedpage(lowercase);
          alert("ok");
        }}
        href={`#${lowercase}`}
      >
        {" "}
        {/* onclick wont work uinless the href is passed with the id of the div we are trying to scroll to*/}
        {page}
      </AnchorLink>
    </>
  );
};

export default NavComponents;
