import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
//기본 베이스되는 URL 지정 
const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3",
    headers : {"Content-Type" : "application/json"},
    params :{api_key : API_KEY, language : "ko-KR"}
    
});


export default instance