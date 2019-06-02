import React from 'react';
import { connect } from 'react-redux';
import MovieList from "../../components/MovieList/MovieList";
import { getMovies } from "./actions/movies";
import Container from '@material-ui/core/Container';
import Paper from "@material-ui/core/Paper";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  getMovies: () => dispatch(getMovies())
});

class MovieListContainer extends React.Component {

  getMovies = (event) => {
    this.props.getMovies();
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <Container maxWidth="xl">
        <Paper>total movies: {this.props.totals}</Paper>
        <MovieList movies={this.props.movies}/>

      </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer);
