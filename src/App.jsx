import React from "react";
import HomeDashBoard from "./pages/HomeDashBoard";
import { Provider } from "react-redux";
import store from "./Store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <HomeDashBoard />
      </Provider>
    </div>
  );
}

export default App;
