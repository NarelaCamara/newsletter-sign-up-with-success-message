import "./App.css";

import { useState } from "react";
import { Login } from "./components/login/Login";
import { Suscribe } from "./components/suscribe/Suscribe";

function App() {
  const [fakeSend, setFakeSend] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen min-sm:bg-[#242742]">
      {!fakeSend && <Login setFakeSend={setFakeSend} fakeSend={fakeSend} />}
      {fakeSend && <Suscribe setFakeSend={setFakeSend} />}
    </div>
  );
}

export default App;
