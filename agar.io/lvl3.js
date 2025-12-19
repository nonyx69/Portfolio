let script2 = document.createElement("script");
script2.src = "lvl2.js";
document.head.appendChild(script2);

let checkReady = setInterval(() => {
    if(typeof update === "function" && typeof player !== "undefined"){
        clearInterval(checkReady);

        let spacePressed = false;
        window.addEventListener("keydown", (e) => { if(e.code === "Space") spacePressed = true; });
        window.addEventListener("keyup", (e) => { if(e.code === "Space") spacePressed = false; });

        const originalUpdate = update;
        update = function() {
            originalUpdate();

            if(spacePressed && player.r > 20){
                
                playerSpeed += 0.08; //zoom progr

                let pointsLost = Math.min(0.2, player.r - 20); //pas en dessous 20pts
                if(pointsLost > 0){
                    player.r -= pointsLost;

                    // zoom prop% au pts perdus que si player.r <= 130
                    if(player.r <= 130){
                        let zoomImpact = (pointsLost * 0.055) / Math.pow(player.r, 0.4);
                        targetZoom += zoomImpact;
                        targetZoom = Math.min(1.6, targetZoom);
                    }
                }
            }
        };
    }
}, 50);
