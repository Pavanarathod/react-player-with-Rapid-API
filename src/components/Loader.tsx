import loader from "../assets/loader.svg";

type Props = {};
console.log(loader);
const Loader = (props: Props) => {
  return (
    <div className="w-full flex  justify-center items-center flex-col">
      <img src={loader} alt="loader" className="w-32 h-32 object-contain" />
    </div>
  );
};

export default Loader;
