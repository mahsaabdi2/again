import { useState , useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom"


function News() {
    const [data , setdata]=useState(null)
    useEffect( ()=>{axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY").then(resp => setdata(resp.data))}, [])
    return (
      <div className="News">
        { !data && <p>Please Wait</p>}
        {data &&
        <div>
            <h1>{data.title}</h1>
            <img src={data.url} width="500"/>
            <p>{data.explanation}</p>
            </div>
        }
        <Link to="/Counter/5">Counter5</Link>
        <br />
        <Link to="/Counter/15">Counter15</Link>
        <br />
        <Link to="/Counter/25">Counter25</Link>
        <br />
        <Link to="/Counter/35">Counter35</Link>

      </div>
    );
    }
  
  export default News;