import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react';
import { RotatingLines } from  'react-loader-spinner'
import Navigation from "./components/Navigation/Navigation"
import NotFound from './views/NotFound';


const HomeView = lazy(() => import('./views/HomeView'));
const Movies = lazy(() => import('./views/Movies'));
const MovieDetailsView = lazy(() => import('./views/MovieDetailsView'));

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<RotatingLines strokeColor='grey'/>}>
     <Routes>
        <Route exact path="/" element={<HomeView />}></Route>
        <Route exact path='/movies' element={<Movies />}></Route>
        <Route path='/movies/:movieId/*' element={<MovieDetailsView />}>     
        </Route>
              <Route path='*' element={<NotFound />}></Route>
        </Routes>
        </Suspense>
    </>
 
 )
 

}


export default App;