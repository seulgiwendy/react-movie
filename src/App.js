import React, { Component } from 'react';
import logo from './logo.svg';
import Movie from './movie'
import Props from './props'
import './App.css';

 

class App extends Component {
  componentWillMount(){
    console.log('will mount!');
  }
  
  state = {
    
  }

  componentDidMount(){
    this._setMovies();
  }
  
  _renderMovies = () =>{
    const movies = this.state.movies.map((movie) => {
      return <Movie 
        title={movie.title} 
        poster={movie.medium_cover_image} 
        key={movie.id} 
        genres={movie.genres} 
        synopsis = {movie.synopsis}/>
        
    })
    return movies
  }

  _setMovies = async () => {
    const movies = await this._callApi();
    console.log(movies)
    //below this will only be executed after this.callApi() finishes. 
    this.setState({
      movies 
    })

  }

  _callApi = () => {
    return fetch('https://yts.ag/api/v2/list_movies.json?sort_by=rating')
    .then(r => r.json())
    
    .then(json => json.data.movies)
    .catch(err=> console.log(err));
  }
  
  render() {
    const {movies} = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
          {movies ? this._renderMovies() : 'Loading'}
          
      </div>
    );
  }
}

export default App;
