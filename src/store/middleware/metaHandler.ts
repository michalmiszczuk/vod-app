import { Middleware } from "@reduxjs/toolkit";

export const metaHandler: Middleware = store => next => action => {
  if (!action.meta) action.meta = "";
  return next(action);
};
