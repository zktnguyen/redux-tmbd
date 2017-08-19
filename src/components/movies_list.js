import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions';

class MoviesList extends Component {
  render() {
    return (
      <div>
        MoviesList
      </div>
    )
  }
}

export default connect(null, { fetchMovies })(MoviesList);