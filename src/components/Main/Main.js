import React from "react";
import "./Main.css";
import Game from "../Game/Game";
import ReloadButton from "../ReloadButton/ReloadButton";
import Navbar from "../Navbar/Navbar";

function Main() {
  return (
    <div className="main-app">
      <Navbar />
      <Game />
      <ReloadButton />
    </div>
  );
}

export default Main;
