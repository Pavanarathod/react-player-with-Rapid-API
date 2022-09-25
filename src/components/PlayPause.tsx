import { RootObject } from "../types/shazamTypes";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
interface Props {
  song: RootObject;
  handlePause: () => void;
  handlePlay: () => void;
}

const PlayPause = (props: Props) => {
  return (
    <FaPlayCircle
      className="hidden absolute top-[50%] left-[40%] text-gray-300 group-hover:inline-block"
      size={35}
      onClick={props.handlePlay}
    />
  );
};

export default PlayPause;
