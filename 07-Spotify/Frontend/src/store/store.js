import { configureStore } from "@reduxjs/toolkit"
import musicReducer from "./features/musicAPI";
import albumReducer from "./features/albumAPI";

export const store = configureStore({
  reducer: {
    music: musicReducer,
    album: albumReducer
  }
})