import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Choosenpage from "./shared/Enums";

function App() {
  const [selectedpage, setselectedpage] = useState<Choosenpage>(
    Choosenpage.HOME
  );
  const [ScrollisTopOfPage, setScrollisTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setScrollisTopOfPage(true); //for navbar color
        setselectedpage(Choosenpage.HOME); // nav options mark garna help
      } else {
        setScrollisTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll); //This line sets up an event listener on the scroll event of the window object, meaning that handleScroll will execute each time the page scrolls.

    return () => window.removeEventListener("scroll", handleScroll); //  This cleanup ensures that the scroll event listener is removed if the component using it is unmounted, preventing unwanted behavior or memory issues.
  }, []);
  //
  return (
    <>
      <div>
        <Navbar
          selectedpage={selectedpage}
          setselectedpage={setselectedpage}
          ScrollisTopOfPage={ScrollisTopOfPage}
        />
      </div>
    </>
  );
}

export default App;
