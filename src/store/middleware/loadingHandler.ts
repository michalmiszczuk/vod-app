import {isRejected, Middleware} from "@reduxjs/toolkit";

export const loadingHandler: Middleware =
  ({dispatch}) =>
  next =>
  action => {
    if (action.meta.requestStatus === "pending") {
      dispatch({type: "appState/setIsLoading", payload: true});
    }
    if (isRejected(action)) {
      let errorMsg = action.payload.error || action.payload.data.Message;
      if (action.payload.status === 403) errorMsg = "You have no valid subscription."
      dispatch({type: "appState/setError", payload: errorMsg});
      dispatch({type: "appState/setIsLoading", payload: false});
    }
    if (action.meta.requestStatus === "fulfilled") {
      dispatch({type: "appState/setIsLoading", payload: false});
    }
    return next(action);
  };
