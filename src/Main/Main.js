import React from 'react'
import styles from './Main.module.scss';
import photo from '../assets/images/gallery-photo-8.png'
import Tilt from 'react-tilt'
import ReactTypingEffect from 'react-typing-effect';


function Main() {
    return (
        <div className={styles.mainBlock} id='home'>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <h5>Hello, my name is</h5>
                    <h1>Alexander Kokhan</h1>
                    <ReactTypingEffect
                        text={["Front-end Developer"]}
                    />
                </div>
                <div className={styles.photo}>
                    <Tilt options={{max: 25}}>
                        <img src={photo} alt="it's me"/>
                    </Tilt>
                </div>
            </div>
        </div>
    );
}

export default Main;