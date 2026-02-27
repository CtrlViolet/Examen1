const canvas = document.getElementById("pixelCanvas");
const ctx = canvas.getContext("2d");

const pixelSize = 4; // tamaño del pixel

/* ==========================
   FUNCIÓN BASE PIXEL
========================== */

function drawPixel(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
}

/* ==========================
   FONDO
========================== */

function drawBackground() {
    for (let y = 0; y < 60; y++) {
        for (let x = 0; x < 150; x++) {
            drawPixel(x, y, "#1a0000");
        }
    }

    for (let y = 60; y < 120; y++) {
        for (let x = 0; x < 150; x++) {
            drawPixel(x, y, "#800000");
        }
    }

    for (let y = 120; y < 150; y++) {
        for (let x = 0; x < 150; x++) {
            drawPixel(x, y, "#ff0000");
        }
    }
}

/* ==========================
   CABELLO (bloques reales)
========================== */

function drawHair() {

    for (let y = 10; y < 90; y++) {
        for (let x = 5; x < 110; x++) {
            drawPixel(x, y, "#9e2f3a");
        }
    }

    for (let y = 15; y < 95; y++) {
        for (let x = 10; x < 115; x++) {
            drawPixel(x, y, "#b03a45");
        }
    }

    // sombras
    for (let y = 40; y < 110; y++) {
        for (let x = 20; x < 90; x++) {
            drawPixel(x, y, "#7a1f29");
        }
    }
}

/* ==========================
   ROSTRO
========================== */

function drawFace() {

    for (let y = 40; y < 110; y++) {
        for (let x = 50; x < 120; x++) {
            drawPixel(x, y, "#c43c4a");
        }
    }

    for (let y = 60; y < 120; y++) {
        for (let x = 70; x < 130; x++) {
            drawPixel(x, y, "#b83240");
        }
    }
}

/* ==========================
   OJOS
========================== */

function drawEyes() {

    // ojo superior
    for (let y = 45; y < 65; y++) {
        for (let x = 100; x < 120; x++) {
            drawPixel(x, y, "#ff3b3b");
        }
    }

    for (let y = 50; y < 60; y++) {
        for (let x = 105; x < 115; x++) {
            drawPixel(x, y, "#800000");
        }
    }

    // ojo inferior
    for (let y = 75; y < 95; y++) {
        for (let x = 70; x < 90; x++) {
            drawPixel(x, y, "#ff3b3b");
        }
    }

    for (let y = 80; y < 90; y++) {
        for (let x = 75; x < 85; x++) {
            drawPixel(x, y, "#800000");
        }
    }
}

/* ==========================
   CONTORNO NEGRO
========================== */

function drawOutline() {
    for (let y = 40; y < 110; y++) {
        drawPixel(50, y, "#000000");
        drawPixel(130, y, "#000000");
    }

    for (let x = 50; x < 130; x++) {
        drawPixel(x, 40, "#000000");
        drawPixel(x, 110, "#000000");
    }
}

/* ==========================
   RENDER
========================== */

function renderImage() {
    drawBackground();
    drawHair();
    drawFace();
    drawEyes();
    drawOutline();
}

renderImage();