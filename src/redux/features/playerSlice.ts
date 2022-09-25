import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootObject } from "../../types/shazamTypes";

interface InitialState {
  currentSongs: [];
  currentIndex: number;
  isActive: boolean;
  isPlaying: boolean;
  activeSong: any;
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
      action: PayloadAction<{ song: RootObject; data: any; i: number }>
    ) {
      state.activeSong = action.payload.song;
      if (action.payload?.data?.tracks?.hits) {
        console.log("first condiaiton is running");
        state.currentSongs = action.payload.data.tracks.hits;
      } else if (action.payload?.data?.properties) {
        console.log("second condition is running..");
        state.currentSongs = action.payload?.data?.tracks;
      } else {
        state.currentSongs = action.payload.data;
      }

      state.currentIndex = action.payload.i;
      state.isActive = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});

export const { setActiveSong, playPause } = playerSlice.actions;

export default playerSlice;
