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
    @media ${device.tablet} {
      position: relative;
      left: 5%;
      width: 85%;
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
    background-image: ${props => `url(${props.image})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-width: 100%;
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
        height: 40vh!important;
    }
    @media ${device.tablet} {
        height: 35vh!important;
    }
    @media ${device.laptop} {
        height: 40vh!important;
    }
    @media ${device.laptopL} {
        height: 40vh!important;
    }
`

export const Br = styled.div `
    @media ${device.mobileS} {
        height: 20px;
    }
    @media ${device.tablet} {
        height: 24px!important;
    }
    @media ${device.laptop} {
        height: 26px!important;
    }
    @media ${device.laptopL} {
        height: 40px!important;
    }
`

export const Iframe = styled.iframe `
    position: absolute;
    top: 0;
    left: 10%;
    width: 80%;
    height: 75%;
    background-color: #EFF8FF;
`
