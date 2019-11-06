import React from "react";
import PropTypes from "prop-types";

function Movie({id, year, title, summary, poster, genres}){
    return <div className="movie">
        <img src={poster} alt={title} title={title} />    
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => ( // map에 기본적을 index 파라미터 제공
              <li key={index} className="genres__genre">{genre}</li>   
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0,280)}...</p>
        </div>
    </div>
}   

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired, // medium_cover_image 대체
    genres: PropTypes.arrayOf(PropTypes.string).isRequired // 안에 String Array인경우 이렇게 표현

};

export default Movie;