import styled from 'styled-components';
import { device } from './breakpoints.js';

//Set width of images to 100%
export const FullImg = styled.img `
    width: 100%;
`

//Set the width of the iconic images like the ones in get involved page
//The width can be 9% or 20%
export const IconImg = styled.img `
    width: ${props => props.small ? "9%":"20%"};
`

export const IconImgBig = styled.img `
    width: ${props => props.role ? "70%":"98%"};
`
