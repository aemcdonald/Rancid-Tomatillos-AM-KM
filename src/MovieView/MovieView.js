import React, { Component } from 'react';
import ApiCalls from '../ApiCalls.js'
import './MovieView.css';

class MovieView extends Component {
  constructor() {
    super();
    this.state = {
      movie: {}
    }
  }
  async componentDidMount() {
    const singleMovieInfo = await ApiCalls.getSingleMovie(this.props.match.params.movieId)
    this.setState({movie: singleMovieInfo.movie})
  }
  render() {
    return (
      <section className='movieView' style={{backgroundImage: 'url(' + this.state.movie.backdrop_path + ')' }}>
        <section className='movieInfo'>
          <h3 className='movieTitle'>{this.state.movie.title}</h3>
          <h4 className='movieTagline'>{this.state.movie.tagline}</h4>
          <h4 className='movieOverview'>{this.state.movie.overview}</h4>
          <h5>Release Date: {this.state.movie.release_date}</h5>
          <h6>Average Rating: {parseFloat(this.state.movie.average_rating).toFixed(1)}</h6>
        </section>
      </section>
    )
  }
}

export default MovieView;
