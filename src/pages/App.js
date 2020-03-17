import React from "react";
import "../styles/App.css";
import Header from "./../components/Header";
import Message from "../components/Message";
import CreateMessage from "../components/CreateMessage";
const App = () => {
  return (
    <div className="app">
      <Header />
      <CreateMessage />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default App;
