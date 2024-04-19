import styled from "styled-components";
import {baseTheme} from "../../app/styles/theme.ts";

export const HeaderStyled = styled.header`
    width: 100%;
`;

export const HeaderTopStyled = styled.div`
    width: 100%;
    padding: 15px 0;
    background: #FFFFFF;
`;

export const HeaderBottomStyled = styled.div`
    width: 100%;
    padding: 15px 0;
    background: ${baseTheme.colors.background};
`

export const HeaderTopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const HeaderLinkWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 15px;
`