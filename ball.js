
// Area For the screen is create where the ball moves 
const area = 
{
    element: document.getElementById('area'),
    width: 1000,
    height: 600,
};
  
  // initalize the are th page in counted with pixel
  function initialize() 
  {
    area.element.style.width = area.width + 'px';
    area.element.style.height = area.height + 'px';
    document.body.appendChild(area.element);
  }
 
  // The moveTo function moves setting the ball moment to x and y coordinates 
  function moveTo(ball, x, y) 
  {
    ball.element.style.left = x + 'px';
    ball.element.style.top = y + 'px';
  }
  // The ChangeDirection function the ball is reverse when it toughs the borderof the div created
  function ChangeDirection(ball, x, y) 
  {
    if (x < 0 || x > area.width - ball.width) 
    {
      ball.dx = -ball.dx;
    }
    if (y < 0 || y > area.height - ball.height) 
    {
      ball.dy = -ball.dy;
    }
  }
  // Create function
  function create(color, dx, dy) 
  {
    const newBall = Object.create(this);
    //Setting the  newBall property like cooridinates, width, height
        newBall.dx = dx;
        newBall.dy = dy;
        newBall.width = 50;
        newBall.height = 50;

    // Setting the newBall.element property and initialize it to  div
    newBall.element = document.createElement("div")

    //set the background color,  height width  for newBall.element
    newBall.element.style.backgroundColor = color;
    newBall.element.style.width = newBall.width + 'px';
    newBall.element.style.height = newBall.height + 'px';  

    // Settig the CSS class for newBall.element.
    newBall.element.className += 'ball';

    //  set the width and height of newBall based on newBall.element
    newBall.width = parseInt(newBall.element.style.width);
    newBall.height = parseInt(newBall.element.style.height);

    //Use appendChild() function to add newball to the area element
    area.element.appendChild(newBall.element);
    return newBall;
  }

  //Function update
  function update(ball, x, y) 
  {
    // Use the moveTo() function to move the ball
        moveTo(ball, x, y);

    //Use the Javascript setTimeout() method to call ChangeDirection() and update() every 16ms
    setTimeout(function() 
    {
      ChangeDirection(ball,x,y); update(ball,x+ball.dx,y+ball.dy);},2);
     
  }
  
  
  //Creates 3 balls within the area div
   initialize();
   const ball1 = create('yellow', 4, 3);
   const ball2 = create('red', 1, 5);
   const ball3 = create('green', 2, 2);
   const ball4 = create('yellow', 4, 3);
   const ball5 = create('red', 1, 5);
   moveTo(ball1, 1, 1);
   moveTo(ball2, 10, 10);
   moveTo(ball3, 20, 20);
   moveTo(ball4, 40,50);
   moveTo(ball5, 50,40);
  
  //  3 balls to move around the area div 
   update(ball1, 70, 0);
   update(ball2, 20, 200);
   update(ball3, 300, 330); 
   update(ball4, 499,20);
   update(ball5, 400, 500);

  
  if (typeof module !== 'undefined') {
    module.exports = { update, create, ChangeDirection, moveTo, area };
  }

