🎭 EXULTACIÓN — Experiencia Visual Interactiva con Canvas

EXULTACIÓN es una experiencia visual desarrollada con HTML5, CSS3 y JavaScript puro, utilizando el elemento <canvas> como motor principal de renderizado. El proyecto construye una escena dinámica inspirada en el circo clásico, el teatro y el azar, combinando elementos escénicos con símbolos de juego y recursos visuales místicos para crear una puesta en escena digital intensa y envolvente.

La propuesta estética se basa en la idea del espectáculo como centro narrativo. El fondo oscuro establece una atmósfera profunda y dramática, mientras los telones ondulados con bordes dorados refuerzan la referencia teatral. La iluminación radial simula reflectores de escenario que dirigen la atención hacia el centro de la composición. Elementos como estrellas, confeti, cartas, fichas y dados se distribuyen de manera pseudoaleatoria, generando una sensación de caos controlado. En el núcleo visual se encuentran dos máscaras teatrales, representando la dualidad entre lo trágico y lo cómico, funcionando como punto focal y símbolo conceptual del proyecto.

A nivel técnico, el núcleo del sistema se construye a partir del contexto 2D del canvas:
const canvas = document.getElementById('chaosCanvas');
const ctx = canvas.getContext('2d');
La renderización completa se ejecuta mediante la función principal drawApp(), llamada al cargarse la página con:window.onload = drawApp;
La función drawApp() organiza el orden de dibujo y controla la composición general. Cada elemento visual está encapsulado en funciones independientes, lo que permite mantener una arquitectura modular y escalable. Entre estas funciones se encuentran: drawStage() para el fondo y suelo con gradientes; drawCurtains() para los telones laterales y superiores; drawSpotlights() para la iluminación; drawStar() y drawConfetti() para los elementos decorativos dinámicos; drawSuitSymbol() y drawDetailedCard() para las cartas; draw3DDice() para los dados; drawPremiumChips() para las fichas apiladas; y drawDetailedMask() para las máscaras centrales.

Gran parte de la escena se genera de forma procedural utilizando Math.random(), lo que permite variar posiciones, tamaños, rotaciones, colores y cantidades de elementos en cada carga. Esto garantiza que la composición nunca sea exactamente igual, reforzando el concepto de azar y espectáculo impredecible.

El proyecto también integra interactividad básica mediante manipulación del DOM. Incluye una pantalla de introducción que se oculta al presionar un botón usando un addEventListener, frases aleatorias que cambian en cada carga para reforzar la narrativa conceptual, y una animación activada por scroll que detecta cuándo una sección entra en el viewport para aplicar clases dinámicas.

En términos de composición visual, la escena sigue principios claros: jerarquía central, saturación periférica, profundidad mediante sombras y gradientes, iluminación dirigida estratégicamente y equilibrio entre simetría estructural y caos decorativo. Todo está calculado para parecer desbordado, pero responde a un orden interno.

El objetivo del proyecto es explorar el renderizado manual con la Canvas API, la construcción de una identidad visual fuerte sin el uso de librerías externas y la integración entre narrativa conceptual y diseño técnico. EXULTACIÓN no es solo una demostración de código; es una construcción escénica digital donde el espectáculo, el azar y la dualidad emocional conviven en un mismo espacio visual.

Tecnologías utilizadas: HTML5, CSS3, JavaScript (Vanilla) y Canvas 2D API. Sin frameworks ni librerías externas.