import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/globals.css";
import App from "./App";
import { SearchProvider } from "./context/search/SearchContext";
import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SearchProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </SearchProvider>
  </BrowserRouter>,
);
