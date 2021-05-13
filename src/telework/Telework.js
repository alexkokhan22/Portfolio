import React from "react";
import style from "./Telework.module.scss"
import styleContainer from "../common/style/Container.module.css";
import {TitleH2} from "../common/components/title/TitleH2";


export function Telework() {
    return (
        <div className={style.teleworkBlock}>
            <div className={`${styleContainer.container} ${style.teleworkContainer}`}>
                <TitleH2 value={'I am considering the option of teleworking'}/>
                <button className={style.send}>HIRE ME</button>
            </div>
        </div>
    )
}