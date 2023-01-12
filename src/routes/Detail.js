import styles from "../styles/detail.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const [loading,setLoading] = useState(true);
    const [movie,setMovie] = useState([]);
    const {id} = useParams();
    const getMovie = async () => {
        const json = await(
            await(
                fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
                )
                ).json();
        setLoading(false);
        setMovie(json.data.movie);
    }
    useEffect(() => {
        getMovie();
    },[])
    
    return (
    <div className="container">
        {loading ? <h1>Loading</h1> : 
    <div className="datail">
        <img src={movie.medium_cover_image}></img>
        <h1> 제목: {movie.title}</h1>
        <div> 평점: {movie.rating}</div>
        
    </div>
            }
    </div>
    )
}

export default Detail;