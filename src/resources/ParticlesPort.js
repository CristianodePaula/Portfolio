import Particles from "react-tsparticles"

export default function TsParticles() {  
  return (
    <Particles
    options={{
        background: {
          color: {
            value: ""
          },
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover"
        },
        fullScreen: {
          zIndex: 1
        },
        interactivity: {
          events: {
            onClick: {
              mode: "push"
            },
            onHover: {
              mode: "repulse"
            }
          },
          modes: {
            bubble: {
              distance: 200,
              duration: 1,
              opacity: 0.8,
              size: 20
            },
            grab: {
              distance: 400
            }
          }
        },
        particles: {
          color: {
            value: "#ffffff"
          },
          links: {
            color: {
              value: "#ffffff"
            },
            distance: 150,
            opacity: 0.4
          },
          move: {
            attract: {
              rotate: {
                x: 600,
                y: 1200
              }
            },
            enable: true,
            outModes: {
              default: "destroy",
              bottom: "destroy",
              left: "destroy",
              right: "destroy",
              top: "destroy"
            },
            speed: 5
          },
          number: {
            density: {
              enable: true
            },
            value: 0
          },
          opacity: {
            animation: {
              speed: 3,
              minimumValue: 0.1
            }
          },
          size: {
            value: {
              min: 0.1,
              max: 5,
            },
            animation: {
              enable: true,
              sync: true,
              destroy: "max",
              startValue: "min",
              minimumValue: 0.1
            }
          }
        },
        emitters: {
          autoPlay: true,
          fill: true,
          life: {
            wait: false
          },
          rate: {
            quantity: 2,
            delay: 0.1
          },
          shape: "square",
          startCount: 0,
          size: {
            mode: "percent",
            height: 0,
            width: 100
          },
          direction: "top",
          position: {
            x: 50,
            y: 100
        }}}}
        />
      );
    };
    