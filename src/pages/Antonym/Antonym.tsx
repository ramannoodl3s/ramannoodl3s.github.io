import { Navbar } from "../../components";
import logo from '../../assets/homepage/rcorplogo.png';
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


import { ANavbar, ANavbarContainer, AntonymContainer, AntonymDiv, BrandContainer, BrandDiv, BrandInfo, ImageContainer } from "./Antonym.styled";
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
                <ImageContainer el={el.alt?.length} height="auto">
                    {/* 
// @ts-ignore */}
                    {el.alt?.map((item: string, i) => <img key={i} src={images[`${item}`]} />)}

                </ImageContainer>
            )
        } else {
            components.push(
                <BrandInfo>
                    {cleanText(el.content as string)}
                </BrandInfo>
            )
        }

    }

    function cleanText(txt: string) {
        console.log(txt);
        return txt.split('\n').map((item, i) => (<span key={i}>{item} <br /></span>));
    }
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
                    </ANavbarContainer>
                </ANavbar>
                <AntonymContainer id="container">
                    {components}
                </AntonymContainer>
            </AntonymDiv>
        </>

    )
}

export default Antonym;