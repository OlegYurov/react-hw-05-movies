import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const OneMovieContainer = styled.div`
text-align: center;
    display: flex;
    width: 1400px;
    padding: 50px 0px;
    margin: auto;
    
`;
export const AdditionalLink = styled(NavLink)`
 text-decoration: none;
        font-weight: 500;
    font-size: 18px;

    color: #2a363b;
     :hover,
  :focus,
  :active {
     color: #2196f3;
  }
&:not(:last-child) {
 margin-right: 25px;
}
   

`;

export const OneMovieInformation = styled.div`
background-color:#ADD8E6;
padding: 30px 0px ;
    
`

export const OneMovieImg = styled.img`
margin-right: 50px;
box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`