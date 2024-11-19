import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Choosenpage from "./shared/Enums";
import Home from "./Components/Home";
import Benefit from "./Components/Benefit";

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
      <div className="app">
        <Navbar
          selectedpage={selectedpage}
          setselectedpage={setselectedpage}
          ScrollisTopOfPage={ScrollisTopOfPage}
        />

        <Home setselectedpage={setselectedpage} />
        <Benefit setselectedpage={setselectedpage} />
      </div>
    </>
  );
}

export default App;
