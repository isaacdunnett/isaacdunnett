import { useRef } from 'react';
import React, { useState, useEffect } from 'react';
import '../css/Heading.css';
import me from '../img/profile.png';

function Heading() {

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