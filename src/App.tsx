import { useState } from "react";
import Navbar from "./Components/Navbar";
import Choosenpage from "./shared/Enums";

function App() {
  const [selectedpage, setselectedpage] = useState<Choosenpage>();
  // Choosenpage.CONTACTUS
  return (
    <>
      <div>
        <Navbar selectedpage={selectedpage} setselectedpage={setselectedpage} />
      </div>
    </>
  );
}

export default App;
