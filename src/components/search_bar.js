import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions';

class SearchBar extends Component {
  constructor (props) {
    super(props);

    this.state = {term: ''};
  }

  onInputChange(input) {
    this.setState({term: input.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    const searchTerm = this.state.term;
    
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
          <input className="form-control"
            placeholder="La La Land"
            value={this.state.term}
            onChange={this.onInputChange.bind(this)}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-default">Search</button>
          </span>
        </form>
      </div>

    );
  }
}

export default connect(null, { fetchMovies })(SearchBar);