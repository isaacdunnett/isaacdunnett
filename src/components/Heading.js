import { useState, useEffect } from 'react';
import '../css/Heading.css';
import img1 from '../img/7FAF3C07-7A77-4276-AA70-6CFCD4AE97C9_1_105_c.jpeg';
import img2 from '../img/1223B364-965D-41DF-AE28-A636FF0BD163_4_5005_c.jpeg';
import img3 from '../img/60291EB9-8262-443D-87D1-A90BEB4E2BBF_1_201_a.jpg';

function Heading() {

    const [profileImg, setProfileImg] = useState(img2);

    const setRandomImg = () => {
        var r = Math.floor(Math.random() * 3) + 1;
        console.log(r);
        switch (r) {
            case 1:
                setProfileImg(img1);
                break;
            case 2:
                setProfileImg(img2);
                break;
            case 3:
                setProfileImg(img3);
                break;
            default:
                setProfileImg(img3);
        }
    }

    const changeImg = () => {
        if (profileImg == img3) {
            setProfileImg(img1)
        }
        else if (profileImg == img2) {
            setProfileImg(img3);
        }
        else {
            setProfileImg(img3);
        }
    }

    useEffect(() => {
        setRandomImg();
    });

    return (
        <section className="heading">
            <div className="flex-container">
                <div className="title-container">
                    <h1>isaac dunnett</h1>
                    <h2>Software Developer</h2>
                </div>
                <div className="background-circle" onClick={changeImg} style={{
                    backgroundImage: `url(${profileImg})`
                }}>
                </div>
            </div>
        </section >
    );
}

export default Heading;