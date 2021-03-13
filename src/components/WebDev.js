import '../css/WebDev.css'
import React, { useEffect } from 'react'
import { Parallax } from 'react-parallax';
import { ReactComponent as AlertIcon } from '../icons/alert-icon.svg'

const WebDev = () => {

    useEffect(() => {
        let root = document.getElementById('root')
        window.addEventListener("scroll", () => {
            console.log(root.scrollTop)
        });
    });

    const jumpingManImg = "https://images.unsplash.com/photo-1530750463537-af1c747d8d73?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80";
    const jumpingManImgStyle = {
        top: "-20%"
    }

    return (
        <>
            <Parallax bgImage={jumpingManImg} strength={300} parent={document.getElementById('root')} bgImageStyle={jumpingManImgStyle} className="parallax">
                <section className="web-dev-s1">
                    <div className="title-container">
                        <p>Introducing</p>
                        <h1>Isaac's Designs</h1>
                    </div>
                </section>
            </Parallax>
            <br></br>
            <section style={{
                color: "white",
                width: "100%",
                textAlign: "center"
            }}>
                <AlertIcon id="alert-icon"></AlertIcon>
                This page is currently under construction.
            </section>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}

export default WebDev;