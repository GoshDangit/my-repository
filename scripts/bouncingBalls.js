// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');                                  // This represents the drawing area

const width = canvas.width = window.innerWidth;                       // This and below is chaining multiple assignments together, which is OK
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {                                           // You struggle with these, but this formula will give you a random number between and including those parameters. Trust it.
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball {

    constructor(x, y, velX, velY, color, size) {
       this.x = x;
       this.y = y;
       this.velX = velX;                                  // Horizontal 'Velocity'
       this.velY = velY;
       this.color = color;
       this.size = size;
    }

    draw() {
        ctx.beginPath();                                             // Draw a shape on the paper
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);          // Trace an arc shape on the paper  'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc'
        ctx.fill();                                                  // "finish drawing the path we started with beginPath(), and fill the area it takes up with the color we specified earlier in fillStyle."
      } 
 
    update() {
      if ((this.x + this.size) >= width) {                // if the x coordinate is greater than the width of the canvas (the ball is going off the right edge).
         this.velX = -(this.velX);                        // change the velocity to a negative so it changes direction
      }
    
      if ((this.x - this.size) <= 0) {                    // if the x coordinate is smaller than 0 (the ball is going off the left edge).
         this.velX = -(this.velX);
      }
    
      if ((this.y + this.size) >= height) {               // if the y coordinate is greater than the height of the canvas (the ball is going off the bottom edge).
         this.velY = -(this.velY);
      }
    
      if ((this.y - this.size) <= 0) {                    // if the y coordinate is smaller than 0 (the ball is going off the top edge).
         this.velY = -(this.velY);
      }
    
      this.x += this.velX;                                // These two actually move the ball, the first 4 if statements just keep it in bounds
      this.y += this.velY;
     }
     
    collisionDetect() {
        for (const ball of balls) {
            if (!(this === ball)) {
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.size + ball.size) {
                    ball.color = this.color //= randomRGB();
                }
            }
        }
    }
 }

 const balls = [];

 while (balls.length < 25) {    // Was cool that one time it was dark geenish vs light greenish ands the blues came out of nowhere and won
     const size = random(10,20);
     const ball = new Ball(
         random(0 + size, width - size),                 // Ensures ball is created at least one ball length from edge
         random(0 + size, height - size),
         random(-3,3),
         random(-3,3),
         randomRGB(),
         size
     );

     balls.push(ball);
 }


function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, .25)';
    ctx.fillRect(0, 0, width, height);

    for (const ball of balls) {
        ball.draw();
        ball.update();
        ball.collisionDetect();
    }

    requestAnimationFrame(loop);

}

loop();
