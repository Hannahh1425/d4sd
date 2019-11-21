import styled from 'styled-components';
import { device } from './breakpoints.js';


//Set the background
//It can be blue (when blue attribute is presented) or white like the one on about page
//Or it can be the image if the image attribute is presented in element
export const Bg = styled.div `
    background-color: ${props => props.theme.color};
    background-image: ${props => `url(${props.image})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
    background-width: 100%;
    @media ${device.mobileS} {
        background-size: contain;
    }
    @media ${device.tablet} {
        background-size: cover;
    }
`

export const ChallengeBg = styled.div `
    background-color: ${props => props.theme.color};
    background-image: ${props => `url(${props.image})`};
    box-shadow: 0px 0px 3px 0px #999999;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
    background-width: 100%;
    width: 400px;
    height: 200px;
    border-radius: 20px;
    &:hover {
      cursor: pointer;
      box-shadow: 0px 0px 8px 0px #999999;
    }
    @media ${device.mobileS} {
        background-size: contain;
    }
    @media ${device.tablet} {
        background-size: cover;
    }
`

export const Shade = styled.div `
    width: 400px;
    height: 200px;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.4);
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

export const Vl = styled.div `
    border-left: 4px solid #4497FF;
    height: 90%;
    margin-top: 40px;
    @media ${device.mobileS} {
      margin-left: 33px;
    }
    @media ${device.tablet} {
      margin-left: 43px;
    }
    @media ${device.laptopL} {
      margin-left: 43px;
    }
`

export const Hl = styled.div `
    position: relative;
    top: 15px;
    @media ${device.mobileS} {
      &:before {
        content: "";
        position: absolute;
        height: 45px;
        width: 45px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-image: ${props => `url(${props.image})`};
      }
    }
    @media ${device.tablet} {
      &:before {
        content: "";
        position: absolute;
        left: -10px;
        width: 60px;
        height: 60px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-image: ${props => `url(${props.image})`};
      }
    }
    @media ${device.laptopL} {
      &:before {
        content: "";
        position: absolute;
        left: -25px;
        width: 70px;
        height: 70px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-image: ${props => `url(${props.image})`};
      }
    }

`
