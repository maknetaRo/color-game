import React, { Component, createContext } from "react";
import "./Game.css";
import ColorDisplay from '../ColorDisplay/ColorDisplay';

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
          <ColorDisplay data={this.state.correctRandomHex} />

          <section className="row">

            <div
              className="first"
              style={{ background: this.state.correctRandomHex }}
              onClick={() => {
                alert("Well done!");
              }}
            ></div>

            <div
              className="second"
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
          <ColorDisplay data={this.state.correctRandomHex} />
          <section className="row">
            <div
              className="first"
              style={{ background: this.state.incorrectRandomHex }}
              onClick={() => {
                alert("Wrong");
              }}
            ></div>
            <div
              className="second"
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
