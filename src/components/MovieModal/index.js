import React from 'react'
import './MovieModal.css';

const MovieModals = ({backdrop_path, title, overview,name,release_date,first_air_date,vote_average,setModalOpen}) => {
  return (
    <div className='presentation'>
        <div className='wrapper-modal'>
            <div className='modal'>
                <h3 className='modal-close' onClick={()=>{setModalOpen(false)}} > X </h3>
                <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} className='modal__poster-img' alt='modal__poster-img'></img>
                
                <div className='modal__content'>
                    <p className='modal__details'>
                        <span className='modal__user_perc'>
                            100% for you {" "}
                        </span> 
                        {release_date ? release_date : first_air_date}
                    </p>
                    <h2 className='modal__title'>{title? title:name}</h2>
                    <p className='modal__overview'> 평점 : {vote_average} </p>
                    <p className='modal__overview'>{overview}</p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieModals