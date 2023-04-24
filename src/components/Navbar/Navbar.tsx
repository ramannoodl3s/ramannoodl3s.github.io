import { Navbar as NavbarDiv, NavbarContainer } from "./Navbar.styled";
import logo from '../../assets/homepage/rcorplogo.png';

function Navbar({ children }: any) {
    return (
        <NavbarDiv>
            <NavbarContainer>
                <img
                    src={logo}
                />
                {children}
            </NavbarContainer>

        </NavbarDiv>
    )
}

export default Navbar;