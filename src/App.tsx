import { useAppSelector } from "./store/hooks";
import ErrorToast from "./components/ErrorToast";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Player from "./components/Player";
import Spinner from "./components/Spinner";
import SplashScreen from "./components/SplashScreen";

function App() {
  const {isPlaying} = useAppSelector(state => state.player);
  const {user, error, isLoading} = useAppSelector(state => state.appState);

  return (
    <div className="app-container">
      {user && <NavBar />}
      {!user && <SplashScreen />}
      {user && <Home />}
      {isPlaying && <Player />}
      {isLoading && <Spinner />}
      {error && <ErrorToast />}
    </div>
  );
}

export default App;
