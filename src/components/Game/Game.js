import React, { Component, createContext } from "react";
import "./Game.css";

class Game extends Component {
  constructor() {
    super();
    this.state = {
      correctRandomHex: "#" + Math.floor(Math.random() * 16777215).toString(16),
      incorrectRandomHex:
        "#" + Math.floor(Math.random() * 16777215).toString(16),
      wrong: "Wrong!",
      right: "Well done!",
    };
  }

  render() {
    let correctColor = Math.floor(Math.random() * 2);

    if (correctColor === 1) {
      return (
        <main className="main">
          <section class="hexCode" id="hexCode">
            <h2 className="main-text">Click the matching color square</h2>
            <h3 className="hex-color">{this.state.correctRandomHex}</h3>
          </section>
          <section className="row">
            <div
              class="first"
              id="first"
              style={{ background: this.state.correctRandomHex }}
              onClick={() => {
                alert("Well done!");
              }}
            ></div>

            <div
              class="second"
              id="second"
              style={{ background: this.state.incorrectRandomHex }}
              onClick={() => {
                alert("Wrong!.");
              }}
            ></div>
          </section>
        </main>
      );
    } else if (correctColor === 0) {
      return (
        <main className="main">
          <section class="hexCode" id="hexCode">
            <h2 className="main-text">Click the matching color square</h2>
            <h3 className="hex-color">{this.state.correctRandomHex}</h3>
          </section>
          <section className="row">
            <div
              class="first"
              id="first"
              style={{ background: this.state.incorrectRandomHex }}
              onClick={() => {
                alert("Wrong");
              }}
            ></div>
            <div
              class="second"
              id="second"
              style={{ background: this.state.correctRandomHex }}
              onClick={() => {
                alert("Well done");
              }}
            ></div>
          </section>
        </main>
      );
    }
  }
}

export default Game;
