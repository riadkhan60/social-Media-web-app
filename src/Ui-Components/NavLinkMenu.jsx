import { NavLink } from "react-router-dom";

function NavLinkMenu({children, type, src, to }) {
  if (type === "img")
    return (
      <NavLink
        to={to}
        className="flex items-center justify-center"
      >
        <img className="rounded-full object-cover w-[24] h-[24] bg-cover" src={src} width={24} height={24} alt="" />
      </NavLink>
    );
  return (
    <NavLink
      to={to}
      className=" flex items-center justify-center text-brightertext transition-all duration-300 hover:text-blueShade"
    >
      {children}
    </NavLink>
  );
}

export default NavLinkMenu;
