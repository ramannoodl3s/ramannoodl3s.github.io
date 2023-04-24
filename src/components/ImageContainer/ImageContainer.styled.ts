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
`;