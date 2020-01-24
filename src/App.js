import React, { Component } from 'react';
import './App.css';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import DoggoCard from "./components/DoggoCard";
import pictures from "./pictures.json";

class App extends Component {
  state = {
    pictures,
    score: 0,
    topScore: 0,
    choice: ""
  };

  render() {
    return (
      <div>
        <Navbar winOrLose="You chose correctly!" score="Score: 1 Top Score: 10" />
        <Hero backgroundImage="https://i.imgur.com/t2LNaAd.jpg" />
        <div className="container mt-4">
          <div className="row mb-4">
            <div className="col-3">
              <DoggoCard id={pictures[0].id} key={pictures[0].id} image={pictures[0].image} />
            </div>
            <div className="col-3">
              <DoggoCard id={pictures[1].id} key={pictures[1].id} image={pictures[1].image} />
            </div>
            <div className="col-3">
              <DoggoCard id={pictures[2].id} key={pictures[2].id} image={pictures[2].image} />
            </div>
            <div className="col-3">
              <DoggoCard id={pictures[3].id} key={pictures[3].id} image={pictures[3].image} />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-3">
              <DoggoCard id={pictures[4].id} key={pictures[4].id} image={pictures[4].image} />
            </div>
            <div className="col-3">
              <DoggoCard id={pictures[5].id} key={pictures[5].id} image={pictures[5].image} />
            </div>
            <div className="col-3">
              <DoggoCard id={pictures[6].id} key={pictures[6].id} image={pictures[6].image} />
            </div>
            <div className="col-3">
              <DoggoCard id={pictures[7].id} key={pictures[7].id} image={pictures[7].image} />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-3">
              <DoggoCard id={pictures[8].id} key={pictures[8].id} image={pictures[8].image} />
            </div>
            <div className="col-3">
              <DoggoCard id={pictures[9].id} key={pictures[9].id} image={pictures[9].image} />
            </div>
            <div className="col-3">
              <DoggoCard id={pictures[10].id} key={pictures[10].id} image={pictures[10].image} />
            </div>
            <div className="col-3">
              <DoggoCard id={pictures[11].id} key={pictures[11].id} image={pictures[11].image} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
