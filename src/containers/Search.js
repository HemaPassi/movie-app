import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchMovies } from "../actions/index";
import "./Search.scss";
/* Search container is responsible to search Movies by Title */
class Search extends Component {
  constructor(props) {
    super(props);
  }
  state = { term: "" };

  onChangeHandler = (evt, type) => {
    evt.preventDefault();
    this.setState({ term: evt.target.value });
  };

  onFormSubmit = (evt) => {
    evt.preventDefault();
    this.props.fetchMovies(this.state.term);
  };

  render() {
    return (
      <div className="search-wrapper">
        <h1>Movie Night Extravaganza</h1>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <span>Enter Movie to search </span>:
            <input
              placeholder=""
              value={this.state.title}
              onChange={(evt) => this.onChangeHandler(evt, "title")}
            />
          </div>
          <span className="">
            <button type="submit">Submit</button>
          </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovies }, dispatch);
}

function mapStateToProps(state) {}

export default connect(null, mapDispatchToProps)(Search);
