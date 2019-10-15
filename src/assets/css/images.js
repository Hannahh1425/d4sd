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

export const StyledImg = styled.img `
    width: ${props => props.theme.width};
    height: ${props => props.theme.height};
    @media ${device.mobileS} {
        height: ${props => props.theme.heightS};
    }
    @media ${device.tablet} {
        height: ${props => props.theme.heightT};
    }
    @media ${device.laptopL} {
        height: ${props => props.theme.heightL};
    }
    @media ${device.desktop} {
        height: ${props => props.theme.height};
    }
`
