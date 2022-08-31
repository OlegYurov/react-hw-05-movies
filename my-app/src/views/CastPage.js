import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCast } from '../services/api';
import Cast from "../components/Cast/Cast";

export  const CastPage = ()  => {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);
    const [error, setError] = useState('');
    
    useEffect(() => {
        (async () => {
            if (movieId) {
                try {
                    const { cast } = await getCast(movieId); 
                    setCast(cast);
                  
                }
                catch (error) {
                     setError(error);
                }
            }

        })();
    }, [movieId]);

    return (
        <>
            {cast && <Cast cast={cast} />}
        </>
    )
   
        
            
    
};
