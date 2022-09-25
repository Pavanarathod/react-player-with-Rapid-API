import { genres } from "../assets/constants";

interface Props {}

const Discover = (props: Props) => {
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
        {[1, 2, 3, 4, 5, 6, 7, , 8, 9, 10].map((song) => (
          <div key={song}>{song}</div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
