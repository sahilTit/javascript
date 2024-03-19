import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store.jsx";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { Auth0Provider } from "@auth0/auth0-react";

import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-che03a7rrksibyvb.us.auth0.com"
      clientId="Zgl71l7EfmB6hbBwUNRQmTCcoDkzNa9l"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <Provider store={store}>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            closeOnClick
            pauseOnHover={false}
            theme="light"
          />
          <App />
        </Provider>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
