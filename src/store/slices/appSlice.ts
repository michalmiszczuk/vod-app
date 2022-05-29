import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AppState {
  isLoading: boolean,
  error: null | string,
  user: null | string
}

const initialState: AppState = {
  isLoading: false,
  error: null,
  user: null,
}


export const appSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    setUser(state, action: PayloadAction<string | null>) {
      state.user = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const {setError, setUser, setIsLoading} = appSlice.actions;
export default appSlice.reducer;