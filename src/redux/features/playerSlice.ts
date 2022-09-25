import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootObject } from "../../types/shazamTypes";

interface InitialState {
  currentSongs: [];
  currentIndex: number;
  isActive: boolean;
  isPlaying: boolean;
  activeSong: {};
  genreListId: string;
}

const initialState: InitialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: "",
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActiveSong(state, action: PayloadAction<RootObject>) {
      state.activeSong = action.payload;
    },
  },
});

export default playerSlice;
