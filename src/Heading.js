import { useRef } from 'react';
import React, { useState, useEffect } from 'react';
import './Heading.css';
import me from './img/profile.png';

function Heading() {

    useEffect(() => {
        const bgc = document.querySelector(".background-circle");
        const el = document.querySelector(".me");

        bgc.addEventListener("mousemove", (e) => {
            if (e.offsetY < 100) {
                el.style.top = -(e.offsetY) + "px";
            }
            else {
                el.style.top = -(e.offsetY - 100) + "px";
            }
            if (e.offsetX < 100) {
                console.log("hi");
                el.style.left = -(e.offsetX) + "px";
            }
            else {
                el.style.left = -(e.offsetX - 200) + "px";
            }
        });

        bgc.addEventListener("mouseleave", (e) => {
            el.style.left = "17px";
            el.style.top = "-40px";
        });
    });


    return (
        <section className="heading">
            <h1>isaac dunnett</h1>
            <div className="background-circle">
                <img src={me} alt="" className="me" />
            </div>
        </section >
    );
}

export default Heading;