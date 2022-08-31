import { nanoid } from 'nanoid';
import {ReviewsContainer} from './Reviews.styled'
import PropTypes from 'prop-types';

export default function Reviews( {reviews} ) {

    return (
        <ReviewsContainer>
                
            {reviews.length > 0 ? (
                <>
                    <ul>
                    {reviews.map(movie => (
                        <li key={nanoid()}>
                            <h3>{movie.author}</h3>
                            <p>{movie.created_at}</p>
                            <p>{movie.content}</p>
                        </li>
                    ))}
                     </ul>
                </>
            ) : <h2>У этого фильма нет reviews</h2>
            }
                   
             </ReviewsContainer>
        
    );
};

  Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
};      