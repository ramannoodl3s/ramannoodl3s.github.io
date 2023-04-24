import { Container, Navbar, SerializedData, Wrapper } from "../../components";
import logo from '../../assets/homepage/logo 4.png';
import { BrandContainer, BrandDiv, BrandInfo } from "../Antonym/Antonym.styled";
import img1 from '../../assets/vmax/pic1.png';
import img2 from '../../assets/vmax/pic2.png';
import img3 from '../../assets/vmax/pic3.png';
import data from '../../data/Vmax.json';

import { ImageContainer } from "../../components/ImageContainer/ImageContainer.styled";



function Vmax() {

    const images = {
        img1,
        img2,
        img3
    }

    const components = [];

    for (let i = 0; i < data.length; i++) {
        const el = data[i];

        if (el.type === 'image') {
            components.push(
                <ImageContainer key={i} el={el.alt?.length} height="auto">
                    {/* 
// @ts-ignore */}
                    {el.alt?.map((item: string, i) => <img style={{ padding: '0 2rem'}} key={i} src={images[`${item}`]} />)}

                </ImageContainer>
            )
        } else {
            components.push(
                <BrandInfo key={i}>
                                        {/* 
// @ts-ignore */}
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
            <Wrapper>
                <Navbar>
                    <BrandDiv>
                        <BrandContainer>
                            <img src={logo} />

                            <BrandInfo>
                                A growing social movement and clothing brand centered around<br />modern urban, automotive and skate culture.
                            </BrandInfo>
                        </BrandContainer>
                    </BrandDiv>
                </Navbar>
                <Container>
                    {components}
                </Container>
            </Wrapper>
        </>
    )
}

export default Vmax;