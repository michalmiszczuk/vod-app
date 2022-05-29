import ReactPlayer from 'react-player';
import { setIsPlaying, setUrl } from '../store/slices/playerSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setError } from '../store/slices/appSlice';

function Player() {
    const { url } = useAppSelector(state => state.player);
    const dispatch = useAppDispatch()

    const handleClosePlayer = () => {
        dispatch(setIsPlaying(false))
        dispatch(setUrl(null))
    }

    return (
        <div className="player">
            {!url && <div className='player__fallback-msg'>No video content...</div>}
            {url && <ReactPlayer onError={() => dispatch(setError('Video is not available.'))} controls={true} playing={true} url={url} />}
            <button onClick={handleClosePlayer} className='player__btn-close' >CLOSE</button>
        </div>
    );
}

export default Player;