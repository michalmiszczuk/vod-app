import { useEffect } from 'react';
import { useGetPlayMediaMutation } from '../store/api';
import { setIsPlaying, setUrl } from '../store/slices/playerSlice';
import fallBackImg from '../images/alex-litvin-unsplash.jpg'
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { OneMovie } from '../types/movie';

interface MovieProps{
    movie: OneMovie
}

function Movie({ movie }: MovieProps) {
    const user = useAppSelector(state => state.appState.user)
    const dispatch = useAppDispatch()

    const [getMedia, { data }] = useGetPlayMediaMutation();
    const token = localStorage.getItem('auth-token')

    const streamType = user === "Anonymous" ? "TRIAL" : "MAIN"
    const movieFrame = movie.Images.find(img => img.ImageTypeCode === "FRAME");

    useEffect(() => {
        if (data) {
            dispatch(setUrl(data.ContentUrl))
            dispatch(setIsPlaying(true))
        }
    }, [data, dispatch])

    return (
        <div>
            <div className='movie-box' key={movie.Title}>
                <div className='movie-box__img-container'>
                    <img onClick={() => getMedia({ id: movie.Id, token: token || '', streamType })}
                     className='movie-box__img' alt="movie frame" src={movieFrame?.Url || fallBackImg} />
                    <div className='movie-box__title'>{movie.Title}</div>
                </div>
            </div>
        </div>
    );
}

export default Movie;