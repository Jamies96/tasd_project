import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

  /*Card data*/
  const homeCardsID = [
    '89631139', '46986414', '74677422'
  ];
  const allCardsID = [
    ['42023223', '79418928', '15502037', '42901635'],
    ['78355370', '75347539', '99785935', '39256679'],
    ['11549357', '46986414', '38033121', '78193831'],
    ['90876561', '25652259', '64788463', '77207191'],
    ['05818798', '52077741', '13039848', '40640057'],
    ['73752131', '46363422', '43586926', '04740489'],
    ['41735184', '02314238', '99789342', '25774450'],
    ['72302403', '93260132', '24094653', '95286165'],
    ['12923641', '83715234', '77133792', '00050755'],
    ['44095762', '62279055', '37383714', '20781762'],
    ['04628897', '06150044', '98502113', '04796100'],
    ['86240887', '89631139', '74677422', '73398797']
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
          <Route exact path="/" element={<Home cardsID={homeCardsID} apiUrl={apiUrl} />} />
          <Route exact path="/cards" element={<Cards cardsID={allCardsID} apiUrl={apiUrl} />} />
          <Route exact path="/cards/:id" element={<YugiohCardDetails apiUrl={apiUrl} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  )
}

export default App;
