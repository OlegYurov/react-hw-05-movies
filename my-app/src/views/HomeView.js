import { useState, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'
import * as moviesAPI from '../services/api'
import * as css from '../components/Cast/Cast.styled'

export default function HomeView() {
    const [movies, setMovies] = useState(null);
    const location = useLocation();



   
     useEffect(() => {
    (async () => {
      try {
        const { results } = await moviesAPI.getTrendingMovies();
        setMovies([...results]);
      } catch (error) {
      
      }
    })();
  }, []);


//     return (
//         <>
//             <h2>Trending today</h2>
//             {movies && (
//                 <ul>
//                     {movies.map(movie => (
//                         <li key={movie.id}>
//                         <Link to={`/movies/${movie.id}`} state={{ from: location }}>
//                                 {movie.name ? movie.name : movie.title}
//                             </Link>
                           
//                         </li> 
//                     ))}
//                 </ul>
//             )}
           
//         </>
//     )
// }

 return (
   <>
     
         <h1>Trending today</h1>
            <css.Wrapper>
                    <css.List>    
                 {movies  && (
           movies.map(movie => (                     
                     <css.Item key={movie.id}>
                       <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                <css.Img src={movie.poster_path &&
                     `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                  
                } alt={movie.name ? movie.name : movie.title} />
                 <p>{ movie.name ? movie.name : movie.title }</p>
                 </Link>
                 </css.Item>                       
                 ) ) 
                      )}              
                </css.List>
           </css.Wrapper>                   
        </>
    )
};
