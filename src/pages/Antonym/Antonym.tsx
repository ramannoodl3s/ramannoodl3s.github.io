import { Navbar } from "../../components";
import logo from '../../assets/homepage/rcorplogo.png';
import logo3 from '../../assets/homepage/logo 3.png';
import img21 from '../../assets/antonym/2.1.png';
import img22 from '../../assets/antonym/2.2.png';
import img23 from '../../assets/antonym/2.3.png';
import img1 from '../../assets/antonym/1.png';
import { ANavbar, ANavbarContainer, AntonymContainer, AntonymDiv, BrandContainer, BrandDiv, BrandInfo, ImageContainer } from "./Antonym.styled";
function Antonym() {
    return (
        <>
            <AntonymDiv id="div">

                <ANavbar id="nav">
                    <ANavbarContainer>
                        <img
                            src={logo}
                        />
                        <BrandDiv>
                            <BrandContainer>
                                <img
                                    src={logo3}
                                />
                                <BrandInfo>
                                    bespoke automotive builds designed to break the boundaries of tradition.&nbps<br></br>created in 3D and 2D digital mediums.
                                </BrandInfo>
                            </BrandContainer>
                        </BrandDiv>
                        {/* <ImageContainer width="80%" height="auto">
                        <img
                            src={img1}
                        />
                    </ImageContainer>
                    <BrandInfo>
                        "project LxGHTSPEED"<br />completed 06.04.22<br />1997 Subaru Alycone SVX.<br />electric powertrain.
                    </BrandInfo> */}
                    </ANavbarContainer>
                </ANavbar>
                <AntonymContainer id="container">
                    <ImageContainer width="80%" height="auto">
                        <img
                            src={img1}
                        />
                    </ImageContainer>
                    <BrandInfo style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                        {"project LxGHTSPEED"}<br />{'completed 06.04.22'}<br />{'1997 Subaru Alycone SVX.'}<br />{'electric powertrain.'}<br /><br />{`"sometimes i still dream of living a normal life.`}<br />{`maybe i'll use my craziness to change the world instead."`}
                    </BrandInfo>
                    <ImageContainer el={3} width="30%" height="auto">
                        <img
                            src={img21}
                        />
                        <img
                            src={img22}
                        />
                        <img
                            src={img23}
                        />
                    </ImageContainer>
                    <BrandInfo style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                        {"~"}
                    </BrandInfo>
                </AntonymContainer>
            </AntonymDiv>
        </>

    )
}

export default Antonym;