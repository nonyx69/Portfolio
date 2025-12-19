let script = document.createElement("script");
script.src = "lvl1.js";
document.head.appendChild(script);

script.onload = () => {

  for (let i = 0; i < 20; i++) {

    bonuses.push({
      x: random(-WORLD_WIDTH/2, WORLD_WIDTH/2),
      y: random(-WORLD_HEIGHT/2, WORLD_HEIGHT/2),
      r: 40,
      type: "double",
      label: "X1.25",
      color: "magenta",
      timer: 0
    });

    bonuses.push({
      x: random(-WORLD_WIDTH/2, WORLD_WIDTH/2),
      y: random(-WORLD_HEIGHT/2, WORLD_HEIGHT/2),
      r: 40,
      type: "speed",
      label: "VITESSE",
      color: "yellow",
      timer: 0
    });
  }

};

/* --- GESTION BONUS --- */
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



const BOT_VISION_RADIUS = 1000; // distance de vision
const BOT_CHASE_SPEED = 2.5;    // vitesse de poursuite

// Hook moveBots après que les bots existent
const originalMoveBots = moveBots;
moveBots = function () {
  bots.forEach((b) => {
    if (b.boss) return;

    // Initialise chasingPlayer si jamais oublié
    if (b.chasingPlayer === undefined) b.chasingPlayer = false;

    const dx = player.x - b.x;
    const dy = player.y - b.y;
    const dist = Math.hypot(dx, dy);

    // Commence la poursuite si le joueur est plus petit et dans la zone
    if (dist < BOT_VISION_RADIUS && b.r > player.r) {
      b.chasingPlayer = true;
      b.color = "#FF0000"; // devient rouge
    }

    // Abandonne si joueur sort de la zone ou devient plus gros
    if (dist >= BOT_VISION_RADIUS || player.r > b.r) {
      b.chasingPlayer = false;
      b.color = "#2196F3"; // redeviens bleu
    }

    // Mouvement
    if (b.chasingPlayer) {
      const normX = dx / dist;
      const normY = dy / dist;
      b.x += normX * BOT_CHASE_SPEED;
      b.y += normY * BOT_CHASE_SPEED;
    } else {
      // Mouvement aléatoire normal
      b.x += b.dx * 1.6;
      b.y += b.dy * 1.6;

      if (b.x < -WORLD_WIDTH / 2 + b.r || b.x > WORLD_WIDTH / 2 - b.r) b.dx *= -1;
      if (b.y < -WORLD_HEIGHT / 2 + b.r || b.y > WORLD_HEIGHT / 2 - b.r) b.dy *= -1;

      if (Math.random() < 0.01) {
        b.dx = Math.random() * 2 - 1;
        b.dy = Math.random() * 2 - 1;
      }
    }
  });
};