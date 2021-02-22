import { useEffect } from 'react';
import '../css/BackgroundCircles.css';

function BackgroundCircles() {
    var bottomOfScreen = window.innerHeight;
    var rightOfScreen = window.innerWidth;

    useEffect(() => {
        runCircleAnimation(1);
        runCircleAnimation(2);
        runCircleAnimation(3);
        setInterval(() => {
            runCircleAnimation(1);
        }, 11000);
        setInterval(() => {
            runCircleAnimation(2);
        }, 12000);
        setInterval(() => {
            runCircleAnimation(3);
        }, 13000);
    });

    const runCircleAnimation = (num) => {
        var circle = document.createElement('div');
        document.querySelector('.circle-container').appendChild(circle);
        var maxDiameter = 50;
        var minDiameter = 20;
        var randomDiameter = Math.floor(Math.random() * maxDiameter) + minDiameter;
        circle.style.width = `${randomDiameter}px`;
        circle.style.height = `${randomDiameter}px`;

        var randomLeft = Math.floor(Math.random() * (rightOfScreen)) + (randomDiameter / 2);
        var randomTop = Math.floor(Math.random() * (bottomOfScreen)) + (randomDiameter / 2);

        circle.style.left = `${randomLeft}px`;
        circle.style.top = `${randomTop}px`;

        circle.id = `circle${num}`;
        circle.classList.add('floating');
        circle.classList.add('pulse');
        if (num === 1) {
            setTimeout(() => {
                circle.remove();
            }, 11000);
        }
        else if (num === 2) {
            setTimeout(() => {
                circle.remove();
            }, 12000);
        }
        else {
            setTimeout(() => {
                circle.remove();
            }, 13000);
        }
    }

    return (
        <div className="circle-container">
            {/* <div className="floating pulse" id="circle1"></div>
            <div className="floating pulse" id="circle2"></div>
            <div className="floating pulse" id="circle3"></div> */}
        </div>
    );
}

export default BackgroundCircles;