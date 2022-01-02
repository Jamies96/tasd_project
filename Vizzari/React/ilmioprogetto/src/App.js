import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './views/home/Home';
import Cards from './views/cards/Cards';
import About from './views/about/About';
import YugiohCardDetails from './components/yugiohCardDetails/YugiohCardDetails';
import MainTemplate from './components/mainTemplate/MainTemplate';

function App() {
    /*Footer data*/
    const lastLineText = 'Progetto realizzato da Nada Cenci per il corso di Tecnologie e Applicazione dei Sistemi Distribuiti - a.a. 2021/2022';
    const first_logo_url = 'https://www.unimib.it/';
    const second_logo_url = 'https://www.disco.unimib.it/it';

    /*Menu data*/
    const pageListItem = [
        {
            text: "Home",
            url: "/"
        },
        {
            text: "Cards",
            url: "/cards"
        },
        {
            text: "About",
            url: "/about"
        }
    ];

    const apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

    return (
        <BrowserRouter>
            <MainTemplate
                lastLineText={lastLineText}
                first_logo_url={first_logo_url}
                second_logo_url={second_logo_url}
                pageListItem={pageListItem}
            >
                <Routes>
                    <Route exact path="/" element={<Home apiUrl={apiUrl}/>}/>
                    <Route exact path="/cards/" element={<Cards apiUrl={apiUrl}/>}/>
                    <Route exact path="/cards/:deck" element={<Cards apiUrl={apiUrl}/>}/>
                    <Route exact path="/card/:id" element={<YugiohCardDetails apiUrl={apiUrl}/>}/>
                    <Route exact path="/about" element={<About/>}/>
                </Routes>
            </MainTemplate>
        </BrowserRouter>
    )
}

export default App;
