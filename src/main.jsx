import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/globals.css";
import App from "./App";
import { SearchProvider } from "./context/SearchContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SearchProvider>
      <App />
    </SearchProvider>
  </BrowserRouter>,
);
