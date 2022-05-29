import {configureStore} from "@reduxjs/toolkit";
import {vodApi} from "./api";
import appSlice from "./appSlice";
import {loadingHandler} from "./middleware/loadingHandler";
import {metaHandler} from "./middleware/metaHandler";
import playerSlice from "./playerSlice";

export const store = configureStore({
  reducer: {
    [vodApi.reducerPath]: vodApi.reducer,
    player: playerSlice,
    appState: appSlice,
  },
  middleware: getDefualtMiddleware => getDefualtMiddleware().concat(metaHandler).concat(loadingHandler),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
