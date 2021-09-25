import './App.css';
import React from "react";

import Provider from "react-redux/es/components/Provider";

import { store }    from "./store";
import { CatsPage } from "./components/CatsPage";

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <CatsPage/>
          </div>
      </Provider>
  );
}

export default App;
