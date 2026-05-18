// ============================================
// Kanji Handwriting Practice Canvas
// ============================================

const canvas = document.getElementById('handwritingCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let strokesHistory = [];
let currentStroke = [];

function initHandwriting() {
    // Set internal resolution based on CSS size
    canvas.width = 300;
    canvas.height = 300;

    ctx.strokeStyle = '#1e293b'; // Dark blue/gray (like ink)
    ctx.lineWidth = 6;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    clearCanvas();
}

function startDrawing(e) {
    isDrawing = true;
    currentStroke = [];
    draw(e);
}

function stopDrawing() {
    if (isDrawing) {
        strokesHistory.push([...currentStroke]);
    }
    isDrawing = false;
    ctx.beginPath();
}

function draw(e) {
    if (!isDrawing) return;

    // Support mouse and touch
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;

    currentStroke.push({ x, y });

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    strokesHistory = [];
    currentStroke = [];
}

function undoLastStroke() {
    strokesHistory.pop();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    strokesHistory.forEach(stroke => {
        ctx.beginPath();
        stroke.forEach((point, i) => {
            if (i === 0) ctx.moveTo(point.x, point.y);
            else ctx.lineTo(point.x, point.y);
        });
        ctx.stroke();
    });
}

// Event Listeners
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseleave', stopDrawing);

canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    startDrawing(e);
}, { passive: false });
canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    draw(e);
}, { passive: false });
canvas.addEventListener('touchend', stopDrawing);

document.getElementById('clearCanvas').addEventListener('click', clearCanvas);
document.getElementById('undoCanvas').addEventListener('click', undoLastStroke);

window.initHandwriting = initHandwriting;
