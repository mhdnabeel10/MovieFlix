import React,{useState,useEffect} from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import {imageUrl,API_KEY} from '../../constants/constants'
import axios from '../../axios'

function RowPost(props) {
  const[isFunctionTrue,setisFunctionStatus]=useState(true)
  const [movies, setmovies] = useState([])
  const [urlId,seturlId]=useState("")
  
  useEffect(()=>{
    axios.get(props.url).then(res=>{
      console.log(res.data);
      setmovies(res.data.results)
    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(res=>{
      if (res.data.results.length!==0){
        seturlId(res.data.results[0])

      }
    })

  }
  const handleClick = () =>{
    setisFunctionStatus(false)
  }
   
  
  return (
    <div className='row'>
    <h2>{props.title}</h2>
    <div className='posters'>
      {movies.map((obj)=>
        <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'  } src={`${imageUrl+obj.backdrop_path}`} alt="posters" />
      )}
    </div>
    {isFunctionTrue && urlId && (
      <div className="video-container">
        <button onClick={handleClick} className="close-btn">x</button>
        <Youtube opts={opts} videoId={urlId.key} className='youtubetag'/>
      </div>
    )}
  </div>
 );
}

export default RowPost