import axios from '../api/axios';
import React, { useEffect, useState } from 'react'
import requests from '../api/requests';
import './Banner.css'

export const Banner = () => {

    const [movie, setMovie] = useState([]);
    const fetchData = async()=>{
        //현재 상영중인 영화 정보 가져오기
        const request = await axios.get(requests.fetchNowPlaying);
        //여러 영화중 영화 하나의 id 가져오기
        const movieId = request.data.results[
            Math.floor(Math.random()*request.data.results.length)
        ].id;
    
        //특정 영화의 더 상세한 정보를 가져오기 (비디오 정보포함)
        const {data : movieDetail} = await axios.get(`movie/${movieId}`,{
            params : {append_to_response:"videos"},
        });
        setMovie(movieDetail);
    };
    
    useEffect(()=>{
        fetchData();
        console.log(movie);
    },[]);

  return (
    <div className='banner' style={{
        backgroundImage:`url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`, 
        backgroundPosition:"top center",
        backgroundSize:"cover"}}>
            
        <div className='banner__contents'>
            <h1 className='banner__title'>{movie.title||movie.name||movie.orginal_name}</h1>
            <div className='banner_buttons'>
                <button className='banner__button play'>play</button>
                <button className='banner__button info'>More Information</button>
            </div>
            <h1 className='banner__description'>{movie.overview}</h1>
        </div>
        <div className='banner--fadeBottom'/>
    </div>
  )
}
