import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
<<<<<<< HEAD

import AuthContext from "./context/authContext";
import UserContext from "./context/userContext";
import ShopContext from "./context/ShopContext";
=======
import AuthContext from "./context/authContext.jsx";
import UserContext from "./context/userContext.jsx";
import ShopContext from "./context/ShopContext.jsx";
>>>>>>> mains

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContext>
      <UserContext>
        <ShopContext>
          <App />
        </ShopContext>
      </UserContext>
    </AuthContext>
  </BrowserRouter>
);
