import styled from 'styled-components';
import { device } from './breakpoints.js';

export const Btn = styled.a `
    border-radius: 25px;
    border: 1.5px solid #1A89DB;
    color: #1A89DB;
    text-align: center;
    font-weight: 900;
    padding: 0.7em 1.35em;
    &:hover {
        text-decoration: none;
        background-color: #1A89DB;
        color: white;
    }
    @media ${device.mobileS} {
        font-size: 0.75em;
        margin-top: ${props => props.top ? "1rem":"0"};
        margin-left: ${props => props.left ? "1rem":"0"};
    }
    @media ${device.tablet} {
        font-size: 1em!important;
        margin-top: 0!important;
        margin-left: ${props => props.left ? "1rem!important":"0!important"};
    }
    @media ${device.desktop} {
        font-size: 1.75em!important;
        margin-top: 0!important;
        margin-left: ${props => props.left ? "1rem!important":"0!important"};
    }
`

export const SmallBtn = styled(Btn) `
    border: 1px solid #1A89DB;
    font-weight: 500;
    padding: 0.5em 1em 0.5em 1em;
    @media ${device.mobileS} {
        font-size: 0.75em;
        margin-left: ${props => props.left ? "1rem":"0"};
    }
    @media ${device.tablet} {
        font-size: 0.9em!important;
        margin-left: ${props => props.left ? "1rem":"0"};
    }
    @media ${device.desktop} {
        font-size: 1.5em!important;
        margin-left: ${props => props.left ? "1rem":"0"};
    }
`

export const ToggleBtn = styled(Btn) `
    border: 1px solid #1A89DB;
    font-weight: 500;
    padding: 0.5em 1em 0.5em 1em;
    @media ${device.mobileS} {
        font-size: 0.75em;
        margin-left: ${props => props.left ? "1rem":"0"};
    }
    @media ${device.tablet} {
        font-size: 0.9em!important;
        margin-left: ${props => props.left ? "1rem":"0"};
    }
    @media ${device.desktop} {
        font-size: 1.5em!important;
        margin-left: ${props => props.left ? "1rem":"0"};
    }
`
