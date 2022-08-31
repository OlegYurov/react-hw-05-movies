import { HeaderLink,NavigationSection } from './Navigation.styled';

const Navigation = () => (
    <> 
        <NavigationSection>
            <HeaderLink exact="true" to="/"  >
                Home
            </HeaderLink>
            <HeaderLink to="/movies"
                >
                Movies
            </HeaderLink>
    </NavigationSection>
       
    </>

);
    
  

    
  

 

export default Navigation;


