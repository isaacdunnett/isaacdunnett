import { useEffect } from 'react';
import '../css/BackgroundCircles.css';

function BackgroundCircles() {

    var verticalDirections = [];
    var horizontalDirections = [];

    var bottomOfScreen = window.innerHeight;
    var rightOfScreen = window.innerWidth;

    var maxDiameter = 300;
    var minDiameter = 100;

    useEffect(() => {
        var cs = document.querySelectorAll(".floating");
        cs.forEach(c => {
            var randomDiameter = Math.floor(Math.random() * maxDiameter) + minDiameter;
            c.style.width = `${randomDiameter}px`;
            c.style.height = `${randomDiameter}px`;
            getRandomScreenLocation(c);
            // 1 = up, 2 = down
            var verticalDirection = Math.floor(Math.random() * 2) + 1;
            // 1 = left, 2 = right
            var horizontalDirection = Math.floor(Math.random() * 2) + 1;

            verticalDirections.push(verticalDirection);
            horizontalDirections.push(horizontalDirection);

        });
        window.requestAnimationFrame(loop);
    });

    const getRandomScreenLocation = (element) => {
        var maxDiameter = 300;
        var minDiameter = 100;
        var randomDiameter = Math.floor(Math.random() * maxDiameter) + minDiameter;

        var randomLeft = Math.floor(Math.random() * (rightOfScreen)) + (randomDiameter / 2);
        var randomTop = Math.floor(Math.random() * (bottomOfScreen)) + (randomDiameter / 2);

        element.style.left = `${randomLeft - 100}px`;
        element.style.top = `${randomTop - 100}px`;
    }

    function loop() {
        var cs = document.querySelectorAll(".floating");
        for (var i = 0; i < cs.length; i++) {
            var left = parseInt(cs[i].style.left.replace("px", ""));
            var top = parseInt(cs[i].style.top.replace("px", ""));
            console.log("v: " + verticalDirections[i])
            console.log("h: " + horizontalDirections[i])

            if (top <= 0) {
                verticalDirections[i] = 2;
            }
            else if (top >= bottomOfScreen) {
                verticalDirections[i] = 1;
            }

            if (left <= 0) {
                horizontalDirections[i] = 2;
            }
            else if (left >= rightOfScreen) {
                horizontalDirections[i] = 1;
            }

            if (verticalDirections[i] == 1) {
                top -= 1;
            }
            else {
                top += 1;
            }

            if (horizontalDirections[i] == 1) {
                left -= 1;
            }
            else {
                left += 1;
            }

            cs[i].style.top = `${top}px`;
            cs[i].style.left = `${left}px`;
        }

        window.requestAnimationFrame(loop);
    }

    return (
        <>
            <div className="floating"></div>
            <div className="floating"></div>
            <div className="floating"></div>
        </>
    );
}

export default BackgroundCircles;