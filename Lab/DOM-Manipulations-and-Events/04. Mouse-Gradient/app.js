function attachGradientEvents() {
    const gradientField =  document.getElementById('gradient');

    gradientField.addEventListener('mousemove', gradient)

    const result = document.getElementById('result');

    function gradient(ev) {
        const coordinateX = ev.offsetX;
        const boxWidth = gradientField.clientWidth;
        const percent = Math.floor( coordinateX / boxWidth * 100);
        result.textContent = `${percent}%` ;
    }
}