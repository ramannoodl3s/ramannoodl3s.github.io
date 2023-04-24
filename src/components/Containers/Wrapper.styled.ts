import styled from "styled-components";
import bg from '../../assets/homepage/background.png';

export const Wrapper = styled.div<{ bg?: any }>`
    min-height: 100vh;
    height: 100%;
    overflow-y: auto;
    width: 100%;
    display: flex;
    /* align-items: flex-start; */
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    /* background-color: red; */

    background-image: url(${props => props.bg || bg});
    background-repeat: repeat;
`;

