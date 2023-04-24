import styled from "styled-components";
import bg from '../../assets/homepage/background.png';
import { Navbar, NavbarContainer } from "../../components/Navbar/Navbar.styled";

export const ANavbar = styled(Navbar)`
    min-height: 6.5rem;
    height: auto;
    position: relative;
`

export const ANavbarContainer = styled(NavbarContainer)`
    flex-direction: column;
`;

export const BrandDiv = styled.div`
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

export const BrandContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0 3rem;
    /* background-color: green; */

    img {
        width: auto;
        height: 150px;
        object-fit: cover;
        max-width: 100%;
        max-height: 100%;

        @media (max-width: 1100px) {
            height: 110px;
        }

        @media (max-width: 900px) {
            height: 100px;
        }

        @media (max-width: 800px) {
            height: 85px;
        }

        @media (max-width: 600px) {
            height: 70px;
        }

        @media (max-width: 500px) {
            height: 50px;
        }
    }
`;


export const AntonymDiv = styled.div`
    min-height: 100vh;
    height: 100%;
    overflow-y: auto;
    width: 100%;
    display: flex;
    /* align-items: flex-start; */
    align-items: center;
    flex-direction: column;
    justify-content: center;
    /* background-color: red; */

    background-image: url(${bg});
    background-repeat: repeat;
`;

export const AntonymContainer = styled.div`
    position: relative;
    display: flex;
    padding: 0;
    height: 100%;
    width: 90%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const BrandInfo = styled.div`
    /* background-color: red; */
    /* height: 90px; */
    margin: 1rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 200;
    margin: 2rem 0;


    @media (max-width: 1100px) {
        font-size: 1rem;
    }

    @media (max-width: 800px) {
        font-size: 0.8rem;
    }
`;

export const ImageContainer = styled.div<{ el?: number, height: string, width?: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    img {
        width: ${(props) => `${100 / (props.el || 1)}%`};
        height: ${(props) => props.height};
        object-fit: cover;
        max-width: 100%;
        max-height: 100%;
    }
`;