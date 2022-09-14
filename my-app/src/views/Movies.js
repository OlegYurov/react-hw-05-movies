import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {getMovieSearch } from '../services/api'
import Form from '../components/Form/Form'
import * as css from '../components/Cast/Cast.styled'

export default function Movies(params) {
    // const [request, setRequest] = useState('');
    const [resultSearch, setResultSearch] = useState('');
    const [resultRequest, setResultRequest] = useState(JSON.parse(localStorage.getItem("m0vies")));
    const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(false);
    
     const notify = (messege) => {
        toast.error(messege)
    };

    const getData = (result) => {
           if (result === '') {
         notify('Введите запрос')  
    }
        setResultSearch(result);
    };
    

 
   useEffect(() => {
  if (resultSearch === '') { 
         return
        }
       
                (async () => {
                    try {
                        const {results} = await getMovieSearch(resultSearch);
                    setResultRequest(results);
                   localStorage.setItem("m0vies", JSON.stringify(results));
                } catch (error) {
                    setError(error);
                    notify(error.message);                   
                }
                    
                
        })();
    }, [resultSearch]);
  

    return (     
        <>
            <Form getData={getData} />
            <css.Wrapper>
            {resultRequest && (
                <>
          
                    <css.List>  
                    {resultRequest.map(movie =>
                <css.Item key={movie.id}>
                       <Link  to={`${movie.id}`} state={{ from: "/movies" }}>
                <css.Img src={movie.poster_path &&
                     `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                  
                } alt={movie.name ? movie.name : movie.title} />
                 <p>{ movie.name ? movie.name : movie.title }</p>
                 </Link>
                 </css.Item>                       
                        )}                     
                  </css.List>                                      
                                
                    </>
                )}
                </css.Wrapper>
        <ToastContainer/> 
        </>
      
    )
    
    
};
