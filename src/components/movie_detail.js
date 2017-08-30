import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchMovie} from '../actions';
import createFragment from 'react-addons-create-fragment';


class MovieDetail extends Component {
  componentDidMount(){
    if(!this.props.movie){
      const {id} = this.props.match.params;
      this.props.fetchMovie(id);
    }
  }

  render(){
    if (!this.props.movie){
      return <div>Loading...</div>
    }
    const {movie} = this.props;
    console.log(movie);
    return (
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
        </div>
        <div className="col-md-2"></div>
      </div>
      
    );
  }
}

function mapStateToProps({movies}, ownProps){
  return {movie: movies[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchMovie})(MovieDetail);