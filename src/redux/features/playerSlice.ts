import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootObject } from "../../types/shazamTypes";

interface InitialState {
  currentSongs: RootObject[];
  currentIndex: number;
  isActive: boolean;
  isPlaying: boolean;
  activeSong: RootObject | {};
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
    setActiveSong(
      state,
      action: PayloadAction<{ song: RootObject; data: RootObject[]; i: number }>
    ) {
      state.activeSong = action.payload.song;
      state.currentSongs = action.payload.data;
      state.currentIndex = action.payload.i;
      state.isActive = true;
    },

    nextSong(state, action: PayloadAction<number>) {
      state.activeSong = state.currentSongs[action.payload];
      state.currentIndex = action.payload;
      state.isActive = true;
    },

    prevSong(state, action: PayloadAction<number>) {
      state.activeSong = state.currentSongs[action.payload];
      state.currentIndex = action.payload;
      state.isActive = true;
    },

    playPause: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
  },
});

export const { setActiveSong, playPause, nextSong, prevSong } =
  playerSlice.actions;

export default playerSlice;
