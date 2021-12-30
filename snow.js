function draw(){

  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");

  let With = window.innerWidth;
  let Height = window.innerHeight;
  canvas.width = With;
  canvas.height = Height;


  let number = 1000; 
  let particles = [];
  for (let i = 0; i < number; i++) {
    particles.push({
      x: Math.random() * With, 
      y: Math.random() * Height, 
      r: Math.random() * 2 , 
      d: Math.random() * number
    })
  }


  function drawCircle() {
    ctx.clearRect(0, 0, With, Height);
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    ctx.beginPath();
    for (let i = 0; i < number; i++) {
      let p = particles[i];
      ctx.moveTo(p.x, p.y);
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
    }
    ctx.fill();
    update();
  }


  function update() {
    for (let i = 0; i < number; i++) {
      let p = particles[i];
      p.y += Math.cos(p.d) + 1 + p.r / 2;
      p.x += Math.sin(0) * 2;
      if (p.x > With + 5 || p.x < -5 || p.y > Height) {
        particles[i] = {
          x: Math.random() * With,
          y: -10,
          r: p.r,
          d: p.d
        };
      }
    }
  }

  function drawShapes() {
    drawCircle();
  }

  setInterval(drawShapes, 30);


}

