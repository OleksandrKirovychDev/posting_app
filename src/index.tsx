import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

export const muiCache = createCache({
  key: "mui",
  prepend: true,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CacheProvider value={muiCache}>
        <App />
    </CacheProvider>
  </React.StrictMode>
);
