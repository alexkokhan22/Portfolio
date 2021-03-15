import React from "react";
import style from "./MyWorks.module.css"
import styleContainer from "../common/style/Container.module.css";
import {Work} from "./Work/Work";


export function MyWorks() {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>My works</h2>
                <div className={style.work}>
                    <Work
                        title={'Social network'}
                        description={'Social networking is the use of Internet-based social media sites to stay connected with friends, ' +
                        'family, colleagues, customers, or clients.'}
                    />
                    <Work title={'ToDoList'} description={' Free Open-Source Task Management '}/>
                </div>
            </div>


        </div>
    )
}