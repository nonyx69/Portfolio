const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const WORLD_WIDTH = 8000;
const WORLD_HEIGHT = 6000;
const FOOD_COUNT = 2000;
const BOT_COUNT = 70;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function distance(obj1, obj2) {
  return Math.hypot(obj1.x - obj2.x, obj1.y - obj2.y);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

/* --- STATES --- */
let player;
let camera;
let foods;
let bots;
let bonuses = [];
let running = true;
let targetZoom;
let playerSpeed;
let targetPlayerSpeed;


let victory = false;

function playerVictory() {
  if (victory) return;
  victory = true;

  running = false;
  document.getElementById("victoryScreen").style.display = "flex";
}

document.getElementById("retryVictoryBtn").onclick = () => location.reload();
document.getElementById("menuVictoryBtn").onclick = () => window.location.href = "menu_agario.html";




let isDead = false;
function playerDie() {
  if (isDead) return;
  isDead = true;

  running = false;
  document.getElementById("deathScreen").style.display = "flex";
}

document.getElementById("retryBtn").onclick = () => location.reload();
document.getElementById("menuBtn").onclick = () => window.location.href = "menu_agario.html";

/* --- BOOSTS --- */
let dezoomActive = false;
let dezoomTimer = 0;
let speedActive = false;
let speedTimer = 0;

const mouse = { x: 0, y: 0 };
window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

function initGame() {
  running = true;

  player = { x: 0, y: 0, r: 20, color: "#4CAF50" };

  camera = { x: 0, y: 0, zoom: 1.6 };
  targetZoom = camera.zoom;

  playerSpeed = 3.2;
  targetPlayerSpeed = 3.2;

  foods = [];
  for (let i = 0; i < FOOD_COUNT; i++) spawnFood();

  bots = [];
  for (let i = 0; i < BOT_COUNT; i++) spawnBot();

  bots.push({
    x: random(-WORLD_WIDTH / 2, WORLD_WIDTH / 2),
    y: random(-WORLD_HEIGHT / 2, WORLD_HEIGHT / 2),
    r: 450,
    color: "black",
    boss: true,
    dx: random(-1, 1),
    dy: random(-1, 1),
  });

  loop();
}

function spawnFood() {
  foods.push({
    x: random(-WORLD_WIDTH / 2 + 10, WORLD_WIDTH / 2 - 10),
    y: random(-WORLD_HEIGHT / 2 + 10, WORLD_HEIGHT / 2 - 10),
    r: 4,
    timer: 0,
  });
}

function spawnBot() {
  bots.push({
    x: random(-WORLD_WIDTH / 2, WORLD_WIDTH / 2),
    y: random(-WORLD_HEIGHT / 2, WORLD_HEIGHT / 2),
    r: random(20, 50),
    color: "#2196F3",
    dx: random(-1, 1),
    dy: random(-1, 1),
  });
}

function gainPoints(amount) {
  player.r += amount;
  updateBaseZoom();
  targetPlayerSpeed = 3.2 - Math.log(player.r) * 0.25;
  targetPlayerSpeed = Math.max(1.2, targetPlayerSpeed);
}

function updateBaseZoom() {
  if (player.r < 130) {
    targetZoom = 1.6 - (player.r * 0.055) / Math.pow(player.r, 0.4);
    targetZoom = Math.max(0.35, targetZoom);
  } else {

  }
}

function update() {
  if (!running) return;

  const targetX = camera.x + (mouse.x - canvas.width / 2) / camera.zoom;
  const targetY = camera.y + (mouse.y - canvas.height / 2) / camera.zoom;

  movePlayer(targetX, targetY);

  eatFood(player);
  eatBonuses(player);

  bots.forEach((bot) => {
    eatFood(bot);
    eatBonuses(bot);
  });

  moveBots();
  botsVsBots();
  playerVsBots();

  camera.x += (player.x - camera.x) * 0.1;
  camera.y += (player.y - camera.y) * 0.1;

  camera.zoom += (targetZoom - camera.zoom) * 0.05;

  if (speedActive) {
    playerSpeed += (targetPlayerSpeed * 1.5 - playerSpeed) * 0.05;
    speedTimer--;
    if (speedTimer <= 0) {
      speedActive = false;
      targetPlayerSpeed = 3.2 - Math.log(player.r) * 0.25;
      targetPlayerSpeed = Math.max(1.2, targetPlayerSpeed);
    }
  } else {
    playerSpeed += (targetPlayerSpeed - playerSpeed) * 0.05;
  }

  if (dezoomActive) {
    dezoomTimer--;
    if (dezoomTimer <= 0) {
      dezoomActive = false;
      updateBaseZoom();
    }
  }

  foods.forEach((f) => {
    if (f.timer > 0) f.timer--;
  });

  updateBonuses();
}

function movePlayer(tx, ty) {
  const dx = tx - player.x;
  const dy = ty - player.y;
  const d = Math.hypot(dx, dy);

  if (d > 1) {
    player.x += (dx / d) * playerSpeed;
    player.y += (dy / d) * playerSpeed;
  }

  player.x = clamp(player.x, -WORLD_WIDTH / 2 + player.r, WORLD_WIDTH / 2 - player.r);
  player.y = clamp(player.y, -WORLD_HEIGHT / 2 + player.r, WORLD_HEIGHT / 2 - player.r);
}

function eatFood(entity) {
  foods.forEach((f) => {
    if (f.timer > 0) return;

    if (distance(entity, f) < entity.r + f.r) {
      if (entity === player) gainPoints(1);
      else entity.r += 1;

      f.timer = 600;
      f.x = random(-WORLD_WIDTH / 2 + 10, WORLD_WIDTH / 2 - 10);
      f.y = random(-WORLD_HEIGHT / 2 + 10, WORLD_HEIGHT / 2 - 10);
    }
  });
}

function moveBots() {
  bots.forEach((b) => {
    b.x += b.dx * 1.6;
    b.y += b.dy * 1.6;

    if (b.x < -WORLD_WIDTH / 2 + b.r || b.x > WORLD_WIDTH / 2 - b.r) b.dx *= -1;
    if (b.y < -WORLD_HEIGHT / 2 + b.r || b.y > WORLD_HEIGHT / 2 - b.r) b.dy *= -1;

    if (Math.random() < 0.01) {
      b.dx = random(-1, 1);
      b.dy = random(-1, 1);
    }
  });
}

function botsVsBots() {
  for (let i = 0; i < bots.length; i++) {
    for (let j = i + 1; j < bots.length; j++) {
      const a = bots[i];
      const b = bots[j];

      if (distance(a, b) < a.r + b.r) {
        if (a.r > b.r) {
          a.r += b.r * 0.25;
          bots.splice(j, 1);
        } else {
          b.r += a.r * 0.25;
          bots.splice(i, 1);
        }
        return;
      }
    }
  }
}

// --- CANVA DEAD --- //
function playerVsBots() {
  for (let i = 0; i < bots.length; i++) {
    const b = bots[i];
    if (distance(player, b) < player.r + b.r) {
      if (player.r > b.r) {
        if (b.boss) running = false;
        gainPoints(b.r * 0.25);
        bots.splice(i, 1);
        return;
      } else {
        playerDie();
        return;
      }
    }
  }
}

// --- CANVA WIN --- //
function playerVsBots() {
  for (let i = 0; i < bots.length; i++) {
    const b = bots[i];
    if (distance(player, b) < player.r + b.r) {
      if (player.r > b.r) {
        if (b.boss) {
          playerVictory();
        }
        gainPoints(b.r * 0.25);
        bots.splice(i, 1);
        return;
      } else {
        playerDie();
        return;
      }
    }
  }
}



function eatBonuses(entity) {
  bonuses.forEach((b) => {
    if (b.timer > 0) return;

    if (distance(entity, b) < entity.r + b.r) {
      if (entity === player) {
        if (b.type === "double") {
          player.r *= 1.25;
          updateBaseZoom();
        }

        if (b.type === "speed") {
          speedActive = true;
          speedTimer = 300;
          targetPlayerSpeed = Math.max(targetPlayerSpeed, playerSpeed * 1.5);
        }
      } else if (!entity.boss) {
        if (b.type === "double") entity.r *= 1.25;
        if (b.type === "speed") {
          entity.dx *= 1.5;
          entity.dy *= 1.5;
        }
      }

      b.timer = 600;
    }
  });
}

function updateBonuses() {
  bonuses.forEach((b) => {
    if (b.timer > 0) b.timer--;
  });
}

function draw() {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.scale(camera.zoom, camera.zoom);
  ctx.translate(-camera.x, -camera.y);

  ctx.strokeStyle = "#555";
  ctx.lineWidth = 5 / camera.zoom;
  ctx.strokeRect(-WORLD_WIDTH / 2, -WORLD_HEIGHT / 2, WORLD_WIDTH, WORLD_HEIGHT);

  foods.forEach((f) => { if (f.timer <= 0) drawCircle(f.x, f.y, f.r, "orange"); });

  bonuses.forEach((b) => {
    if (b.timer === 0) {
      drawCircle(b.x, b.y, b.r, b.color);
      drawText(b.label, b.x, b.y, "black", b.r);
    }
  });

  bots.forEach((b) => {
    drawCircle(b.x, b.y, b.r, b.color);
    if (b.boss) {
      const textSize = b.r * 0.25;
      drawText("Boss Final", b.x, b.y - textSize * 0.6, "white", textSize);
      drawText(Math.floor(b.r), b.x, b.y + textSize * 0.6, "white", textSize);
    } else drawText(Math.floor(b.r), b.x, b.y, "white", b.r);
  });

  drawCircle(player.x, player.y, player.r, player.color);
  drawText(Math.floor(player.r), player.x, player.y, "white", player.r);

  drawMiniMap();
}

function drawMiniMap() {
  const w = 500;
  const h = 350;
  const x = canvas.width - w - 20;
  const y = canvas.height - h - 20;

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.fillStyle = "rgba(0,0,0,0.5)";
  ctx.fillRect(x, y, w, h);

  const mapX = (v) => x + ((v + WORLD_WIDTH / 2) / WORLD_WIDTH) * w;
  const mapY = (v) => y + ((v + WORLD_HEIGHT / 2) / WORLD_HEIGHT) * h;

  ctx.beginPath();
  ctx.arc(mapX(player.x), mapY(player.y), player.r / 10, 0, Math.PI * 2);
  ctx.fillStyle = "green";
  ctx.fill();

  bots.forEach((b) => {
    ctx.beginPath();
    ctx.arc(mapX(b.x), mapY(b.y), b.r / 12, 0, Math.PI * 2);
    ctx.fillStyle = b.boss ? "black" : "blue";
    ctx.fill();
  });
}

function drawCircle(x, y, r, color) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawText(text, x, y, color, size) {
  ctx.fillStyle = color || "white";
  ctx.font = `${size ? Math.floor(size / 2) : 12}px Arial`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, x, y);
}

function loop() {
  if (!running) return;
  update();
  draw();
  requestAnimationFrame(loop);
}

initGame();
