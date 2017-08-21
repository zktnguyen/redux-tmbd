import React, {Component} from 'react';
import SearchBar from './search_bar';
import MoviesList from './movies_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <MoviesList />
      </div>
    );
  }
};