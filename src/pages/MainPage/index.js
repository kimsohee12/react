import React from "react";
import Banner from "../../components/Banner";
import Row from "../../components/Row";
import requests from "../../api/requests";

const MainPage=()=> {
  return (
    <div>
      <Banner />
      <Row title="NETFLIX ORIGINALS" id="NO" key="NO" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" id="TN" key="TN" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" id="TR" key="TR" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" id="AM" key="AM" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" id="Cm" key="Cm" fetchUrl={requests.fetchComedyMovies}/>
    </div>
  )
}
export default MainPage
