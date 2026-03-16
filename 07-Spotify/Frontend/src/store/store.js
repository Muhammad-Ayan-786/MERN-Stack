import { configureStore } from "@reduxjs/toolkit"
import musicReducer from "./features/musicAPI";

export const store = configureStore({
  reducer: {
    music: musicReducer
  }
})