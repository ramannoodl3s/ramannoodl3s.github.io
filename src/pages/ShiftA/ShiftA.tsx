import { Container, Navbar, Wrapper } from "../../components";
import logo from '../../assets/shifta/logo_2_2.png';
import { BrandContainer, BrandDiv, BrandInfo } from "../Antonym/Antonym.styled";
import img01 from '../../assets/shifta/renders/krunker/Layer_12.png'
import img02 from '../../assets/shifta/renders/krunker/Layer_36.png'
import img03 from '../../assets/shifta/renders/krunker/Layer_35.png'
import img1 from '../../assets/shifta/renders/krunker/Image0001.png';
import img2 from '../../assets/shifta/renders/krunker/Image0002.png'
import img3 from '../../assets/shifta/renders/krunker/Image0003.png'
import img4 from '../../assets/shifta/renders/krunker/Image0004.png'
import img5 from '../../assets/shifta/renders/krunker/Image0005.png'
import img6 from '../../assets/shifta/renders/krunker/Image0006.png'
import img7 from '../../assets/shifta/renders/krunker/Image0007.png'
import img8 from '../../assets/shifta/renders/krunker/Image0008.png'
import img9 from '../../assets/shifta/renders/krunker/Image0009.png'
import img10 from '../../assets/shifta/renders/krunker/Image0010.png'
import img11 from '../../assets/shifta/renders/krunker/Image0011.png'
import img12 from '../../assets/shifta/renders/krunker/Image0012.png'
import img13 from '../../assets/shifta/renders/krunker/Image0013.png'
import img14 from '../../assets/shifta/renders/krunker/Image0014.png'
import img15 from '../../assets/shifta/renders/krunker/Image0015.png'
import img16 from '../../assets/shifta/renders/krunker/Image0016.png'
import img17 from '../../assets/shifta/renders/krunker/Image0017.png'
import img18 from '../../assets/shifta/renders/krunker/Image0018.png'
import img19 from '../../assets/shifta/renders/krunker/Image0019.png'
import img20 from '../../assets/shifta/renders/krunker/Image0020.png'
import bg from '../../assets/homepage/background.png';
import data from '../../data/ShiftA.json';
import { useEffect, useState } from 'react';

import { ImageContainer } from "../../components/ImageContainer/ImageContainer.styled";
import { Box, Button, Dialog, Modal, Popover, Popper, Typography } from "@mui/material";



function ShiftA() {

    const images = {
        img01,
        img02,
        img03,
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15,
        img16,
        img17,
        img18,
        img19,
        img20
    }

    const components = [];
    const [modalMap, setModalMap] = useState<(true | false)[]>([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [id, activeId] = useState<number>(-1);

    const handleModal = (val: boolean, e: React.MouseEvent<any, MouseEvent>) => {
        let i = parseInt(e.currentTarget.getAttribute('modalid') as string);
        activeId(i);
        modalMap[i] = val;

    }




    const handleOpen = (ev: any) => {
        setAnchorEl(ev.currentTarget);
    }

    const handleClose = (ev: any) => {
        setAnchorEl(null);
    }

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };


    // const open = Boolean(anchorEl);

    let modalIndex = 0;

    for (let i = 0; i < data.length; i++) {
        const el = data[i];

        if (el.type === 'image') {
            components.push(
                <ImageContainer


                    key={i} el={el.alt?.length} height="auto">

                    <>

                        {el.alt?.map((item: string, i) => {
                            modalIndex++; return (<>
                                {/* 
                        // @ts-ignore */}

                                <img modalid={modalIndex - 1} style={{ padding: '0 2rem' }} key={i} src={images[`${item}`]} onClick={(e) => handleModal(true, e)} />

                                {el.hover &&
                                    <Modal
                                        id={String(modalIndex - 1)}
                                        open={(id === modalIndex - 1) && (modalMap[id] === true)}


                                    >
                                        <Box sx={{ ...style, justifyContent: 'center', alignItems: 'center', width: '90%', backgroundImage: `url(${bg})`, backgroundRepeat: 'repeat' }}>
                                            
                                            <ImageContainer el={1} height="auto">
                                                {/* 
                        // @ts-ignore */}
                                                <img style={{ width: 'auto', maxHeight: '300px' }} src={images[`${item}`]} alt="a" />
                                            </ImageContainer>
                                            <p style={{ textAlign: 'center', color: 'white' }} id="child-modal-description">
                                                {cleanText(el.hover[i])}
                                            </p>
                                            <Button style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }} onClick={(e) => handleModal(false, e)}>Close</Button>
                                        </Box>
                                    </Modal>
                                }
                            </>)
                        })}

                    </>
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

    useEffect(() => {
        let a = new Array(modalIndex).fill(false);
        setModalMap(a);
    }, [])
    // setModalMap(new Array(modalIndex).fill(false));
    useEffect(() => {  }, [id]);


    // console.log(modalMap)

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
                                {cleanText("a collective of weapons and designs produced for video games.\nincluding but not limited to:\nCS:GO\nKrunker.io\nRainbow Six*\nShatterline*\nSplitgate")}
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

export default ShiftA;