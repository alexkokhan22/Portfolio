import React from "react";
import style from "./Skills.module.scss"
import styleContainer from "../common/style/Container.module.css";
import {Skill} from "./Skill/Skill";
import {TitleH2} from "../common/components/title/TitleH2";
import htmlCSS from "../assets/img/bb382732698265.Y3JvcCw3MzksNTc4LDE3MCw3MQ.jpg"
import js from "../assets/img/kissclipart-javascript-clipart-computer-icons-clip-art-15369d6601ed0d8e.jpg"
import react from "../assets/img/pngtree-science-icon-png-image_2036775.jpg"
import redux from "../assets/img/2074158.jpg"




export function Skills() {
    const htmlCssImg = {
        backgroundImage: `url(${htmlCSS})`
    };

    const jsImg = {
        backgroundImage: `url(${js})`
    };

    const reactImg = {
        backgroundImage: `url(${react})`
    };

    const reduxImg = {
        backgroundImage: `url(${redux})`
    };

    return (
        <div className={style.skillsBlock}>
            <div className= {`${styleContainer.container} ${style.skillsContainer}`}>
                <TitleH2 value={'MY Skills'}/>
                <div className={style.skills}>
                    <Skill
                        title={'HTML / CSS'}
                        style={htmlCssImg}
                    />
                    <Skill
                        title={'JS / TS'}
                        style={jsImg}
                    />
                    <Skill
                        title={'REACT'}
                        style={reactImg}
                    />
                    <Skill
                        title={'REDUX'}
                        style={reduxImg}
                    />

                </div>
            </div>


        </div>
    )
}