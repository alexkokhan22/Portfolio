import React from "react";
import style from "./titleH2.module.css";


export const TitleH2 = (props) => {
    return (
        <div className={style.title}>
            <h2>{props.value}</h2>
        </div>
    )
}