import { Link } from "react-router-dom";
import { RootObject } from "../types/shazamTypes";
import PlayPause from "./PlayPause";

interface Props {
  song: RootObject;
  i: number;
}

const SongCard = ({ song, i }: Props) => {
  const activeSong = {
    title: "Test",
  };

  const handlePaly = () => {};
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop:blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="min-h-56 w-full group">
        <div className="relative ">
          <img
            src={song.images.coverart}
            alt="song_title"
            className="group-hover:bg-black group-hover:opacity-50"
          />
          <div>
            <PlayPause
              song={song}
              handlePlay={handlePaly}
              handlePause={() => {}}
            />
          </div>
        </div>
        <div>
          <p className="font-semibold text-white text-lg truncate">
            <Link to={`/songs/${song.key}`}>{song.title}</Link>
          </p>
          <p className="font-semibold text-gray-300 mt-1 text-sm truncate">
            <Link to={`/songs/${song.key}`}>{song.subtitle}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
