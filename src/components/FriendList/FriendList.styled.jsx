import styled from 'styled-components';

export const Title = styled.h2 `
    font-family: ${p=>p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes.l};
    text-transform: uppercase;

    margin-bottom: ${p => p.theme.space[5]}px;
     
    text-align: center;

    color: ${p=>p.theme.colors.black}
`