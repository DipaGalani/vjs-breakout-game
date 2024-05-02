const rulesBtn = document.getElementById("rules-btn");
const closeBtn = document.getElementById("close-btn");
const rules = document.getElementById("rules");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let score = 0;

const brickRowCount = 9;
const brickColumnCount = 5;

// Create ball props
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 1.5,
  size: 10,
  speed: 4,
  dx: 4,
  dy: -4,
};

// Create paddle props
const paddle = {
  x: canvas.width / 2 - 40,
  y: canvas.height - 20,
  w: 80,
  h: 10,
  speed: 8,
  dx: 0,
};

// Create brick props
const brick = {
  w: 70,
  h: 20,
  padding: 10,
  offsetX: 45,
  offsetY: 60,
  visible: true,
};

// Draw ball on canvas
const drawBall = () => {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
  ctx.fillStyle = "#0095dd";
  ctx.fill();
  ctx.closePath();
};

// Draw paddle on canvas
const drawPaddle = () => {
  ctx.beginPath();
  ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
  ctx.fillStyle = "#000";
  ctx.fill();
  ctx.closePath();
};

// Draw score on canvas
const drawScore = () => {
  ctx.font = "20px Arial";
  ctx.fillText(`Score: ${score}`, canvas.width - 100, 30);
};

// Draw bricks
const bricksArray = [];
for (let i = 0; i < brickRowCount; i++) {
  bricksArray[i] = [];
  for (let j = 0; j < brickColumnCount; j++) {
    const x = i * (brick.w + brick.padding) + brick.offsetX;
    const y = j * (brick.h + brick.padding) + brick.offsetY;
    bricksArray[i][j] = { x, y, ...brick };
  }
}
const drawBricks = () => {
  bricksArray.forEach((brickRow, i) => {
    brickRow.forEach((brick, j) => {
      ctx.beginPath();
      ctx.rect(brick.x, brick.y, brick.w, brick.h);
      ctx.fillStyle = brick.visible ? "#000" : "transparent";
      ctx.fill();
      ctx.closePath();
    });
  });
};

// Draw everything
const draw = () => {
  drawBall();
  drawPaddle();
  drawScore();
  drawBricks();
};

draw();

// Event Listener
rulesBtn.addEventListener("click", () => {
  rules.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  rules.classList.remove("show");
});
