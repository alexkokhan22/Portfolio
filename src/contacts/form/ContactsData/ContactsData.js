import React from 'react'
import styles from './ContactsData.module.scss';
import {faTelegramPlane} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faHome} from "@fortawesome/free-solid-svg-icons";
import DataBlock from "./DataBlock/DataBlock";


function ContactsData() {
    return (
        <div className={styles.data}>
            <DataBlock
                iconTitle={faTelegramPlane}
                contactTitle={'Phone'}
                data={'+375-33-619-79-02'}
                a={"https://t.me/alexandrKokhan"}/>
            <DataBlock
                iconTitle={faEnvelope}
                contactTitle={'Email'}
                data={'kokhan.a.a@yandex.by'}
                a={"https://kokhan.a.a@yandex.by"}/>
            <DataBlock
                iconTitle={faHome}
                contactTitle={'My Location'}
                data={'Mozyr, Belarus'}
                a={""}/>
        </div>
    );
}

export default ContactsData;