import React from "react";
import style from "./Telework.module.css"
import styleContainer from "../common/style/Container.module.css";



export function Telework() {
    return (
        <div className={style.teleworkBlock}>
            <div className={`${styleContainer.container} ${style.teleworkContainer}`}>
                <span className={style.title}>Рассматриваю варианты удаленной работы</span>
                <button className={style.send}>Нанять меня</button>
            </div>


        </div>
    )
}