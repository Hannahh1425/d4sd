import styled from 'styled-components';
import { device } from './breakpoints.js';
import img from '../img/about_header.svg';
import { CarouselProvider } from 'pure-react-carousel';

//The outer container defines the maximum width the page no matter what the screen size is
//The content inside the outer container can either be left-aligned or centered (when the center attribute appears)
export const OuterContainer = styled.div `
    text-align: ${props => props.center ? "center":"left"};
    margin: auto;
    height: ${props => props.full ? "100vh":""};
    @media ${device.mobileS} {
        max-width: 320px;
    }
    @media ${device.tablet} {
        max-width: 720px!important;
    }
    @media ${device.laptop} {
        max-width: 1200px!important;
    }
    @media ${device.laptopL} {
        max-width: 2400px!important;
    }
`

//The inner container defines the maximum width of the content when you want to
//leave more space around your contents
export const InnerContainer = styled.div `
    @media ${device.mobileS} {
        margin: auto;
        width: 320px;
    }
    @media ${device.tablet} {
        margin: auto;
        width: 80%!important;
    }
    @media ${device.laptop} {
        margin: auto;
        width: 65%!important;
    }
    @media ${device.laptopL} {
        margin: auto;
        width: 60%!important;
    }
    display: flex;
    flex-direction: column;
    align-content: center;
`

//For the cards like the ones on Get Involved page
export const Card = styled.div `
    box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, 0.6);
    padding: 24px 24px 0 24px;
    border-radius: 10px;
`

//For displaying components in flexbox layout like the Goal section on about page
//and the cards on get involved page
//The content inside can be centered (when the center attribute is presented) or left-aligned
export const OuterFlexBox = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: ${props => props.center ? "center":"flex-start"};
`

//For diplaying inside the outer flex box
export const InnerFlexBox = styled.div `
    display: flex;
    align-items: ${props => props.center ? "center":"flex-start"};
    justify-content: ${props => props.start ? "flex-start":"space-between"};
    @media ${device.laptop} {
        width: ${props => props.half ? "50%!important":"100%"};
    }
    @media ${device.mobileS} {
        width: 100%;
        padding: ${props => props.half ? "14px":"0"}
    }
`

export const ToggleFlexBox = styled.div `
    display: flex;
    border-radius: 15px;
    align-items: ${props => props.center ? "center":"flex-start"};
    justify-content: ${props => props.middle ? "center":"space-between"};
    @media ${device.laptop} {
        width: ${props => props.half ? "50%!important":"100%"};
    }
    @media ${device.mobileS} {
        width: 100%;
        padding: ${props => props.half ? "14px":"0"}
    }
`

export const IframeContainer = styled.div `
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-width: 100%;
`

export const FlexibleWidth = styled.div `
    margin: auto;
    @media ${device.mobileS} {
        width: 50%;
    }
    @media ${device.tablet} {
        width: 25%;
    }
`

export const StyledCarouselProvider = styled(CarouselProvider) `
    overflow: hidden;
    @media ${device.mobileS} {
        height: 100%;
    }
    @media ${device.tablet} {
        height: 800px;
    }
    @media ${device.laptopL} {
        height: 800px;
    }
    @media ${device.desktop} {
        height: 850px;
    }
`

export const TempPadding = styled.div `

    @media ${device.mobileS} {
        background: transparent;
        padding: 0;
    }
    @media ${device.laptop} {
        borderRadius: 15px;
        background-color: rgba(255, 255, 255, 0.5)!important;
        padding: 3em 3.5em!important;
    }
`
