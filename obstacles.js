const obstraclesArray = [];

class Obstacle {
    constructor() {
        this.top = (Math.random() * canvas.height/3) + 20;
        this.bottom = (Math.random() * canvas.height/3) + 20;
        this.x = canvas.width;
        this.width = 40; //Ancho del rentangulo
        this.color = 'hsl('+ hue + '100%, 50%, 1';
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, 0, this.width, this.top);
        ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
    }

    update(){
        this.x -= gamespeed;
        this.draw();
    }
}

function handleObstacles() {
  if(frame%150 === 0){
      obstraclesArray.unshift(new Obstacle);
  }  

  for (let i = 0; i < obstraclesArray.length; i++) {
    obstraclesArray[i].update();
  }

  if(obstraclesArray.length > 20){
      obstraclesArray.pop(obstraclesArray[0]);
  }
}