import styled from "styled-components";

export const StatusMarker = styled.span`
    display: block;
    width: ${p => p.theme.sizes.statusMarker};
    height: ${p => p.theme.sizes.statusMarker};
    border-radius: ${p => p.theme.radii.round};
    margin-right: ${p => p.theme.space[4]}px;
    
    background-color: ${p => p.children===true ? p.theme.colors.online : p.theme.colors.offline}
   `

export const FriendName = styled.p `
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.bold};
    margin-left: ${p => p.theme.space[4]}px;
`






