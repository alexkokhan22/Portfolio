import React from "react";
import style from "./Form.module.css"

export function Form() {
    return (
        <div>
            <form className={style.form}>
                <input className={style.input}/>
                <input className={style.input}/>
                <textarea className={style.textarea}/>
            </form>
        </div>
    )
}