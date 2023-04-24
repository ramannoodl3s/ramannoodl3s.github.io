import { Landing as LandingDiv, LandingContainer, LeftLandingContainer, RightLandingtContainer, LandingSocial, LeftIconGroup } from "./Landing.styled";
import brandLogo1 from '../../assets/homepage/logo 1.png';
import brandLogo2 from '../../assets/homepage/logo 2.png';
import brandLogo3 from '../../assets/homepage/logo 3.png';
import brandLogo4 from '../../assets/homepage/logo 4.png';
import social1 from '../../assets/homepage/social1.png';
import social2 from '../../assets/homepage/social2.png';
import social3 from '../../assets/homepage/social3.png';
import arrow1 from '../../assets/homepage/arrow1.png';
import arrow2 from '../../assets/homepage/arrow2.png';
import arrow3 from '../../assets/homepage/arrow3.png';
import arrow4 from '../../assets/homepage/arrow4.png';
import { useNavigate } from 'react-router-dom';
import { Footer } from "../../components";
import logo from '../../assets/homepage/rcorplogo.png'
import styled from "styled-components";

const Navbar = styled.div`
    height: 6.5rem;
    z-index: 99;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media only screen and (min-device-width: 320px) and (max-device-width: 
  480px) and (-webkit-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {
    height: 5rem;
  }
`;

const NavbarContainer = styled.div`
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

function Landing() {
    const navigate = useNavigate();
    const IconArray = [
        [brandLogo1, arrow1, ''],
        [brandLogo2, arrow2, ''],
        [brandLogo3, arrow3, '/antonym'],
        [brandLogo4, arrow4, '']
    ];


    return (
        <>
            <Navbar>
                <NavbarContainer>
                    <img src={logo} />
                </NavbarContainer>
            </Navbar>
            <LandingDiv>
                <LandingContainer>
                    <LeftLandingContainer>
                        {IconArray.map((item, i) => (
                            <LeftIconGroup onClick={() => navigate(item[2])} key={i}>
                                <img src={item[0]}></img>
                                <img src={item[1]}></img>
                            </LeftIconGroup>
                        ))}
                    </LeftLandingContainer>
                    <RightLandingtContainer>
                        <LandingSocial target="_blank">
                            <img src={social1}></img>
                        </LandingSocial>
                        <LandingSocial target="_blank">
                            <img src={social2}></img>

                        </LandingSocial>
                        <LandingSocial target="_blank">
                            <img src={social3}></img>

                        </LandingSocial>
                    </RightLandingtContainer>
                </LandingContainer>
            </LandingDiv>
            <Footer />
        </>
    )
}

export default Landing;
