import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios';
import "./Banner.css"




function Banner() {
const [movie, setMovie] = useState()
const RandomValue = () =>{
   return Math.floor(Math.random()*21);
}
const randomIndex = RandomValue();

    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
            console.log(res.data.results[0])
            setMovie(res.data.results[randomIndex])
        })
    },[])
 
  return (
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
    className='banner'>
        <div className='contents'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='Banner-btn'>
                <button className='button' >Play</button>
                <button className='button'>My List</button>  
            </div>
            <h1 className='discrption'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner