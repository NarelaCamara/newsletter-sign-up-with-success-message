import "./App.css";

import { useState } from "react";
import { Login } from "./components/login/Login";
import { Suscribe } from "./components/suscribe/Suscribe";

function App() {
  const [fakeSend, setFakeSend] = useState(false);

  return (
    <div className="">
      <div className="flex items-start justify-center min-h-screen md:bg-[#242742]">
        <div className="md:border-0 bg-white md:rounded-[36px] max-md:w-[327px]  max-md:h-[100vh]">
          {!fakeSend && <Login setFakeSend={setFakeSend} fakeSend={fakeSend} />}
          {fakeSend && <Suscribe setFakeSend={setFakeSend} />}
        </div>
      </div>
    </div>
  );
}

export default App;
