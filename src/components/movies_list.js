import React, { Component } from 'react';
import { connect } from 'react-redux';

class MoviesList extends Component {
  render() {
    const movieItems = this.props.movies.map((movie) => {
      return <li>{movie.title}</li>
    });
    return (
      <ul className="list-group">
        {movieItems}
      </ul>
    )
  }
};

function mapStateToProps({ movies }){
  return { movies };
};
export default connect(mapStateToProps)(MoviesList);