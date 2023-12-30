import Logo from "./Ui-Components/logo";
import SearchBar from "./Ui-Components/SearchBar";
import NavLinks from "./Features/NavLinks";
import UserLinks from "./Features/userLinks";

function NavigationMenu() {
  return (
    <header className=" mx-auto flex w-[90%] items-stretch justify-between py-8">
      <Logo />
      <SearchBar />
      <NavLinks />
      <UserLinks />
    </header>
  );
}

export default NavigationMenu;
