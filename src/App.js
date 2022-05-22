
import React from "react";

import FlexibleInput from "./components/FlexibleInput";
import FlexibleTextArea from "./components/FlexibleTextArea";

class App extends React.Component {
  render() {
    return (
      <div>
        <FlexibleInput id="first-name" name="first-name" placeholder="First Name" fontSize={1.75} maxWidth={300} />
        <FlexibleTextArea placeholder="Objective or Summary"/>
      </div>
      
    );
  }
}

export default App;
