import { genres } from "../assets/constants";
import Loader from "../components/Loader";
import SongCard from "../components/SongCard";
import { useGetTopchartsQuery } from "../redux/services/shazamCore";

interface Props {}

const Discover = (props: Props) => {
  const { data, isLoading, error } = useGetTopchartsQuery();

  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {"Pop"}{" "}
        </h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 p-3 text-sm outline-none sm:mt-0 mt-5"
        >
          {genres.map((item) => (
            <option key={item.value} value={item.value}>
              {item.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {/* fetch the from API */}
        {data?.map((song, index) => (
          <SongCard key={index} song={song} i={index} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
