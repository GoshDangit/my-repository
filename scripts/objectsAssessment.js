// setup canvas
const para = document.querySelector('p');
let count = 0;

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


class Shape {

    constructor(x, y, velX, velY) {
       this.x = x;
       this.y = y;
       this.velX = velX;                                  // Horizontal 'Velocity'
       this.velY = velY;
    }
}



class Ball extends Shape {

    constructor(x, y, velX, velY, color, size) {
       super(x, y, velX, velY);
       this.color = color;
       this.size = size;
       this.exists = true;
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
            if (!(this === ball) && ball.exists) {
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.size + ball.size) {
                    ball.color = this.color = randomRGB();
                }
            }
        }
    }
 }

class EvilCircle extends Shape {
    constructor(x, y) {
        super(x, y, 20, 20);
        this.color = 'white';
        this.size = 10;
        
        window.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'a':
                    this.x -= this.velX;
                    break;
                case 'd':
                    this.x += this.velX;
                    break;
                case 'w':
                    this.y -= this.velY;
                    break;
                case 's':
                    this.y += this.velY;
                    break;
            }
        });
    }

    draw() {
        ctx.beginPath();                                             // Draw a shape on the paper
        ctx.strokeStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);          // Trace an arc shape on the paper  'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc'
        ctx.stroke();                                                  // "finish drawing the path we started with beginPath(), and fill the area it takes up with the color we specified earlier in fillStyle."
        ctx.lineWidth = 3;
      }

    checkBounds() {
        if ((this.x + this.size) >= width) {                // if the x coordinate is greater than the width of the canvas (the ball is going off the right edge).
            this.x -= this.size;                        // change the velocity to a negative so it changes direction
         }
       
         if ((this.x - this.size) <= 0) {                    // if the x coordinate is smaller than 0 (the ball is going off the left edge).
            this.x += this.size;
         }
       
         if ((this.y + this.size) >= height) {               // if the y coordinate is greater than the height of the canvas (the ball is going off the bottom edge).
            this.y -= this.size;
         }
       
         if ((this.y - this.size) <= 0) {                    // if the y coordinate is smaller than 0 (the ball is going off the top edge).
            this.y += this.size;
         }
        
      }

    collisionDetect() {
        for (const ball of balls) {
            if (ball.exists) {
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.size + ball.size) {
                    ball.exists = false;
                    console.log('Collision detected.');   // Added to find error. Helped because alerted me that all collisons were being detected, not just with evilCircle.
                    count--;
                    para.textContent = `Ball count: ${count}`;
                }
            } else {
                continue;
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
         random(-7,7),
         random(-7,7),
         randomRGB(),
         size
     );

     balls.push(ball);
     count++;
     para.textContent = `Ball count: ${count}`;
 }

const evilCircle = new EvilCircle(500, 500); 

function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, .25)';
    ctx.fillRect(0, 0, width, height);


    for (const ball of balls) {
        if (ball.exists) {                        // Maybe this.exists, also maybe check equality
        ball.draw();
        ball.update();
        ball.collisionDetect();
        }
        
    }

    evilCircle.draw();
    evilCircle.checkBounds();
    evilCircle.collisionDetect();

    
    requestAnimationFrame(loop);

}

loop();

// window.addEventListener('click', e => {
//     const size = random(10,20);
//     const newBall = new Ball(
//         random(0 + size, width - size),                 // Ensures ball is created at least one ball length from edge
//         random(0 + size, height - size),
//         random(-7,7),
//         random(-7,7),
//         randomRGB(),
//         size
//     );

//     newBall.draw();
//     newBall.update();
//     newBall.collisionDetect();
//     console.log('click');
// });




// Upon first go, the evilCircle showed up, did not move, and collisions did not eat the balls. I suspect the exists property is wrong. 
// Not sure about movement yet. Also the ball count is not displaying which I again suspect is related to the exists property.
// Found 2 errors in event listener. A 'velx' that should have been capitalized and two instances of 'd' for switch statement.
// Didn't fix it so I think the logical error is that the circle is being recreated in original spot every iteration.
// Moving the evilCircle method calls for draw, checkBounds, and collisionDetect out of the ball populating loop yourself was correct.
// Could not figure this out. Referring to finished product to make corrections.


// Changes made listed below.


// 1) Instead of 'const count = (balls.length - 1), just initialize count at 0 and then do below
// instead of conditional for ball.exists = false and decrementer, just add 'count--' to the collision detect method.
// instead of contitional for ball.exists = true and incrementer, just add 'count++' to the ball populating loop.
// Without moving these, you got 'ball is not defined' error, because ball.exists couldn't be recognized outside of the loop.



// 2) !! You were correct in assuming the entire problem of the ball not being able to move was due to it being recreated over and over again. Moving the line that created it:
//  'const evilCircle = new EvilCircle(500, 500);' out of the loop() function completely was all that needed to be done. You moved it before, but because the instructions made
// it seem as if every change had to be to the function itself, you didn't try putting it outside which you would have if you weren't bearing to the instructions so hard. Good
// lesson there. 


// 3) Main issue persisting is can't get collisions to eat the balls. The other methods work so this one should be on the class. and be being called.
// Added 'console.log('Collision detected.');' to collissionDetect() and it was detected every collision of the balls, not sure if it was capturing the evilCircle's or not.
//
// Removed 'continue;' line as it wasn't in their final version and was unnecessary. added it due to: 'If it doesn't exist, it has already been eaten by the evil circle, so there is no need to check it again.'
// Upon fixing, put 'continue;' back and everything still worked so this potentially didn't stop anything from working properly.

// Fixed. The for...of loop that populated the balls had 'if (ball.exists = true)'  in it before checking to run the methods, and it needed to either be just 'ball.exists' or 'ball.exists === true'.
// This is something you actually made a note for yourself on but didn't go back and check.
