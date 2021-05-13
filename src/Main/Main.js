import React from "react";
import style from "./Main.module.scss"
import styleContainer from "../common/style/Container.module.css"


export function Main() {
    return (
        <div className={style.main}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <h5>HELLO, MY NAME IS</h5>
                    <h1>ALEX KOKHAN</h1>
                    <p>FRONTEND DEVELOPER</p>
                </div>
                <div className={style.photo}></div>
            </div>

        </div>
    )
}