import NavLinkMenu from "../Ui-Components/NavLinkMenu";
import useAuthValue from "../contexts/AuthoValues";

function UserLinks() {
  const { logOut } = useAuthValue();
  function handleClick(){
    logOut();
  }
  return (
    <nav className="flex items-center justify-center rounded-xl bg-main px-6 py-4 ">
      <ul className=" flex items-center justify-center gap-10">
        <NavLinkMenu
          to={"account"}
          type="img"
          // src="../../data/riad.jpg"
          src="./pro.jpeg"
        ></NavLinkMenu>
        <a
          className=" flex items-center cursor-pointer justify-center text-brightertext transition-all duration-300 hover:text-blueShade"
          onClick={handleClick}
        >
          <span className="material-symbols-outlined">logout</span>
        </a>
      </ul>
    </nav>
  );
}

export default UserLinks;
