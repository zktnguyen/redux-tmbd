import React, {Component} from 'react';
import SearchBar from './search_bar';
import MoviesList from './movies_list';

export default class Index extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <MoviesList />
      </div>
    );
  }
};