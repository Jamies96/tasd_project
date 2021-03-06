import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './views/home/Home';
import Cards from './views/cards/Cards';
import About from './views/about/About';
import YugiohCardDetails from './views/yugiohCardDetails/YugiohCardDetails';
import MainTemplate from './components/mainTemplate/MainTemplate';

function App() {
    /*Footer data*/
    const lastLineText = 'Project realized by Nada Cenci for Technologies and Applications of Distributed Systems course - 2021/2022';
    const first_logo_url = 'https://www.unimib.it/';
    const second_logo_url = 'https://www.disco.unimib.it/it';

    /*Menu data*/
    const pageListItem = [
        {
            text: "Home",
            url: "/tasd_project"
        },
        {
            text: "Cards",
            url: "/tasd_project/cards"
        },
        {
            text: "About",
            url: "/tasd_project/about"
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
                    <Route exact path="tasd_project/" element={<Home apiUrl={apiUrl}/>}/>
                    <Route exact path="tasd_project/cards/" element={<Cards apiUrl={apiUrl}/>}/>
                    <Route exact path="tasd_project/cards/:deck" element={<Cards apiUrl={apiUrl}/>}/>
                    <Route exact path="tasd_project/card/:id" element={<YugiohCardDetails apiUrl={apiUrl}/>}/>
                    <Route exact path="tasd_project/about" element={<About/>}/>
                </Routes>
            </MainTemplate>
        </BrowserRouter>
    )
}

export default App;
