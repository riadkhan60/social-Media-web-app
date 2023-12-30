import { useState } from "react";

function SearchBar() {
  const [inputFocus, setInputFocus] = useState(false);

  return (
    <div className="flex w-[500px] items-center justify-center gap-4 rounded-xl px-10 ">
      <form className="bg-main flex items-center justify-center gap-4 rounded-xl px-6 py-4">
        <span
          className={`material-symbols-outlined cursor-pointer ${
            inputFocus ? "text-blueShade" : "text-brightertext"
          }`}
        >
          search
        </span>{" "}
        <input
          onClick={() => {
            setInputFocus(true);
            console.log("sdsd");
          }}
          onBlur={() => {
            setInputFocus(false);
            console.log("sdsddasd");
          }}
          type="text"
          className="bg-main placeholder:text-darkertext text-brightertext font-regular w-24 outline-none transition-all duration-300 placeholder:italic placeholder:transition-all placeholder:duration-300 focus:w-[300px] focus:outline-none"
          placeholder="type for friends..."
        />
      </form>
    </div>
  );
}

export default SearchBar;
