import React, {Component} from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
  render() {

    return (
      <FilmRow title={ this.props.title } year={ this.props.year} img={ this.props.img } />
    )
  } // render
} // class

export default FilmListing
