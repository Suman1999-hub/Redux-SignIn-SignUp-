import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  NavbarBrand,
  Navbar,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { logoutUser } from "../Redux/action";

function NavbarPage() {
  const dispatch = useDispatch();
  const handelDelete = () => {
    dispatch(logoutUser());
  };
  return (
    <>
      <Navbar className="my-2" color="info" style={{ position: "relative" }}>
        <NavbarBrand href="/">
          <img
            alt="logo"
            src="/Black_Panther.png"
            style={{
              height: 60,
              width: 60,
            }}
          />
          BlackPanther
        </NavbarBrand>
        <UncontrolledDropdown className="me-6" direction="start">
          <DropdownToggle tag="span">
            <img
              src="https://xsgames.co/randomusers/avatar.php?g=male"
              className="rounded-circle"
              alt="Avatar"
              width="60px"
              style={{ cursor: "pointer" }}
            />
          </DropdownToggle>
          <DropdownMenu className="custom-dropdown-menu">
            <DropdownItem>
              <Link
                to="/profile"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Profile
              </Link>
            </DropdownItem>
            <DropdownItem onClick={() => handelDelete()}>Log out</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Navbar>
    </>
  );
}

export default NavbarPage;
