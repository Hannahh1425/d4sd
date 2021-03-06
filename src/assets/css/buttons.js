import styled from 'styled-components';
import { device } from './breakpoints.js';
import { ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';

//Basic template for all regular buttons (for home, headers etc.)
export const Btn = styled.a `
    cursor: pointer;
    border-radius: 10px;
    color: white;
    background-color: #4497FF;
    text-align: center;
    font-weight: 700;
    padding: 0.75em 2em;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0.05em;
    transition: 0.3s;
    box-shadow: 1px 1px 8px 1px #25497A;
    &:hover {
        text-decoration: none;
        color: white;
        box-shadow: 1px 1px 8px 1px #B7DFE6;
        background-color: #88BDFF;
    }
    @media ${device.mobileS} {
        font-size: 0.75em;
        margin-top: ${props => props.top ? "1rem":"0"};
        margin-left: ${props => props.home ? "1rem!important":"0!important"};
    }
    @media ${device.tablet} {
        font-size: 0.75em!important;
        margin-top: 0!important;
        margin-left: ${props => props.left ? "1rem!important":"0!important"};
    }
    @media ${device.laptopL} {
        font-size: 0.875em!important;
        margin-top: 0!important;
        margin-left: ${props => props.left ? "1rem!important":"0!important"};
    }
    @media ${device.desktop} {
        font-size: 1.75em!important;
        margin-top: 0!important;
        margin-left: ${props => props.left ? "1rem!important":"0!important"};
    }
`

//Basic template for all regular buttons (for home, headers etc.)
export const BtnSecondary = styled.button `
    cursor: pointer;
    border-radius: 10px;
    border: 1.5px solid #4497FF;
    color: #4497FF;
    background-color: white;
    text-align: center;
    font-weight: 700;
    padding: 0.75em 2em;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0.05em;
    transition: 0.5s;
    box-shadow: 1px 1px 8px 1px #333;
    &:hover {
        text-decoration: none;
        background-color: white;
        box-shadow: 1px 1px 8px 1px #4497FF;
        border: 1.5px solid #66AAFF;
        color: #66AAFF;
    }
    &:focus {
        outline: none;
    }
    @media ${device.mobileS} {
        font-size: 0.75em;
        margin-top: ${props => props.top ? "1rem":"0"};
        margin-left: ${props => props.home ? "1rem!important":"0!important"};
    }
    @media ${device.tablet} {
        font-size: 0.75em!important;
        margin-top: 0!important;
        margin-left: ${props => props.left ? "1rem!important":"0!important"};
    }
    @media ${device.laptopL} {
        font-size: 0.875em!important;
        margin-top: 0!important;
        margin-left: ${props => props.left ? "1rem!important":"0!important"};
    }
    @media ${device.desktop} {
        font-size: 1.75em!important;
        margin-top: 0!important;
        margin-left: ${props => props.left ? "1rem!important":"0!important"};
    }
`

//Small buttons, usually buttons inside cards
export const SmallBtn = styled(Btn) `
    cursor: pointer;
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

//When the display of the button is conditional
export const BtnConditional = styled(Btn) `
  display: ${props => props.isAction === "true" ? "inline":"none"}
  margin: 30px 10px 10px 10px;
`

//Toggle button for the timeline
export const ToggleBtn = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;

    cursor: pointer;
    border: 1.5px solid #4496FF;
    color: #4496FF;
    text-align: center;
    margin-left: ${props => props.left ? "1rem":"0"};
    background-color: ${props => props.active ? "#4496FF":"white"};
    color: ${props => props.active ? "white":"#4496FF"};
    &:hover {
        text-decoration: none;
        border: 1.5px solid #8FC0FF;
        background-color: #8FC0FF;
        color: white;
    }
    @media ${device.mobileS} {
        font-size: 0.75em;
        padding: 0.5em 0.75em;
    }
    @media ${device.tablet} {
        font-size: 1em!important;
        padding: 0.7em 1.35em;
        margin-top: 0!important;
    }
    @media ${device.desktop} {
        font-size: 1.75em!important;
        padding: 0.7em 1.35em;
        margin-top: 0!important;
    }
`

export const StyledButtonBack = styled(ButtonBack) `
    background: none;
    border: none;
    position: absolute;
    left: 25px;
    top: 40vh;
    font-size: 3em;
    z-index: 100;
    color: rgba(0, 0, 0, 0.7);
    > i {
      border: 3px solid rgba(0, 0, 0, 0.7);
      border-radius: 50%;
      width: 50px;
      height: 50px;
      background-color: #EFF8FF;
      &:hover {
        background-color: #EFF8FF;
        box-shadow: 0px 0px 5px 1px #a6a6a6;
      }
    }
    &:focus {
      outline: none;
    }
    @media ${device.mobileS} {
        display: none;
    }
    @media ${device.tablet} {
        display: inline;
    }
`

export const StyledButtonNext = styled(ButtonNext) `
    background: none;
    border: none;
    position: absolute;
    right: 25px;
    top: 40vh;
    font-size: 3em;
    z-index: 100;
    color: rgba(0, 0, 0, 0.7);
    > i {
      background-color: #EFF8FF;
      border: 3px solid rgba(0, 0, 0, 0.7);
      border-radius: 50%;
      width: 50px;
      height: 50px;
      &:hover {
        background-color: #EFF8FF;
        box-shadow: 0px 0px 5px 1px #a6a6a6;
      }
    }
    &:focus {
      outline: none;
    }
    @media ${device.mobileS} {
        display: none;
    }
    @media ${device.tablet} {
        display: inline;
    }
`

export const StyledDotGroup = styled(DotGroup) `
    > button {
        background-color: #B7DFE6;
        font-family: 'Montserrat', sans-serif;
        font-weight: 900;
        width: 30px;
        height: 30px;
        margin: 1em;
        border-radius: 50%;
        border: none;
        box-shadow: 1px 1px 8px 1px #25497A;
        &:hover {
          box-shadow: 1px 1px 8px 1px #4497FF;
        }
    }
    z-index: 100;
    position: absolute;
    top: 90vh;
    left: 50%;
    margin-left: -124px;
`
