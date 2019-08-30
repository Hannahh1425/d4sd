import styled from 'styled-components';
import { device } from './breakpoints.js';

export const Relative = styled.div `
    position: relative;
`

export const HomeStyle = styled.div `
    @media ${device.mobileS} {
        position: relative;
        top: 3em;
    }
    @media ${device.laptop} {
        position: absolute!important;
        left: 10%;
        width: 50%;
        top: 3em!important;
    }
`

export const Bg = styled.div `
    background-color: ${props => props.blue ? "#EFF8FF":"white"}
`

export const FooterBg = styled.div `
    background-color: ${props => props.grey ? "#474747":"white"}
`


export const Background = styled.div `
    background-image: ${props => `url(${props.image})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    @media ${device.mobileS} {
        height: 35vh;
    }
    @media ${device.tablet} {
        height: 30vh!important;
    }
    @media ${device.laptop} {
        height: 35vh!important;
    }
    @media ${device.laptopL} {
        height: 45vh!important;
    }
`

export const Br = styled.div `
    @media ${device.mobileS} {
        height: 24px;
    }
    @media ${device.tablet} {
        height: 28px!important;
    }
    @media ${device.laptop} {
        height: 32px!important;
    }
    @media ${device.laptopL} {
        height: 40px!important;
    }
`


export const HalfWidth = styled.div `
    width: 30%;
`
