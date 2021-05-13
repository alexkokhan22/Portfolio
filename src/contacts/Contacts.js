import React from "react";
import style from "./Contacts.module.scss"
import styleContainer from "../common/style/Container.module.css";
import {Form} from "./form/Form";
import {TitleH2} from "../common/components/title/TitleH2";


export function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <TitleH2 value={'Contacts'}/>
                <div className={style.formContainer}>
                    <Form/>
                </div>
                <button type={"submit"} className={style.send}>SEND MESSAGE</button>
            </div>
        </div>
    )
}