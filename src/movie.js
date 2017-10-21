import React, {Component} from 'react';
import LinesShortener from 'react-lines-ellipsis';
import PropTypes from 'prop-types';

import './movie.css';


function Movie({title, poster, genres, synopsis}){
    return(
        <div className="moviecard">
          <div className="movie-columns">
            <MoviePoster poster = {poster} alt={title}/>
          </div>
          <div className="movie-columns">
              <h1>{title}</h1>
              <div className="movie-genres">
                  {genres.map((genre, index) => <Genres genres = {genre} key={index} />)}
              </div>
              <p className="movie-synopsis">
                  <LinesShortener
                    text={synopsis}
                    maxLine = '3'
                    ellipsis = "..더 보기"
                    trimRight
                    basedOn='letters'
                    />
                </p>
            </div>
    </div>
    ) 
}

function MoviePoster({poster, alt}){
    return(
        <img src={poster} alt={alt} className="movie-poster"/>

    )
}

function Genres({genres}){
    return(
        <span className="movie-genre">{genres} </span>
    )
}
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis:  PropTypes.string.isRequired
}
MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Movie;
