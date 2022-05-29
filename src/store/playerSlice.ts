import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface PlayerState{
  isPlaying: boolean,
  url: string | null | undefined
}

const initialState: PlayerState = {
  isPlaying: false,
  url: null,
}

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setIsPlaying(state, action: PayloadAction<boolean>) {
      state.isPlaying = action.payload;
    },
    setUrl(state, action: PayloadAction<string | null | undefined>) {
      state.url = action.payload;
    },
  },
});

export const {setIsPlaying, setUrl} = playerSlice.actions;
export default playerSlice.reducer;
