import styled from 'styled-components';

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};
  text-transform: uppercase;

  margin-bottom: ${p => p.theme.space[5]}px;

  text-align: center;

  color: ${p => p.theme.colors.black};
`;

export const TableHead = styled.th`
  border: ${p => p.theme.borders.bold};
  border-color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.tableBackground};
  color: ${p => p.theme.colors.white};
  padding-left: ${p => p.theme.space[6]}px;
  padding-right: ${p => p.theme.space[6]}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
`;

export const Table = styled.table`
  text-transform: capitalize;
  border-collapse: collapse;
  box-shadow: ${p => p.theme.shadows.table};
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.m};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[7]}px;
  color: ${p => p.theme.colors.white};
`;

export const TableRow = styled.tr`
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.borderColor};

  background-color: ${p => {
    const colorOfTableRow = p.children[0].props.children;
    return p.theme.colors[colorOfTableRow];
  }};

  /* &:nth-child(2n) {
       background-color: ${p => p.theme.colors.muted};  
    }  */
`;

export const TableData = styled.td`
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.borderColor};

  padding-left: ${p => p.theme.space[6]}px;
  padding-right: ${p => p.theme.space[6]}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;

  text-align: center;
`;
