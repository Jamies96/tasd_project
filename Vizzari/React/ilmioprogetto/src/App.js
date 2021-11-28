import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './views/home/Home';
import Books from './views/books/Books';
import About from './views/about/About';
import MainTemplate from './components/mainTemplate/MainTemplate';

function App() {
  const lastLineText = 'Progetto realizzato da Nada Cenci per il corso di Tecnologie e Applicazione dei Sistemi Distribuiti - a.a. 2021/2022';
  const first_logo_url = 'https://www.unimib.it/';
  const second_logo_url = 'https://www.disco.unimib.it/it';
  const pageListItem = [
    {
      text: "Home",
      url: "/"
    },
    {
      text: "Books",
      url: "/books"
    },
    {
      text: "About",
      url: "/about"
    }];

  return (
    <BrowserRouter>
      <MainTemplate
        lastLineText={lastLineText}
        first_logo_url={first_logo_url}
        second_logo_url={second_logo_url}
        pageListItem={pageListItem}
      >
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/books" element={<Books/>} />
          <Route exact path="/about" element={<About/>} />
          
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  )
}

export default App;
