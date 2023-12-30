function Input({ type, value, setValue }) {
  return (
    <div>
      <input
        id={type}
        name={type}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoComplete={type}
        required=""
        className="block w-full rounded-xl border-0 bg-main px-4 py-1.5 text-white  shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blueShade sm:text-sm sm:leading-6"
      />
    </div>
  );
}

export default Input;
