import React from "react";
import style from "./Footer.module.scss"
import styleContainer from "../common/style/Container.module.css";
import {Icon} from "./icon/Icon";
import {TitleH2} from "../common/components/title/TitleH2";
import {faInstagram, faLinkedin, faVk, faYandex} from "@fortawesome/free-brands-svg-icons";


export function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={style.iconContainer}>
                    <Icon icon={faVk}/>
                    <Icon icon={faInstagram}/>
                    <Icon icon={faLinkedin}/>
                    <Icon icon={faYandex}/>
                </div>
                <span className={style.span}>All rights reserved © 2021</span>
            </div>


        </div>
    )
}