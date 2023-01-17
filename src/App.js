import React from "react";
import Body from "./components/Body";
import Personal from "./components/Personal";

import './style.css';

function App() {
  return (
    <div>
      <div className="cvarea">
        <div className="personal">
          <Personal/>
        </div>
        <div className="body">
          <Body/>
        </div>
      </div>
    </div>
  );
}

export default App;
