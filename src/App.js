import React from "react";
import ResumeDisplay from "./components/ResumeDisplay";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="header-container">
          <h1 className="header">CV Builder</h1>
        </div>
        <ResumeDisplay />
      </div>
    );
  }
}

export default App;
