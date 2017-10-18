import React, { Component } from 'react';
import logo from './logo.svg';
import Movie from './movie'
import './App.css';

const movies = [
  {
    title: 'Seulgi', 
    poster: 'https://pbs.twimg.com/profile_images/809684275758919680/cA8XEz-F.jpg'
  },
  {
    title: 'Full Metal Jacket',
    poster: 'https://pbs.twimg.com/profile_images/677397867955228673/5EeuKoYl.jpg'
  },
  {
    title: 'Oldboy',
    poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Kim_Da-hyun_at_Lotte_Family_Concert_on_May_20%2C_2017_%281%29.jpg/250px-Kim_Da-hyun_at_Lotte_Family_Concert_on_May_20%2C_2017_%281%29.jpg'
  },
  {
    title: 'Star Wars',
    poster: 'http://file2.instiz.net/data/cached_img/upload/2016/02/03/22/51a5eb9e7d2261530a62d809372ded31.gif'
  }
]

class App extends Component {
  componentWillMount(){
    console.log('will mount!');
  }
  
  state = {
    greeting: 'hello'
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        greeting: 'asdfjasdfk;'
      });
    }, 5000)
    
  }

  
  render() {
    console.log('did render!');
    return (
      <div className="App">
        {this.state.greeting}
        <h3>hello</h3>
          {movies.map((movie, index) => {
          return  <Movie title = {movie.title} poster = {movie.poster} key = {index}/>
          })}
      </div>
    );
  }
}

export default App;
