(function() {
    const numOfFlowers = 4;  // Number of tulips to generate
    const growGarden = () => {
        function getRandomArbitrary(min, max) {
            return Math.round(Math.random() * (max - min)) + min;
        }

        let positions = [];

        function getNum() {
            let pos = getRandomArbitrary(0, 100);
            for (let x = 0; x < positions.length; x++) {
                if (pos > positions[x] - 3 && pos < positions[x] + 3) {
                    return false;
                }
            }
            positions.push(pos);
        }

        while (positions.length < numOfFlowers) {
            getNum();
        }

        let more = setInterval(function() {
            let flwr = document.createElement('div');
            let dim = getRandomArbitrary(30, 80);  // Random dimension for tulip
            let leftPos = positions[0];
            positions.shift();

            // Add the tulip's structure here (replace the sunflwr class names with tulip class names)
            flwr.classList.add('tulip');
            flwr.innerHTML = `
                <div class="stem">
                    <div class="tulipHead">
                        <div class="tulipHair lightTulip lightTulip-1"></div>
                        <div class="tulipHair darkTulip darkTulip-1"></div>
                        <div class="tulipHair lightTulip lightTulip-2"></div>
                        <div class="tulipHair darkTulip darkTulip-2"></div>
                        <div class="tulipHair lightTulip lightTulip-3"></div>
                        <div class="tulipFace">
                            <div class="leftEye tulipEyes"></div>
                            <div class="rightEye tulipEyes"></div>
                            <div class="tulipSmile"></div>
                            <div class="leftBlush tulipBlush"></div>
                            <div class="rightBlush tulipBlush"></div>
                        </div>
                    </div>
                    <div class="rightTulipLeaf tulipLeaf leaf"></div>
                    <div class="leftTulipLeaf tulipLeaf leaf"></div>
                    <div class="rightStemLeaf stemLeaf leaf"></div>
                    <div class="leftStemLeaf stemLeaf leaf"></div>
                </div>`;

            // Randomize the tulip's position, dimensions, and saturation/brightness
            flwr.style.left = `${leftPos}vw`;
            flwr.style.height = `${dim}vmin`;
            flwr.style.width = `${dim}vmin`;
            flwr.style.zIndex = 100 - dim;  // Ensures smaller tulips appear behind
            flwr.style.filter = `saturate(${getRandomArbitrary(100, 130)}%) brightness(${getRandomArbitrary(90, 110)}%)`;  // Updated filter for better color
           
            // Append the new tulip to the body
            document.querySelector('body').appendChild(flwr);
        }, 150);

        // Stop generating flowers after a certain time
        setTimeout(function() {
            window.clearInterval(more);
        }, numOfFlowers * 150);
    }
    
    // Trigger flower growth on body click
    document.body.addEventListener('click', () => {
        growGarden();
    });
})();
