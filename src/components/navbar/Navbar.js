import { useHistory } from "react-router-dom";
import { NavButton, StyledMain, StyledNavbar } from "./Navbar.styled";

const Navbar = (props) => {
  const history = useHistory();
  const loginHandler = () => history.push("/login");
  const signUpnHandler = () => history.push("/signup");
  return (
    <>
      <StyledNavbar>
        <NavButton onClick={loginHandler}>Login</NavButton>
        <NavButton onClick={signUpnHandler}>Sign up</NavButton>
      </StyledNavbar>
      <StyledMain>{props.children}</StyledMain>
    </>
  );
};

export default Navbar;
