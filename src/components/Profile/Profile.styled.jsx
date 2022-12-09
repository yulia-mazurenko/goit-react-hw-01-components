import styled from 'styled-components';

// export const StyledProfile = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;

//     width: 250px;
//     padding-top: ${p=>p.theme.space[5]}px;
//     margin-left: auto;
//     margin-right: auto;
    
//     background-color: ${p=>p.theme.colors.background}
// `

// export const UserDescription= styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
// `

export const UserAvatar = styled.img `
    width: 150px;
    max-width: 100%;

    margin-bottom: ${p=>p.theme.space[5]}px;

    border: ${p=>p.theme.borders.bold};
    border-radius: ${p=>p.theme.radii.round};
    border-color: lightgray;
`

export const UserName = styled.h2`
    font-family: ${p=>p.theme.fonts.heading};
    font-size: ${p=>p.theme.fontSizes.l};
    font-weight: ${p=>p.theme.fontWeights.bold};
    
    margin-bottom: ${p=>p.theme.space[4]}px;

    color: ${p=>p.theme.colors.accentColor}
`

export const UserInfo = styled.p `
    font-family: ${p=>p.theme.fonts.body};
    font-size: ${p=>p.theme.fontSizes.m};

    margin-bottom: ${p=>p.theme.space[4]}px;

    color: ${p=>p.theme.colors.text}
`

/* export const UserStats = styled.ul `
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 250px;
` */

export const Title = styled.h2 `
    font-family: ${p=>p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes.l};
    text-transform: uppercase;

    margin-bottom: ${p => p.theme.space[4]}px;
     
    text-align: center;

    color: ${p=>p.theme.colors.black}
`

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(250px / 3);
    padding-top: ${p=> p.theme.space[2]}px ;
    padding-bottom: ${p=> p.theme.space[2]}px ;
    
    border: ${p=>p.theme.borders.normal};
    border-color: lightgrey;
    color: ${p=>p.theme.colors.text};
    

    svg {
        width: 20px;
        height: 20px;
        margin-bottom: 5px;
        color: ${p=> p.theme.colors.accentColor};
        
    }
`

