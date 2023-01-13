import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css"

function Movie({id,coverImg,title,summary,genres,year}){
    return (
        <div>
          <div className={styles.movie}>
            <img src ={coverImg} alt={title} className={styles.movieimg}/>
            <h2 className={styles.movietitle}>
              <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <h3 className={styles.movieyear}>개봉연도: {year}</h3>
            <p>{summary.length > 235 ? `줄거리: ${summary.slice(0,235)}...` : `줄거리: ${summary}`}</p>
            <ul className={styles.moviegenres}>
              장르:
              {genres.map((g) => (<li key={g}>{g}</li>))}
            </ul>
          </div>
        </div>)
    
}

Movie.propTypes ={
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;