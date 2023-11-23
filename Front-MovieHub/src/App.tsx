// import { useState } from "react";

import "./App.css";
import { Auth0Provider } from "@auth0/auth0-react";
import ButtonLogin from "./components/buttons/ButtonLogin";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Auth0Provider
        domain="dev-5nijrxdmh5fr3i6x.us.auth0.com"
        clientId="qNT7Bj6VLi1rarOmZqRWV8u3MuhfqQsz"
        authorizationParams={{
          redirect_uri: "http://localhost:5173",
          audiencie: "movie:app",
        }}
      >
        <ButtonLogin />
      </Auth0Provider>
    </>
  );
}

export default App;
