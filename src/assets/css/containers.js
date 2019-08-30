import styled from 'styled-components';
import { device } from './breakpoints.js';

export const OuterContainer = styled.div `
    text-align: ${props => props.center ? "center":"left"}
    @media ${device.mobileS} {
        margin: auto;
        max-width: 320px;
    }
    @media ${device.tablet} {
        margin: auto;
        max-width: 720px!important;
    }
    @media ${device.laptopL} {
        margin: auto;
        max-width: 1200px!important;
    }
    @media ${device.laptopL} {
        margin: auto;
        max-width: 2400px!important;
    }
`

export const InnerContainer = styled.div `
    @media ${device.mobileS} {
        margin: auto;
        width: 320px;
    }
    @media ${device.tablet} {
        margin: auto;
        width: 720px!important;
    }
    @media ${device.laptopL} {
        margin: auto;
        width: 70%!important;
    }
    display: flex;
    flex-direction: column;
    align-content: center;
`

export const Card = styled.div `
    box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, 0.6);
    padding: 24px 24px 0 24px;
    border-radius: 10px;
`

export const OuterFlexBox = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: ${props => props.center ? "center":"flex-start"};
`

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
