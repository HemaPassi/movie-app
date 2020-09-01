import React, { Component } from "react";
import Search from "../containers/Search";
import MoviesList from "../containers/MoviesList";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Search onFormSubmit={this.onFormSubmit} />
        <MoviesList />
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchMovies }, dispatch);
// }

// function mapStateToProps(state) {}

//export default connect(null, mapDispatchToProps)(Search);

export default App;
