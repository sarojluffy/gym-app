import { useState } from "react";
import Navbar from "./Components/Navbar";

function App() {
  const [selectedpage, setselectedpage] = useState("contactus");
  return (
    <>
      <div>
        <Navbar selectedpage={selectedpage} setselectedpage={setselectedpage} />
      </div>
    </>
  );
}

export default App;
