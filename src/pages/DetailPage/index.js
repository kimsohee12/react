import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";


const DetailPage=()=>{

  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/movie/${movieId}`);
      setMovie(request.data);
    }
    fetchData();
    console.log("detaildata",movie);
  }, [movieId]);

  if (!movie) return <div>...loading</div>;

  return (
    <section>
      <img className="modal__poster-img" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}alt="poster"/>
      <div className='modal__content'>
                    <p className='modal__details'>
                        <span className='modal__user_perc'>
                            개봉일 -  {" "}
                        </span> 
                        {movie.release_date ? movie.release_date : movie.first_air_date}

                    </p>
                    <h2 className='modal__title'>{movie.title? movie.title:movie.name}</h2>
                    <p className='modal__overview'> 평점 : {movie.vote_average} </p>
                    <br/>
                    <p className='modal__overview'>{movie.overview}</p>

                </div>
    </section>
  )
}
  export default DetailPage
