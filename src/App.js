import React from "react";
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Vacancy from "./vacansy/Vacancy";
import Footer from "./footer/Footer";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Contacts from "./contacts/Contacts";



function App() {
    return (
        <div className='App'>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Vacancy/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
