import { useParams, useLocation, Link } from "react-router-dom"
import { useState, useEffect } from "react" 
import { ToastContainer, toast } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';
import * as moviesAPI from '../services/api'
import OneMovie from "../components/OneMovie/OneMovie";

export default function MovieDetailsView() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const location = useLocation();
    const goBackLink = location.state?.from ?? "/";
    const notify = (messege) => {
        toast.error(messege)
    };
    useEffect(() => {
                (async () => {
            if(movieId) {
                try {
                    setMovie(await moviesAPI.getMovieId(movieId));
                   
                } catch (error) {
                    setError(error);
                    
                    notify(error.message);                   
                }
                    }
                    
        })();
    }, [movieId]);
   

    return (
        <>
            <Link to={goBackLink}><button>To back</button></Link>
            <>
             {movie && (
                          
                    <OneMovie movie={movie}></OneMovie>
                 ) 
                }
                {error && (
                     <ToastContainer/>
                )

                }
            </>
           
           
                
    </>
    )
  
};
