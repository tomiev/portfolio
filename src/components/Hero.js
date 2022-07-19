import React from 'react'
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';

export default function Hero() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div>
      <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options = {{
              "fullScreen": {
                  "enable": false,
                  "zIndex": 1
              },
              "fpsLimit": 120,
              "particles": {
                  "number": {
                      "value": 100,
                      "density": {
                          "enable": true,
                          "value_area": 800
                      }
                  },
                  "color": {
                      "value": "#bee11e"
                  },
                  "shape": {
                      "type": "circle"
                  },
                  "opacity": {
                      "value": 1,
                      "random": true,
                      "anim": {
                          "enable": true,
                          "speed": 3,
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
                      "color": "#bee11e",
                      "opacity": 1,
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
                              "enable": true,
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
                          "distance": 400,
                          "line_linked": {
                              "opacity": 1
                          }
                      },
                      "bubble": {
                          "distance": 400,
                          "size": 40,
                          "duration": 2,
                          "opacity": 0.8,
                          "speed": 3
                      },
                      "repulse": {
                          "distance": 200
                      },
                      "push": {
                          "particles_nb": 4
                      },
                      "remove": {
                          "particles_nb": 2
                      }
                  }
              },
              "retina_detect": true,
              "background": {
                  "color": "#411ee1",
                  "image": "",
                  "position": "50% 50%",
                  "repeat": "no-repeat",
                  "size": "cover"
              }
          }}
            />
    </div>
  )
}

export const MemoizedHero = React.memo(Hero);
