import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import Swal from "sweetalert2";
import styled from "styled-components";


const DetailPage=()=>{

  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    async function fetchData() {
      //영화 정보 (비디오 포함) 가져오기
      const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
        params: { append_to_response: "videos" },
    });
    setMovie(movieDetail);
    console.log( 'video',movie);
    }
    fetchData();
    console.log("detaildata",movie);
  }, [movieId]);

  if (!movie) return <div>...loading</div>;

  const videoBtnClick=()=>{
    if(movie.videos.results.length==0){
        Swal.fire({
            icon: "error",
            color:"rgb(222, 222, 222)",
            background:'#1f1f1f',
            text: '해당 영화는 등록 된 예고편이 없습니다.',
            confirmButtonText: "확인",
        })
    }else{
        setIsClicked(true)

    }
}
if(!isClicked){
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
                    <button className="banner__button play" onClick={() => videoBtnClick()}>
                      Play
                    </button>
                    <br/>
                    <p className='modal__overview'>{movie.overview}</p>

                </div>
    </section>
  )
}else {
  return (
      <Container>
          <HomeContainer>
              <Iframe width="640" height="360"
                  src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
                  title="YouTube video player"
                  allow="autoplay; fullscreen"
                  allowFullScreen
              ></Iframe>
          </HomeContainer>
      </Container>
  );
}
}
  export default DetailPage


  const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.65;
    border: none;


&::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color:#080808`;
    

const HomeContainer = styled.div`
    position: absolute;
    top: 60px;
    width: 100%;
    height: 100%;`;

