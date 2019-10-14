import styled from 'styled-components';
import { device } from './breakpoints.js';

//For titles on the header
export const H1 = styled.h1 `
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    color: #333333;
    position: relative;
    z-index: 100;
    padding: 0 14px;
    text-align: ${props => props.center ? "center":"inherit"}
    @media ${device.mobileS} {
        font-size: 30px;
    }
    @media ${device.laptopL} {
        font-size: 2.5em!important;
    }
    @media ${device.desktop} {
        font-size: 4.0em!important;
    }
`

//For questions on the homepage and subtitles on about page
export const H2 = styled.h2 `
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    color: #333333;
    position: relative;
    z-index: 100;
    padding: 0 14px;
    margin: auto;
    text-align: ${props => props.center ? "center":"inherit"}
    @media ${device.mobileS} {
        width: ${props => props.half ? "100%":""};
        font-size: 24px;
    }
    @media ${device.tablet} {
        width: ${props => props.half ? "60%":""};
    }
    @media ${device.laptopL} {
        width: ${props => props.half ? "70%":""};
        font-size: 2em!important;
    }
    @media ${device.desktop} {
        width: ${props => props.half ? "70%":""};
        font-size: 3.5em!important;
    }
`

//
export const H3 = styled.h3 `
    font-family: 'Open Sans', sans-serif;
    color: #A7A7A7;
    font-weight: 700;
    line-height: 1em;
    margin: 15px 15px;
    @media ${device.mobileS} {
        font-size: 0.8em;
    }
    @media ${device.laptopL} {
        font-size: 1.1em;!important;
        line-height: 1.3em!important;
    }
    @media ${device.desktop} {
        font-size: 1.9em!important;
    }
`

//For card title in get involve page
export const H4 = styled.h4 `
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    color: #333333;
    position: relative;
    z-index: 100;
    padding: 0 14px;
    width: 100%;
    @media ${device.mobileS} {
        font-size: 1.25em;
    }
    @media ${device.laptopL} {
        font-size: 1.5em!important;
    }
    @media ${device.desktop} {
        font-size: 2.5em!important;
    }
`

//For all paragraphs
export const H5 = styled.h5 `
    font-family: 'Open Sans', sans-serif;
    color: #333333;
    line-height: 1.5em;
    padding: 0 14px;
    text-align: ${props => props.left ? "left":"center"}
    @media ${device.mobileS} {
        font-size: 1em;
    }
    @media ${device.laptopL} {
        font-size: 1.20em;!important;
        line-height: 1.5em!important;
    }
    @media ${device.desktop} {
        font-size: 2em!important;
    }
`

//For footer
export const H6 = styled.h6 `
    font-family: 'Open Sans', sans-serif;
    color: #D0D0D0;
    line-height: 1em;
    @media ${device.mobileS} {
        font-size: 0.7em;
    }
    @media ${device.laptopL} {
        font-size: 1em;!important;
        line-height: 1.2em!important;
    }
    @media ${device.desktop} {
        font-size: 1.7em!important;
    }
`

export const A = styled.a `
    font-family: 'Open Sans', sans-serif;
    color: #4496FF;
    &:hover {
    color: #8FC0FF;
    text-decoration: none;
    }
`
