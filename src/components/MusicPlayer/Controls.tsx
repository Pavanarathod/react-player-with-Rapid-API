import React from "react";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from "react-icons/bs";
import { RootObject } from "../../types/shazamTypes";

interface ControlsProps {
  isActive: boolean;
  isPlaying: boolean;
  repeat: boolean;
  setRepeat: () => void;
  shuffle: boolean;
  setShuffle: () => void;
  currentSongs: RootObject[];
  handlePlayPause: () => void;
  handlePrevSong: () => void;
  handleNextSong: () => void;
}

const Controls = ({
  isPlaying,
  isActive,
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  currentSongs,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}: ControlsProps) => (
  <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
    <BsArrowRepeat
      size={20}
      color={repeat ? "red" : "white"}
      onClick={setRepeat}
      className="hidden sm:block cursor-pointer"
    />
    {currentSongs?.length && (
      <MdSkipPrevious
        size={30}
        color="#FFF"
        className="cursor-pointer"
        onClick={handlePrevSong}
      />
    )}
    {isPlaying ? (
      <BsFillPauseFill
        size={45}
        color="#FFF"
        onClick={handlePlayPause}
        className="cursor-pointer"
      />
    ) : (
      <BsFillPlayFill
        size={45}
        color="#FFF"
        onClick={handlePlayPause}
        className="cursor-pointer"
      />
    )}
    {currentSongs?.length && (
      <MdSkipNext
        size={30}
        color="#FFF"
        className="cursor-pointer"
        onClick={handleNextSong}
      />
    )}
    <BsShuffle
      size={20}
      color={shuffle ? "red" : "white"}
      onClick={setShuffle}
      className="hidden sm:block cursor-pointer"
    />
  </div>
);

export default Controls;
