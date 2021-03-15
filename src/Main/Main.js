import React from "react";
import style from "./Main.module.css"
import styleContainer from "../common/style/Container.module.css"


export function Main() {
    return (
        <div className={style.main}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi</span>
                    <h1>I am Alex</h1>
                    <p>React developer</p>
                </div>
                <div className={style.photo}></div>
            </div>

        </div>
    )
}