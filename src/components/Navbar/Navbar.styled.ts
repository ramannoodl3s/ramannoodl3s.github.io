import styled from "styled-components";

export const Navbar = styled.div`
    min-height: 6.5rem;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media only screen and (min-device-width: 320px) and (max-device-width: 
  480px) and (-webkit-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {
    height: 5rem;
  }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 3rem;
    flex-direction: column;
    /* background-color: green; */

    img {
        width: auto;
        height: 80px;
        object-fit: cover;
        max-width: 100%;
        max-height: 100%;
    }
`;
