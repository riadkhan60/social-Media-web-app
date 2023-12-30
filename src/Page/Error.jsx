import { Link, useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  return (
    <div className=" flow-root text-center">
      <h2 className=" text-redShade mt-40 text-6xl font-light">
        {" "}
        Unknow Page !
      </h2>
      <p className=" mt-3 text-xl text-white/60">
        Please go back using browser navigation or{" "}
        <strong onClick={() => navigate("/")}>Click</strong> home below
      </p>
      <button
        onClick={() => navigate("/")}
        className=" bg-blueShade m-0 mt-5 h-[50px] w-[50px] rounded-full p-2"
      >
        <Link to={"/"}>
          <span className="material-symbols-outlined">home</span>{" "}
        </Link>
      </button>
    </div>
  );
}

export default Error;
