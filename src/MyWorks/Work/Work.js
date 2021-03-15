import React from "react";
import style from "./Work.module.css"



export function Work(props) {
    return (
        <div className={style.skillBlock}>
            <div className={style.icon}>
                <button className={style.watch}>Смотреть</button>
            </div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}