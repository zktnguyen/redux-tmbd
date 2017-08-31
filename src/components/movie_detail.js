import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchMovie, fetchCredits} from '../actions';
import {Link} from 'react-router-dom';
const IMAGE_URL = 'https://image.tmdb.org/t/p/';


class MovieDetail extends Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
      const {id} = this.props.match.params;
      this.props.fetchMovie(id);
      if(!this.props.credits){
        const {id} = this.props.match.params;
        this.props.fetchCredits(id);
      }


    
  }

  renderCast(){
    const {credits} = this.props;
    return credits.cast.map((member) => {
      return <li key={member.cast_id}>{member.name} as {member.character}</li>;
    });
  }

  returnDirector(){
    return this.props.credits.crew[0].name;
  }

  render(){
    if (!this.props.movie || !this.props.credits){
      return <div>Loading...</div>
    }
    const {movie} = this.props;
    const {credits} = this.props;
    console.log(movie);
    console.log(credits);
    return (
      <div className="container">
        <Link to="/">Back to Index</Link>
        <div className="row movie-detail">
          <div className="col-md-2"></div>
          <div className="col-md-8 box">
            <div className="row">
              <div className="col-md-6">
                <h6>{movie.tagline}</h6>
              </div>
              <div className="col-md-6"></div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h1>{movie.title}</h1>
                <small>released on {movie.release_date}</small>
              </div>
              <div className="col-md-4">
                <h5>Rating: {movie.vote_average} / 10</h5>
                <h5>Length: {movie.runtime} minutes</h5>
              </div>
              <div className="col-md-2">

              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <img className="img-fluid rounded" src={`${IMAGE_URL}/w300/${movie.poster_path}`}/>
              </div>
              <div className="col-md-6">
                <p>{movie.overview}</p>
                <p>Starring: <br/>
                  {this.renderCast()}
                </p>
                <h4>Directed by: {this.returnDirector()}</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <a href={movie.homepage}>Visit the Movie Homepage</a>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      
      
    );
  }
}

function mapStateToProps({movies, credits}, ownProps){
  return {movie: movies[ownProps.match.params.id], credits};
}

export default connect(mapStateToProps, {fetchMovie, fetchCredits})(MovieDetail);