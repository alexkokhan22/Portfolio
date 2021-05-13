import React from "react";
import style from "./Form.module.scss"

export function Form() {
    return (
        <div>
            <form className={style.form}>
                <input className={style.input} value={'Your Name'}/>
                <input className={style.input} value={'Your Email'}/>
                <textarea className={style.textarea} value={'Your Message'}/>
            </form>
        </div>
    )
}