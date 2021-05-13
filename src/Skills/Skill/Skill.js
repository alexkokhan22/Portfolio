import React from "react";
import style from "./Skill.module.scss"



export function Skill(props) {
    return (
        <div className={style.skillBlock}>
            <div className={style.icon} style={props.style}></div>
            <div className={style.title}>
                <h5>{props.title}</h5>
            </div>
        </div>
    )
}
