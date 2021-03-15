import logo from './logo.svg';
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {MyWorks} from "./MyWorks/MyWorks";
import {Contacts} from "./contacts/Contacts";
import {Telework} from "./telework/Telework";
import {Footer} from "./footer/Footer";

function App() {
  return (
    <div className="App">
         <Header/>
         <Main/>
         <Skills/>
         <MyWorks/>
         <Telework/>
         <Contacts/>
         <Footer/>
    </div>
  );
}

export default App;
