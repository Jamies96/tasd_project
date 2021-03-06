import React from 'react';
import './About.css';
import ygobg from '../../assets/img/ygo-bg.jpg';

function About() {
    return (
        <>
            <h1 className='text-center'>About</h1>
            <hr/>
            <div className='container'>
                <div className='row plot'>
                    <div className='col '><p>Yu-Gi-Oh! (遊☆戯☆王ＹＵ－ＧＩ－ＯＨ！ Yūgiō, Japanese for "Game King" or "King of
                        Games") is a popular Japanese anime and manga franchise from Kazuki Takahashi that mainly
                        involves characters who play a card game called Duel Monsters (originally called Magic and
                        Wizards in the manga).</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col offset-md-5'>
                        <h2>Plot</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-5 backg'>
                        <img src={ygobg}/>
                    </div>
                    <div className='col md-6'>
                        <p className='plot'>Yu-Gi-Oh! tells the tale of Yugi Mutou, a timid young boy who loves all
                            sorts of games, but is often bullied around. One day, he solves an ancient puzzle known as
                            the Millennium Puzzle (千年パズル, Sennen Pazuru), causing his body to play host to a mysterious
                            spirit with the personality of a gambler. From that moment onwards, whenever Yugi or one of
                            his friends is threatened by those with darkness in their hearts, this other Yugi shows
                            himself and challenges them to dangerous Shadow Games (闇のゲーム, Yami no Gēmu, lit. "Games of
                            Darkness") which reveal the true nature of someone's heart, the losers of these contests
                            often being subjected to a dark punishment called a Penalty Game (罰ゲーム, Batsu Gēmu). Whether
                            it be cards, dice, or role-playing board games, he will take on challenges from anyone,
                            anywhere.
                            As the series progresses, Yugi and his friends learn that this person inside of his puzzle
                            is actually the spirit of a nameless Pharaoh from Ancient Egyptian times, who had lost his
                            memories. As Yugi and his companions attempt to help the Pharaoh regain his memories, they
                            find themselves going through many trials as they wager their lives facing off against
                            gamers that wield the mysterious Millennium Items (千年アイテム, Sennen Aitemu) and the dark power
                            of the Shadow Games.</p>
                    </div>
                    <div className='row plot'>
                        <div className='col'>
                            <p className=''>Here you will see the first edition cards, in particular, you could chooce
                                among Yugi's deck, Seto's deck and Katsuya's deck.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;