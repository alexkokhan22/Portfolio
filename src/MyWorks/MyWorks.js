import React from "react";
import style from "./MyWorks.module.scss"
import styleContainer from "../common/style/Container.module.css";
import {Work} from "./Work/Work";
import {TitleH2} from "../common/components/title/TitleH2";
import socialNetworkImg from "../assets/img/clubhouse-upcoming-and-share.jpg.webp"
import toDoLists from "../assets/img/1258120536.jpg"


export function MyWorks() {
    const socialNetwork = {
        backgroundImage: `url(${socialNetworkImg})`
    };

    const toDoList = {
        backgroundImage: `url(${toDoLists})`
    };

    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <TitleH2 value={'My Works'}/>
                <div className={style.work}>
                    <Work
                        title={'Social network'}
                        description={'Social networking is the use of Internet-based social media sites to stay connected with friends, ' +
                        'family, colleagues, customers, or clients.'}
                        style={socialNetwork}
                    />
                    <Work style={toDoList} title={'ToDoList'} description={' Free Open-Source Task Management '}/>
                </div>
            </div>


        </div>
    )
}