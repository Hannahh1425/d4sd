import styled, {css} from 'styled-components';
import { device } from './breakpoints.js';

//Set the position to be relative
export const Relative = styled.div `
    position: relative;
`

//Set the style in the homepage
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
//Set the background
//It can be blue (when blue attribute is presented) or white like the one on about page
//Or it can be the image if the image attribute is presented in element
export const Bg = styled.div `
    background-color: ${props => props.blue ? "#EFF8FF":"white"}
    background-image: ${props => `url(${props.image})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-width: 100%;
`

//Background for footer
export const FooterBg = styled.div `
    background-color: ${props => props.grey ? "#474747":"white"}
`

export const Arrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  text-align: center;
  position: absolute;
  top: 30vh;
  width: 10%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
`;

//
// export const Background = styled.div `
//     background-image: ${props => `url(${props.image})`};
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center;
//     @media ${device.mobileS} {
//         height: 40vh!important;
//     }
//     @media ${device.tablet} {
//         height: 35vh!important;
//     }
//     @media ${device.laptop} {
//         height: 40vh!important;
//     }
//     @media ${device.laptopL} {
//         height: 40vh!important;
//     }
// `

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
