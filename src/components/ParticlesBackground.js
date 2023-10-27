import React from 'react'
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';

export default function ParticlesBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options = {{
        "fullScreen": {
            "enable": false,
            "zIndex": 0,
        },
        "fpsLimit": 240,
        "particles": {
          "number": {
              "value": 50,
              "density": {
                  "enable": true,
                  "value_area": 1000,
              }
          },
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.7,
              "random": true,
              "anim": {
                  "enable": true,
                  "speed": 2,
                  "opacity_min": 0.1,
                  "sync": false
              }
          },
          "size": {
              "value": 10,
              "random": true,
              "anim": {
                  "enable": true,
                  "speed": 20,
                  "size_min": 0.1,
                  "sync": false
              }
          },
          "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.7,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 2,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
              }
          }
        },
        "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "grab",
                  "parallax": {
                      "enable": false,
                      "smooth": 10,
                      "force": 60
                  }
              },
              "onclick": {
                  "enable": true,
                  "mode": "push"
              },
              "resize": true
          },
          "modes": {
              "grab": {
                  "distance": 300,
                  "line_linked": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 5,
                  "opacity": 0.8,
                  "speed": 3
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "particles_nb": 3
              },
              "remove": {
                  "particles_nb": 2
              }
            }
          },
          "retina_detect": true,
          "background": {
              "color": "#0C0B93",
              "image": "",
              "position": "50% 50%",
              "repeat": "no-repeat",
              "size": "cover"
          }
        }}
    />
  )
}

export const MemoizedBackground = React.memo(ParticlesBackground);
