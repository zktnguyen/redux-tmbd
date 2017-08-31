import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMovie } from '../actions';

class MoviesList extends Component {
  onMovieClick(movie){
    this.props.fetchMovie(movie.id);
    console.log(movie.title + " clicked");
  }
  
  render() {
    if (!this.props.movies){
      return <div></div>
    }

    const movieItems = _.map(this.props.movies, movie => {
      return (
        <Link onClick={()=>this.onMovieClick(movie)} to={`/movies/${movie.title}/${movie.id}`} key={movie.id}>
          <li className="list-group-item">
            {movie.title}
          </li>
        </Link>
      );
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

export default connect(mapStateToProps, {fetchMovie})(MoviesList);