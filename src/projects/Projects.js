import React from 'react'
import styles from './Projects.module.scss';
import {Project} from "./project/Project";
import Title from "../common/components/title/Title";
import toDoListPhoto from "../assets/images/gallery-photo-1.jpg"
import socialNetwork from "../assets/images/gallery-photo-2.jpg"
import img3 from "../assets/images/gallery-photo-3.png"
import img4 from "../assets/images/gallery-photo-4.png"
import img5 from "../assets/images/gallery-photo-5.png"
import img6 from "../assets/images/gallery-photo-6.png"
import img7 from "../assets/images/gallery-photo-7.jpg"
import img8 from "../assets/images/gallery-photo-8.png"


function Projects() {
    return (
        <div className={styles.projectsBlock} id='portfolio'>
            <div className={styles.projectsContainer}>
                <Title title={'My portfolio'}/>
                <div className={styles.projects}>
                    <Project
                        title={"todolist"}
                        img={toDoListPhoto}
                        description={"TS, Redux, RestAPI, Thunk,Material UI, Unit Tests"}
                        link={"https://alexkokhan22.github.io/toDoList/"}/>

                    <Project
                        title={"the social network"}
                        img={socialNetwork}
                        description={"TS, Redux, RestAPI, Thunk,ANT Design, Unit Tests"}
                        link={"https://alexkokhan22.github.io/SN/#/users"}/>

                    <Project
                        title={"future project"}
                        img={img3}
                        description={"...in progress"}
                        link={"link #6"}/>

                    <Project
                        title={"future project"}
                        img={img4}
                        description={"...in progress"}
                        link={"link #1"}/>

                    <Project
                        title={"future project"}
                        img={img5}
                        description={"...in progress"}
                        link={"link #6"}/>

                    <Project
                        title={"future project"}
                        img={img6}
                        description={"...in progress"}
                        link={"link #1"}/>

                    <Project
                        title={"future project"}
                        img={img7}
                        description={"...in progress"}
                        link={"link #6"}/>

                    <Project
                        title={"future project"}
                        img={img8}
                        description={"...in progress"}
                        link={"link #1"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;