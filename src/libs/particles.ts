export default function particles(canvasRef: HTMLCanvasElement, ctxRef: CanvasRenderingContext2D) {
    const canvas = canvasRef;
    const innerHeight = canvasRef.offsetHeight;
    const innerWidth = canvasRef.offsetWidth;
    canvas.width = innerWidth;
    canvas.height = innerHeight
    const ctx = ctxRef;
    const oldSize = {
        width: innerWidth,
        height: innerHeight,
        size: 150
    }

    const particles: any[] = [];
    const properties = {
        bgColor: 'rgb(17, 17, 19)',
        particleRadius: 0,
        particleCount: 30,
        speedX: .5,
        speedY: .5,
        lineLength: oldSize.size * 2.5
    };


    const reDraw = (pos: any) => {
        pos.velocityX = (
            (pos.x + pos.velocityX > oldSize.width && pos.velocityX > 0) ||
            (pos.x + pos.velocityX < 0 && pos.velocityX < 0)) ? pos.velocityX * -1 : pos.velocityX;
        pos.velocityY = (
            (pos.y + pos.velocityY > oldSize.height && pos.velocityY > 0) ||
            (pos.y + pos.velocityY < 0 && pos.velocityY < 0)) ? pos.velocityY * -1 : pos.velocityY;

        pos.x += pos.velocityX;
        pos.y += pos.velocityY;

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, properties.particleRadius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }


    function drawLines() {
        let x1, y1, x2, y2, length;
        for (let i in particles) {
            for (let j in particles) {
                x1 = particles[i].x;
                y1 = particles[i].y;
                x2 = particles[j].x;
                y2 = particles[j].y;
                length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                if (length < properties.lineLength) {
                    ctx.lineWidth = 0.01;
                    ctx.strokeStyle = `rgb(255, 255, 255)`;
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.closePath();
                    ctx.stroke();
                }
            }
        }
    }

    function reDrawBackground() {
        ctx.fillStyle = properties.bgColor;
        ctx.fillRect(0, 0, oldSize.width, oldSize.height);
    }

    function reDrawParticles() {
        for (let i in particles) {
            reDraw(particles[i]);
        }
    }

    function loop() {
        reDrawBackground();
        reDrawParticles();
        drawLines();
        requestAnimationFrame(loop);
    }

    for (let i = 0; i < properties.particleCount; i++) {
        particles.push({
            x: Math.random() * oldSize.width - (oldSize.width - innerWidth),
            y: Math.random() * oldSize.height - (oldSize.height - innerHeight),
            velocityX: Math.random() * (properties.speedX * 2) - properties.speedX,
            velocityY: Math.random() * (properties.speedY * 2) - properties.speedY
        });
    }

    loop();
}