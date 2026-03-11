import { configureStore } from "@reduxjs/toolkit"
import registerAPIReducer from "./features/registerAPI";

export const store = configureStore({
  reducer: {
    registerAPI: registerAPIReducer
  }
})