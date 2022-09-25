import Particles from "react-tsparticles";

let testOptions = {
    fpsLimit: 60,
    interactivity: {
      detectsOn: 'canvas',
      events: {
        onClick: { enable: false, mode: 'push' },
        onHover: { enable: true, mode: 'repulse' },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        push: { particles_nb: 4 },
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: '#f24e14' },
      links: { color: '#000', distance: 150, enable: true, opacity: 0.5, width: 1 },
      move: {
        bounce: false,
        direction: 'none',
        enable: true,
        outMode: 'bounce',
        random: false,
        speed: 2,
        straight: false,
      },
      number: { density: { enable: true, value_area: 800 }, value: 80 },
      opacity: { value: 0.5 },
      shape: { type: 'circle' },
      size: { random: true, value: 5 },
    },
    detectRetina: true,
  };
  

export default function ParticleBackground() {
  return (
    <div className="App">
      <Particles
        options={testOptions}
      />
    </div>
  );
}
