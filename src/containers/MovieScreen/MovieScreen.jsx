import React from 'react';
import { connect } from 'react-redux';
import Movie from "../../components/Movie/Movie";
import Typography from '@material-ui/core/Typography';
import {Helmet} from "react-helmet";
import { selectMovieById } from "../MovieListContainer/selectors";

const mapStateToProps = (state, props) => {
  return {
    movie: selectMovieById(state, props)
  };
};

class MovieScreen extends React.Component {
  render() {
    if(this.props.movie) {
      return (
        <div>
          <Helmet>
            <meta charSet="utf-8"/>
            <title>{this.props.movie.title}</title>
          </Helmet>
          <Movie movie = {this.props.movie} />
        </div>
      )
    } else {
      return <Typography variant="h3">Nothing here</Typography>
    }
  }
}

export default connect(mapStateToProps)(MovieScreen);
