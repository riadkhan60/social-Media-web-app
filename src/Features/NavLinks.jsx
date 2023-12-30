import NavLinkMenu from "../Ui-Components/NavLinkMenu";

function NavLinks() {
  return (
    <nav className=" flex items-center justify-center rounded-xl bg-main px-6 py-4 ">
      <ul className=" flex items-center justify-center gap-12">
        <NavLinkMenu to={"/"}>
          <span className="material-symbols-outlined">home</span>
        </NavLinkMenu>
        <NavLinkMenu to={"friends"}>
          <span className="material-symbols-outlined">group</span>
        </NavLinkMenu>
        <NavLinkMenu to={"user"}>
          <span className="material-symbols-outlined">person</span>
        </NavLinkMenu>
        <NavLinkMenu to={"notification"}>
          <span className="material-symbols-outlined">notifications</span>
        </NavLinkMenu>
        <NavLinkMenu to={"message"}>
          <span className="material-symbols-outlined">mail</span>
        </NavLinkMenu>
      </ul>
    </nav>
  );
}

export default NavLinks;
