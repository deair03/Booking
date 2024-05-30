import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";
function Header()
{
    return (
        <div className="flex justify-between py-5 border-b shadow-sm px-52">
        <HeaderLogo />
        <HeaderSearch />
    </div> 
    )
}

export default Header;