function randRange(min, max) {
    return min + Math.floor(Math.random() * ((max - min) + 1));
}

function randColor(alpha=1) {
    return `rgba(
        ${randRange(0, 255)},
        ${randRange(0, 255)},
        ${randRange(0, 255)},
        ${alpha}
    )`;
}