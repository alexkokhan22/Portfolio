import React from "react";
import style from "./Skills.module.css"
import styleContainer from "../common/style/Container.module.css";
import {Skill} from "./Skill/Skill";


export function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className= {`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill
                        title={'HTML / CSS'}
                        description={' мультипарадигменный язык программирования. ' +
                        'Поддерживает объектно-ориентированный, императивный и функциональный стили. ' +
                        'Является реализацией спецификации ECMAScript'}
                    />
                    <Skill
                        title={'JS'}
                        description={' мультипарадигменный язык программирования. ' +
                        'Поддерживает объектно-ориентированный, императивный и функциональный стили. ' +
                        'Является реализацией спецификации ECMAScript'}
                    />
                    <Skill
                        title={'React'}
                        description={' мультипарадигменный язык программирования. ' +
                        'Поддерживает объектно-ориентированный, императивный и функциональный стили. ' +
                        'Является реализацией спецификации ECMAScript'}
                    />
                </div>
            </div>


        </div>
    )
}