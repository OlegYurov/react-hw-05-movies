import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Cast from "../components/Cast/Cast";
import { getReviews } from '../services/api';
import  Reviews  from '../components/Reviews/Reviews';
export const ReviewsPage = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState('');
    

    useEffect(() => {
        (async () => {
            if (movieId) {
                try {
                    const {results} = await getReviews(movieId);
                    setReviews(results);
                    
                }
                catch (error) {
                    setError(error);
                }
            }
        })();
    }, [movieId])

    
    
    return (
        <>
            {reviews && <Reviews reviews={reviews}/>}
        </>
)

}

    
    // useEffect(() => {
    //     (async () => {
    //         if(movieId) {
    //             try {
    //                 const { cast } = await getCast(movieId);
    //                 setCast(cast);
                  
    //             }
    //             catch (error) {
    //                  setError(error);
    //             }
    //         }

    //     })();
    // }, [movieId]);

    // return (
    //     <>
    //         {cast && <Cast cast={cast} />}
    //     </>
    // )
   