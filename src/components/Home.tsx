import { useEffect } from 'react';
import Movie from './Movie';
import Spinner from '../components/Spinner'

import { useAppSelector } from '../store/hooks';
import { useGetAllMoviesMutation } from '../store/api';

function Home() {
    const user = useAppSelector(state => state.appState.user)
    const [getMovies, { data: movieList }] = useGetAllMoviesMutation();

    const token = localStorage.getItem('auth-token')

    useEffect(() => {
        getMovies({ id: 3, token: token || '' })
    }, [user, getMovies, token])

    if (!movieList) return <Spinner />;

    return (
        <div className="home">
            <div className='home__movie-list'>
                <h2 className='home__movie-list-title'>Films</h2>
                {movieList.Entities.map(movie => <Movie movie={movie} key={movie.Id} />)}
              </div>
             <div className='home__movie-list'>
                <h2 className='home__movie-list-title'>Series</h2>
                 {movieList.Entities.map(movie => <Movie movie={movie} key={movie.Id} />)}
            </div>
        </div>
        
    );
}

export default Home