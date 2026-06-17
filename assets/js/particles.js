 tsParticles.load("tsparticles", {
      background: { color: { value: "#000000" } },
      particles: {
        number: { value: 80 },
        color: { value: "#0047CC" },
        links: { enable: true, color: "#0047CC", opacity: 0.5 },
        move: { enable: true, speed: 1.5 },
        size: { value: { min: 1, max: 3 } },
        opacity: { value: 0.6 }
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" }, 
          onClick: { enable: true, mode: "push" }  
        }
      }
    });