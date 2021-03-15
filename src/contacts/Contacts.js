import React from "react";
import style from "./Contacts.module.css"
import styleContainer from "../common/style/Container.module.css";
import {Form} from "./form/Form";


export function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>My contacts</h2>
                <div className={style.formContainer}>
                    <Form/>
                </div>
                <button className={style.send}>Отправить</button>
            </div>


        </div>
    )
}