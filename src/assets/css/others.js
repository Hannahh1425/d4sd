import styled from 'styled-components';
import { device } from './breakpoints.js';
import intro from '../../img/about_intro.svg';

export const Relative = styled.div `
    position: relative;
`

export const HomeStyle = styled.div `
    @media ${device.laptop} {
        position: absolute!important;
        left: 10%;
        width: 50%;
        top: 3em!important;
    }
    @media ${device.mobileS} {
        position: relative;
        top: 3em;
    }
`

export const Bg = styled.div `
    background-color: ${props => props.blue ? "#EFF8FF":"white"}
`

export const Background = styled.div `
    background-image: url(${intro});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`


export const HalfWidth = styled.div `
    width: 30%;
`
