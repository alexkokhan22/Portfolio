import React from "react";
import style from "./Icon.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faVk} from "@fortawesome/free-brands-svg-icons";



export function Icon(props) {
    return (
        <div className={style.iconBlock}>
            <FontAwesomeIcon icon={props.icon}/>
        </div>
    )
}