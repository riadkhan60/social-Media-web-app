function Button({children}) {
  return (
    <button
      type="submit"
      className="bg-blueShade flex w-full justify-center rounded-xl px-3 py-2 text-sm font-bold leading-6 text-darkertext shadow-sm  hover:bg-blueShade/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {children}
    </button>
  );
}

export default Button
