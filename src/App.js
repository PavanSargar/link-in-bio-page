import React from "react";

import BioLinks from "./components/BioLinks";
import ParticleBackground from "./components/ParticleBackground";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <BioLinks />
    </div>
  );
}
