import styled from "@emotion/styled";
import bg from '../../assets/homepage/background.png';

export const Landing = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: red; */

    background-image: url(${bg});
    background-repeat: repeat;
`;

export const LandingContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-between;
`;

export const LeftLandingContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 210px;
    margin: 0 3rem;
    justify-content: center;
    align-items: center;

    img {
        width: auto;
        /* height: 30px; */
        object-fit: cover;
        max-width: 100%;
        max-height: 100%;
    }
`;

export const LeftIconGroup = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    img {
        height: 40px;
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
        width: auto;
    }
`

export const RightLandingtContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100px;
    margin: 0 1.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: 50px;
        object-fit: cover;
    }
`;

export const LandingSocial = styled.a`
    font-size: 35px;
    margin: 0 1rem;
    color: white;
`;