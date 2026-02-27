 const canvas = document.getElementById('chaosCanvas');
        const ctx = canvas.getContext('2d');

        function drawApp() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 1. ESCENARIO
            drawStage();

            // 2. TELONES
            drawCurtains();

            // 3. LUCES DE ESCENARIO
            drawSpotlights();

            // 4. ELEMENTOS DE AMBIENTE (Estrellas y Confeti)
            for(let i=0; i<40; i++) {
                drawStar(Math.random()*canvas.width, Math.random()*canvas.height, Math.random()*2+1, 5, 2);
            }
            drawConfetti(100);

            // 5. CAOS DE AZAR
            
            // Símbolos de la baraja flotantes
            const suits = ['heart', 'spade', 'diamond', 'club'];
            for(let i=0; i<25; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const size = 20 + Math.random() * 40;
                const suit = suits[Math.floor(Math.random() * suits.length)];
                const color = (suit === 'heart' || suit === 'diamond') ? 'rgba(231, 76, 60, 0.2)' : 'rgba(255, 255, 255, 0.1)';
                drawSuitSymbol(x, y, size, suit, color);
            }

            // Lluvia de cartas con J, Q, K y A
            const cardValues = ['A', 'J', 'Q', 'K'];
            for(let i=0; i<20; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * (canvas.height - 100);
                if (x > 300 && x < 700 && y > 200 && y < 450) continue; 
                
                const value = cardValues[Math.floor(Math.random() * cardValues.length)];
                drawDetailedCard(x, y, Math.random()*Math.PI, i%2===0?"#e74c3c":"#2c3e50", value);
            }

            // Pilas de fichas
            const chipPositions = [
                [100, 600], [180, 640], [280, 610], [380, 650],
                [620, 650], [720, 620], [820, 640], [900, 600],
                [500, 660], [450, 630], [550, 630]
            ];
            chipPositions.forEach(pos => {
                drawPremiumChips(pos[0], pos[1], Math.floor(Math.random()*6 + 3));
            });

            // Dados
            for(let i=0; i<10; i++) {
                const x = 50 + (Math.random() * 900);
                draw3DDice(x, 560 + (Math.random()*80), 35 + Math.random()*15);
            }

            // 6. MÁSCARAS CENTRALES
            drawDetailedMask(350, 300, false, "#f0f0f0");
            drawDetailedMask(650, 300, true, "#ffdf00");
        }

        function drawStage() {
            ctx.fillStyle = "#080812";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            const grad = ctx.createLinearGradient(0, 550, 0, 700);
            grad.addColorStop(0, "#2a1b12");
            grad.addColorStop(1, "#050302");
            ctx.fillStyle = grad;
            ctx.fillRect(0, 550, canvas.width, 150);
        }

        function drawCurtains() {
            ctx.fillStyle = "#660000"; 
            for(let i=0; i<5; i++) {
                const offset = i*50;
                ctx.beginPath();
                ctx.moveTo(offset, 0);
                ctx.quadraticCurveTo(150 + offset, 350, 80 + offset, 700);
                ctx.lineTo(0, 700); ctx.lineTo(0, 0); ctx.fill();
                ctx.beginPath();
                ctx.moveTo(canvas.width - offset, 0);
                ctx.quadraticCurveTo(canvas.width - 150 - offset, 350, canvas.width - 80 - offset, 700);
                ctx.lineTo(canvas.width, 700); ctx.lineTo(canvas.width, 0); ctx.fill();
            }
        }

        function drawSuitSymbol(x, y, size, type, color) {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(Math.random() * Math.PI);
            ctx.fillStyle = color;
            ctx.font = `${size}px serif`;
            let symbol = '';
            if (type === 'heart') symbol = '♥';
            if (type === 'spade') symbol = '♠';
            if (type === 'diamond') symbol = '♦';
            if (type === 'club') symbol = '♣';
            ctx.fillText(symbol, -size/2, size/2);
            ctx.restore();
        }

        function drawConfetti(count) {
            const colors = ['#f1c40f', '#e74c3c', '#3498db', '#9b59b6', '#2ecc71', '#ffffff'];
            for(let i=0; i<count; i++) {
                ctx.save();
                ctx.translate(Math.random() * canvas.width, Math.random() * canvas.height);
                ctx.rotate(Math.random() * Math.PI);
                ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
                ctx.globalAlpha = 0.5;
                ctx.fillRect(0, 0, 4 + Math.random() * 5, 4 + Math.random() * 5);
                ctx.restore();
            }
        }

        function drawDetailedMask(x, y, isHappy, color) {
            ctx.save();
            ctx.translate(x, y);
            ctx.shadowBlur = 30; ctx.shadowColor = "black";
            const maskGrad = ctx.createRadialGradient(-20, -30, 10, 0, 0, 100);
            maskGrad.addColorStop(0, "white");
            maskGrad.addColorStop(1, color);
            ctx.fillStyle = maskGrad;
            ctx.beginPath(); 
            ctx.ellipse(0, 0, 90, 120, 0, 0, Math.PI*2); 
            ctx.fill();
            ctx.shadowBlur = 0;
            ctx.strokeStyle = "rgba(0,0,0,0.8)";
            ctx.lineWidth = 2;
            ctx.stroke();

            // Rombos de bufón
            ctx.fillStyle = isHappy ? "rgba(0,150,255,0.2)" : "rgba(255,0,0,0.2)";
            ctx.beginPath();
            ctx.moveTo(-40, -60); ctx.lineTo(-25, -80); ctx.lineTo(-10, -60); ctx.lineTo(-25, -40); ctx.closePath(); ctx.fill();
            ctx.beginPath();
            ctx.moveTo(40, -60); ctx.lineTo(25, -80); ctx.lineTo(10, -60); ctx.lineTo(25, -40); ctx.closePath(); ctx.fill();

            ctx.fillStyle = "#111";
            if(isHappy) {
                ctx.beginPath(); ctx.moveTo(-50, -20); ctx.quadraticCurveTo(-30, -45, -10, -20); ctx.stroke();
                ctx.beginPath(); ctx.moveTo(50, -20); ctx.quadraticCurveTo(30, -45, 10, -20); ctx.stroke();
                ctx.fillStyle = "rgba(255,100,100,0.3)";
                ctx.beginPath(); ctx.arc(-45, 10, 15, 0, Math.PI*2); ctx.fill();
                ctx.beginPath(); ctx.arc(45, 10, 15, 0, Math.PI*2); ctx.fill();
                ctx.lineWidth = 4; ctx.strokeStyle = "#111";
                ctx.beginPath(); ctx.arc(0, 30, 50, 0.3, Math.PI-0.3); ctx.stroke();
            } else {
                ctx.beginPath(); ctx.ellipse(-30, -15, 18, 10, 0.2, 0, Math.PI*2); ctx.fill();
                ctx.beginPath(); ctx.ellipse(30, -15, 18, 10, -0.2, 0, Math.PI*2); ctx.fill();
                ctx.fillStyle = "#3498db";
                ctx.beginPath(); ctx.arc(-30, 5, 5, 0, Math.PI); ctx.lineTo(-30, 20); ctx.fill();
                ctx.lineWidth = 4; ctx.strokeStyle = "#111";
                ctx.beginPath(); ctx.arc(0, 85, 40, 0, Math.PI, true); ctx.stroke();
            }
            ctx.restore();
        }

        function drawSpotlights() {
            const lights = [200, 500, 800];
            lights.forEach(x => {
                const grad = ctx.createRadialGradient(x, 0, 50, x, 400, 600);
                grad.addColorStop(0, "rgba(255,255,220,0.2)");
                grad.addColorStop(1, "rgba(255,255,220,0)");
                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.moveTo(x-30, 0); ctx.lineTo(x+30, 0);
                ctx.lineTo(x+300, 700); ctx.lineTo(x-300, 700);
                ctx.fill();
            });
        }

        function drawDetailedCard(x, y, rot, color, value = "A") {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rot);
            
            // Sombra proyectada
            ctx.shadowBlur = 8; ctx.shadowColor = "rgba(0,0,0,0.4)";
            
            // Cuerpo de la carta
            ctx.fillStyle = "#fff";
            ctx.beginPath(); ctx.roundRect(-35, -50, 70, 100, 6); ctx.fill();
            ctx.shadowBlur = 0;
            
            // Borde interno decorativo
            ctx.strokeStyle = color; ctx.lineWidth = 1;
            ctx.strokeRect(-31, -46, 62, 92);
            
            // Valor de la carta (Esquina superior e inferior)
            ctx.fillStyle = color;
            ctx.font = "bold 16px serif";
            ctx.fillText(value, -26, -26);
            
            ctx.save();
            ctx.rotate(Math.PI);
            ctx.fillText(value, -26, -26);
            ctx.restore();
            
            // Arte central
            if (value === "A") {
                ctx.font = "24px serif";
                ctx.fillText("♠", -10, 8);
            } else {
                // Dibujo simplificado de corona para J, Q, K
                ctx.beginPath();
                ctx.moveTo(-12, 10);
                ctx.lineTo(-12, -8);
                ctx.lineTo(-6, 2);
                ctx.lineTo(0, -10);
                ctx.lineTo(6, 2);
                ctx.lineTo(12, -8);
                ctx.lineTo(12, 10);
                ctx.closePath();
                ctx.fill();
            }
            
            ctx.restore();
        }

        function draw3DDice(x, y, size) {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(Math.random());
            ctx.fillStyle = "#fdfdfd";
            ctx.beginPath(); ctx.roundRect(0, 0, size, size, 6); ctx.fill();
            ctx.fillStyle = "#e74c3c";
            ctx.beginPath(); ctx.arc(size/2, size/2, size*0.12, 0, Math.PI*2); ctx.fill();
            ctx.restore();
        }

        function drawPremiumChips(x, y, count) {
            const colors = ["#27ae60", "#e67e22", "#2980b9"];
            const color = colors[Math.floor(Math.random()*colors.length)];
            for(let i=0; i<count; i++) {
                const cy = y - (i*8);
                ctx.fillStyle = "#333";
                ctx.beginPath(); ctx.ellipse(x, cy, 35, 14, 0, 0, Math.PI*2); ctx.fill();
                ctx.fillStyle = color;
                ctx.beginPath(); ctx.ellipse(x, cy-2, 32, 12, 0, 0, Math.PI*2); ctx.fill();
                ctx.strokeStyle = "#fff"; ctx.lineWidth = 1; ctx.setLineDash([5, 5]);
                ctx.beginPath(); ctx.ellipse(x, cy-2, 25, 9, 0, 0, Math.PI*2); ctx.stroke();
                ctx.setLineDash([]);
            }
        }

        function drawStar(x, y, r, p, m) {
            ctx.save();
            ctx.translate(x, y);
            ctx.beginPath();
            ctx.moveTo(0, 0-r);
            for (let i = 0; i < p; i++) {
                ctx.rotate(Math.PI / p);
                ctx.lineTo(0, 0 - (r * m));
                ctx.rotate(Math.PI / p);
                ctx.lineTo(0, 0 - r);
            }
            ctx.fillStyle = "rgba(255,255,200,0.5)";
            ctx.fill();
            ctx.restore();
        }

        window.onload = drawApp;