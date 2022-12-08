import styled from "styled-components";

export const Title = styled.h2`
    display: block;
    text-transform: uppercase;
    font-family: ${p => p.theme.fonts.heading};
    font-size: ${p=>p.theme.fontSizes.l};
    font-size: ${p=> p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.bold};
    
    padding-top: ${p=> p.theme.space[5]}px ;
    padding-bottom: ${p=> p.theme.space[5]}px ;
    padding-right: ${p=> p.theme.space[3]}px ;
    padding-left: ${p => p.theme.space[3]}px ;
    
    color: ${p => p.theme.colors.accent};
`

export const TextItem = styled.span`
    font-family: ${p=>p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.black};      
    
`