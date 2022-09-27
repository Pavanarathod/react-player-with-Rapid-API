import { RootObject } from "../types/shazamTypes";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { useAppDispatch } from "../hooks/hooks";
import SongCard from "./SongCard";

interface Props {
  song: RootObject;
  isPlaying: boolean;
  activeSong: any; // THIS ACTIVE SONG IS TYPE OF RootObject
  handlePause: () => void;
  handlePlay: () => void;
}

const PlayPause = ({
  isPlaying,
  handlePause,
  handlePlay,
  song,
  activeSong,
}: Props) => {
  return (
    <>
      {isPlaying && activeSong.title === song.title ? (
        <FaPauseCircle
          className="hidden absolute top-[50%] left-[40%] text-gray-300 group-hover:inline-block"
          size={35}
          onClick={handlePause}
        />
      ) : (
        <FaPlayCircle
          className="hidden absolute top-[50%] left-[40%] text-gray-300 group-hover:inline-block"
          size={35}
          onClick={handlePlay}
        />
      )}
    </>
  );
};

export default PlayPause;
