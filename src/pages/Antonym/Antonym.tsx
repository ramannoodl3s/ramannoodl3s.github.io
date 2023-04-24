import { Container, Navbar, Wrapper } from "../../components";
import logo3 from '../../assets/homepage/logo 3.png';
import img21 from '../../assets/antonym/2.1.png';
import img22 from '../../assets/antonym/2.2.png';
import img23 from '../../assets/antonym/2.3.png';
import img1 from '../../assets/antonym/1.png';
import jav1 from '../../assets/antonym/jav1.png';
import jav2 from '../../assets/antonym/jav2.png';
import data from '../../data/Antonym.json';
import img11 from '../../assets/antonym/1 (2).png';
import img12 from '../../assets/antonym/3.png';
import img13 from '../../assets/antonym/2.png';


import { BrandContainer, BrandDiv, BrandInfo, ImageContainer } from "./Antonym.styled";
import { NavbarContainer } from "../../components/Navbar/Navbar.styled";
function Antonym() {

    const images = {
        img1: img1,
        img21,
        img23,
        img22,
        jav1,
        jav2,
        img11,
        img12,
        img13
    }

    const components = [];

    for (let i = 0; i < data.length; i++) {
        const el = data[i];

        if (el.type === 'image') {
            components.push(
                <ImageContainer key={i} el={el.alt?.length} height="auto">
                    {/* 
// @ts-ignore */}
                    {el.alt?.map((item: string, i) => <img key={i} src={images[`${item}`]} />)}

                </ImageContainer>
            )
        } else {
            components.push(
                <BrandInfo key={i}>
                    {cleanText(el.content as string)}
                </BrandInfo>
            )
        }

    }

    function cleanText(txt: string) {
        return txt.split('\n').map((item, i) => (<span key={i}>{item} <br /></span>));
    }
    return (
        <>
            <Wrapper id="div">

                <Navbar id="nav">
                    <NavbarContainer>
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
                    </NavbarContainer>
                </Navbar>
                <Container id="container">
                    {components}
                </Container>
            </Wrapper>
        </>

    )
}

export default Antonym;