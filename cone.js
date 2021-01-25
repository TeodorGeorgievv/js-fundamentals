function cone(r, h) {
    let volume = (1 / 3) * Math.PI * Math.pow(r, 2) * h;
    console.log(`volume = ${volume.toFixed(4)} `);
    let surfaceArea = Math.PI * r * (r + Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2)));
    console.log(`area = ${surfaceArea.toFixed(4)}`);
}

cone(3.3, 7.8)