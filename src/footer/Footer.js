import React from "react";
import style from "./Footer.module.css"
import styleContainer from "../common/style/Container.module.css";
import {Form} from "../contacts/form/Form";
import {Icon} from "./icon/Icon";



export function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Alex Kokhan</h2>
                <div className={style.iconContainer}>
                    <Icon/>
                    <Icon/>
                    <Icon/>
                    <Icon/>
                </div>
                <span className={style.span}>Все права защищены © 2021</span>
            </div>


        </div>
    )
}