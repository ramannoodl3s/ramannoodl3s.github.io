import styled from "styled-components";

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

    @media (max-width: 900px) {
        img {
            width: ${`${100/2}%`}
        }
    }

    
    @media (max-width: 750px) {
        flex-direction: column;
        flex: 1;
        img {
            width: ${`${100}%`}
        }
    }
`;