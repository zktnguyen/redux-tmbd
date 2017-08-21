import React, { Component } from 'react';
import { connect } from 'react-redux';

class MoviesList extends Component {
  render() {
    console.log(this.props.movies);
    return (
      <div>
        
      </div>
    )
  }
};

function mapStateToProps({ movies }){
  return { movies };
};
export default connect(mapStateToProps)(MoviesList);