import { Routes, Route, useParams, useLocation,} from 'react-router-dom'
import { nanoid } from 'nanoid';
import { AdditionalLink, OneMovieContainer, OneMovieInformation, OneMovieImg } from './OneMovie.styled'
import { CastPage } from '../../views/CastPage.js';
import { ReviewsPage } from '../../views/ReviewsPage.js';
import PropTypes from 'prop-types';


export default function OneMovie({movie, notify}) {
    const { poster_path,
        title,
        genres,
        overview,
        backdrop_path,
        vote_average } = movie;
    const { movieID } = useParams();
    const genresAll = genres.map(genr => genr.name).join(' | ');

    return (
        <>
            
            <OneMovieContainer>
              
                <OneMovieImg src={poster_path &&
                     `https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
                <div>
                    <h2>{title}</h2>
                    <p>User Score: {vote_average}</p>
                    <h3>Overviev</h3>
                    <p>{overview}</p>
                    <h4>Genres</h4>
                    <p key={nanoid()}>{genresAll} </p>                                    
                </div>
            </OneMovieContainer>
            
            <OneMovieInformation>
                              
              <AdditionalLink to="cast" >Cast</AdditionalLink> 
                            
                <AdditionalLink to="reviews" >Reviews</AdditionalLink>   
                </OneMovieInformation>
               
                <Routes>
                     <Route  path={`cast`} element={<CastPage/>}></Route>  
                <Route  path={`reviews`} element={<ReviewsPage/>}></Route> 
                </Routes>                                            
            
        </>
    )
};

OneMovie.propTypes = {
  movie: PropTypes.object.isRequired,
};
