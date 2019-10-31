import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetail from './FilmDetails';
import source from './TMDB';

class App extends Component {
  render() {
    // const currentYear = new Date().getFullYear();
    // const films = [
    //   {
    //     name: 'Spider-Man: Far From Home',
    //     img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-manfarfromhome_lob_crd_04_3.jpg',
    //     year: currentYear
    //   },
    //   {
    //     name: 'Avengers: Endgame',
    //     img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05_2.jpg',
    //     year: currentYear
    //   },
    //   {
    //     name: 'Captain Marvel',
    //     img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainmarvel_lob_crd_06.jpg',
    //     year: currentYear
    //   },
    //   {
    //     name: 'Ant-Man and The Wasp',
    //     img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/ant-manthewasp_lob_crd_01.jpg',
    //     year: currentYear - 1
    //   },
    //   {
    //     name: 'Avengers: Infinity War',
    //     img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersinfinitywar_lob_crd_02_1.jpg',
    //     year: currentYear - 1
    //   },
    //   {
    //     name: 'Black Panther',
    //     img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackpanther_lob_crd_01_4.jpg',
    //     year: currentYear - 1
    //   }
      
    // ]

    // const filmList = [];
    // for (let i = 0; i < source.films.length; i++) {
    //   filmList.push(<FilmListing key={ source.films[i].id } title={ source.films[i].title } year={ source.films[i].release_date } img={ source.films[i].poster_path } />);
    // }

    const filmList = source.films.map( (film , i) => {
      return <FilmListing key={ film.id } title={ film.title } year={ film.release_date } img={ film.poster_path } />
    });

    
    return (
      <div className="film-library">
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <p>{ filmList }</p>
        </div>

        <div className="film-details">
          <h1 className="section-title">DETAILS</h1>
        </div>
      </div>
    );
  }
}

export default App;
