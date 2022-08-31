import { nanoid } from 'nanoid';
import * as C from './Cast.styled'
import PropTypes from 'prop-types';

export default function Cast({ cast }) {

    return (
        <>
            <C.Wrapper>
                    <C.List>    
                 {cast  && (
                   cast.map( actor => (
                      <C.Item key={nanoid()}>
                           <C.Img src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w300/${actor.profile_path}`
                    : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'
                } alt={actor.name} />
                           <p>{actor.name}</p>
                        
                </C.Item>
                 ) ) 
                      )}              
                </C.List>
           </C.Wrapper>
        
             
        </>
    )
};

Cast.propTypes = {
  cast: PropTypes.array.isRequired,
};
