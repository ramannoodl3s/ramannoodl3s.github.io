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

function Landing() {
    const navigate = useNavigate();
    const IconArray = [
        [brandLogo1, arrow1, ''],
        [brandLogo2, arrow2, ''],
        [brandLogo3, arrow3, '/antonym'],
        [brandLogo4, arrow4, '']
    ];


    return (
        <LandingDiv>
            <LandingContainer>
                <LeftLandingContainer>
                    {IconArray.map((item, i) => (
                        <LeftIconGroup onClick={() => navigate(item[2])} key={i} id='grp'>
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
    )
}

export default Landing;
