document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('frierenCanvas');
    const ctx = canvas.getContext('2d');

    // Función para dibujar una estrella (para los hechizos o estrellas en el cielo)
    function drawStar(cx, cy, spikes, outerRadius, innerRadius, color) {
        let rot = Math.PI / 2 * 3;
        let x = cx;
        let y = cy;
        let step = Math.PI / spikes;

        ctx.beginPath();
        ctx.moveTo(cx, cy - outerRadius);
        for (let i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            ctx.lineTo(x, y);
            rot += step;

            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            ctx.lineTo(x, y);
            rot += step;
        }
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
        ctx.strokeStyle = 'rgba(0,0,0,0.2)';
        ctx.stroke();
    }

    // Fondo del cielo y montañas
    ctx.fillStyle = '#87CEEB'; // Azul claro para el cielo
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Montañas
    ctx.beginPath();
    ctx.moveTo(0, canvas.height * 0.7);
    ctx.lineTo(canvas.width * 0.2, canvas.height * 0.4);
    ctx.lineTo(canvas.width * 0.4, canvas.height * 0.75);
    ctx.lineTo(canvas.width * 0.6, canvas.height * 0.3);
    ctx.lineTo(canvas.width * 0.8, canvas.height * 0.6);
    ctx.lineTo(canvas.width, canvas.height * 0.5);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.closePath();
    ctx.fillStyle = '#654321'; // Marrón oscuro para las montañas
    ctx.fill();
    ctx.strokeStyle = '#4A2F0F';
    ctx.stroke();

    // Nieve en las montañas
    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.2, canvas.height * 0.4);
    ctx.lineTo(canvas.width * 0.22, canvas.height * 0.45);
    ctx.lineTo(canvas.width * 0.18, canvas.height * 0.47);
    ctx.closePath();
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.6, canvas.height * 0.3);
    ctx.lineTo(canvas.width * 0.62, canvas.height * 0.35);
    ctx.lineTo(canvas.width * 0.58, canvas.height * 0.37);
    ctx.closePath();
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();

    // Hierba en primer plano
    ctx.fillStyle = '#6B8E23'; // Verde oliva para la hierba
    ctx.fillRect(0, canvas.height * 0.7, canvas.width, canvas.height * 0.3);

    // Camino
    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.1, canvas.height);
    ctx.lineTo(canvas.width * 0.3, canvas.height * 0.7);
    ctx.lineTo(canvas.width * 0.7, canvas.height * 0.7);
    ctx.lineTo(canvas.width * 0.9, canvas.height);
    ctx.closePath();
    ctx.fillStyle = '#D2B48C'; // Marrón claro para el camino
    ctx.fill();
    ctx.strokeStyle = '#A0522D';
    ctx.stroke();

    // Sol o Luna (dependiendo del ambiente, aquí será un sol suave)
    ctx.beginPath();
    ctx.arc(canvas.width * 0.8, canvas.height * 0.15, 40, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = '#FFD700'; // Dorado
    ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.2)';
    ctx.stroke();

    // Nubes (rectángulos y arcos combinados)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath();
    ctx.arc(100, 100, 30, 0, Math.PI * 2);
    ctx.arc(130, 100, 25, 0, Math.PI * 2);
    ctx.arc(160, 100, 30, 0, Math.PI * 2);
    ctx.arc(145, 80, 20, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(500, 120, 25, 0, Math.PI * 2);
    ctx.arc(530, 120, 30, 0, Math.PI * 2);
    ctx.arc(560, 120, 25, 0, Math.PI * 2);
    ctx.arc(545, 100, 20, 0, Math.PI * 2);
    ctx.fill();

    // Árboles (en la distancia)
    // Troncos
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(50, canvas.height * 0.6, 10, 50);
    ctx.fillRect(150, canvas.height * 0.65, 10, 40);
    ctx.fillRect(700, canvas.height * 0.6, 10, 50);
    ctx.fillRect(600, canvas.height * 0.65, 10, 40);

    // Copas (triángulos)
    ctx.fillStyle = '#228B22';
    ctx.beginPath();
    ctx.moveTo(55, canvas.height * 0.5);
    ctx.lineTo(30, canvas.height * 0.65);
    ctx.lineTo(80, canvas.height * 0.65);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(155, canvas.height * 0.55);
    ctx.lineTo(130, canvas.height * 0.7);
    ctx.lineTo(180, canvas.height * 0.7);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(705, canvas.height * 0.5);
    ctx.lineTo(680, canvas.height * 0.65);
    ctx.lineTo(730, canvas.height * 0.65);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(605, canvas.height * 0.55);
    ctx.lineTo(580, canvas.height * 0.7);
    ctx.lineTo(630, canvas.height * 0.7);
    ctx.closePath();
    ctx.fill();

    // Rocas en el camino (círculos y elipses)
    ctx.fillStyle = '#808080';
    ctx.beginPath();
    ctx.arc(canvas.width * 0.35, canvas.height * 0.8, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(canvas.width * 0.6, canvas.height * 0.85, 15, 8, Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(canvas.width * 0.25, canvas.height * 0.9, 8, 0, Math.PI * 2);
    ctx.fill();

    // Pequeñas flores en la hierba (círculos y líneas para pétalos)
    ctx.fillStyle = '#FFC0CB'; // Rosa
    ctx.beginPath();
    ctx.arc(canvas.width * 0.1, canvas.height * 0.75, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(canvas.width * 0.9, canvas.height * 0.8, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(canvas.width * 0.45, canvas.height * 0.95, 3, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#FF4500'; // Naranja
    ctx.beginPath();
    ctx.arc(canvas.width * 0.15, canvas.height * 0.85, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(canvas.width * 0.85, canvas.height * 0.75, 3, 0, Math.PI * 2);
    ctx.fill();

    // Silueta de Frieren (simplificada con rectángulos y círculos)
    const frierenX = canvas.width * 0.5 - 20; // Centrar
    const frierenY = canvas.height * 0.6;

    // Túnica (rectángulo principal)
    ctx.fillStyle = '#8B008B'; // Morado oscuro
    ctx.fillRect(frierenX, frierenY, 40, 100);

    // Brazos (rectángulos)
    ctx.fillRect(frierenX - 15, frierenY + 20, 15, 50);
    ctx.fillRect(frierenX + 40, frierenY + 20, 15, 50);

    // Cabeza (círculo)
    ctx.fillStyle = '#FFE4C4'; // Color piel
    ctx.beginPath();
    ctx.arc(frierenX + 20, frierenY - 10, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000000';
    ctx.stroke();

    // Pelo (arcos y líneas)
    ctx.fillStyle = '#D2B48C'; // Cabello claro
    ctx.beginPath();
    ctx.arc(frierenX + 20, frierenY - 15, 25, Math.PI * 0.75, Math.PI * 0.25);
    ctx.lineTo(frierenX + 45, frierenY - 5);
    ctx.lineTo(frierenX + 20, frierenY - 35);
    ctx.lineTo(frierenX - 5, frierenY - 5);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Cara simplificada (ojos: círculos, boca: línea)
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(frierenX + 10, frierenY - 15, 3, 0, Math.PI * 2);
    ctx.arc(frierenX + 30, frierenY - 15, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(frierenX + 20, frierenY - 5, 5, 0, Math.PI, false); // Media luna para la boca
    ctx.stroke();

    // Cinturón (rectángulo)
    ctx.fillStyle = '#A0522D';
    ctx.fillRect(frierenX, frierenY + 50, 40, 10);

    // Bastón (línea y círculo)
    ctx.strokeStyle = '#696969';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(frierenX + 50, frierenY + 70);
    ctx.lineTo(frierenX + 70, frierenY - 50);
    ctx.stroke();
    ctx.lineWidth = 1; // Resetear grosor

    ctx.fillStyle = '#FFD700'; // Dorado para la punta del bastón
    ctx.beginPath();
    ctx.arc(frierenX + 70, frierenY - 50, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000000';
    ctx.stroke();

    // Pequeñas estrellas o efectos de magia alrededor de Frieren
    drawStar(frierenX - 30, frierenY + 30, 5, 10, 5, '#FFFF00');
    drawStar(frierenX + 70, frierenY, 5, 8, 4, '#FF69B4');
    drawStar(frierenX + 55, frierenY - 30, 4, 7, 3, '#ADD8E6');

    // Múltiples rocas pequeñas para alcanzar más de 30 figuras
    for (let i = 0; i < 15; i++) {
        const rockX = Math.random() * canvas.width;
        const rockY = canvas.height * 0.7 + Math.random() * (canvas.height * 0.3);
        const rockSize = 5 + Math.random() * 10;
        ctx.fillStyle = `rgb(${100 + Math.random() * 50}, ${100 + Math.random() * 50}, ${100 + Math.random() * 50})`;
        ctx.beginPath();
        ctx.arc(rockX, rockY, rockSize, 0, Math.PI * 2);
        ctx.fill();
    }
});