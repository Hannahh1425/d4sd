import styled from 'styled-components';
import { device } from './breakpoints.js';

export const FullImg = styled.img `
    width: 100%;
`

export const IconImg = styled.img `
    width: ${props => props.small ? "9%":"20%"};
`
