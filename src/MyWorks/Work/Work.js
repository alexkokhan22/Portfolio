import React from "react";
import style from "./Work.module.scss"


export function Work(props) {
    return (
        <div className={style.workBlock}>
            <div className={style.icon} style={props.style}>
                <button className={style.watch}>смотреть</button>
            </div>
            <div className={style.title}>
                <h5>{props.title}</h5>
            </div>
            <span>{props.description}</span>
        </div>
    )
}

