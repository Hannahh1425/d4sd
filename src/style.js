import styled from 'styled-components';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

export const Relative = styled.div `
    position: relative;
`

export const HomeStyle = styled.div `
    @media ${device.laptop} {
        position: absolute;
        left: 10%;
        width: 50%;
        top: 8em;
    }
    @media ${device.mobileS} {
        position: relative;
        top: 3em;        
    }


`

export const LargeBtn = styled.a `
    border-radius: 25px;
    border: 1.5px solid #1A89DB;
    font-size: 1em;
    color: #1A89DB;
    text-align: center;
    font-weight: 900;
    padding: 0.7em 1.35em;
    display: ${props => props.isAction === "true" ? "inline":"none"}
    &:hover {
        text-decoration: none;
        background-color: #1A89DB;
        color: white;
    }
`

export const FullImg = styled.img `
    width: 100%;
`
