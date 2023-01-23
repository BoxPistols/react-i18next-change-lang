import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./i18n";
import "./styles.css";

import DropdownLanguage from "./DropdownLanguage";
import OtherPage from "./OtherPage";

const App = () => {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <DropdownLanguage />
        <OtherPage />
      </div>
    </Suspense>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
