import styled, {css} from "styled-components";
import {baseTheme} from "../../../../shared/styles/theme.ts";

export const  PanelButton = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 18px 18px 48px;
    background: #FFFF;
    border: none;
    border-radius: 15px;
    position: relative;
`

export const PanelBurger = styled.div<{$isOpen: boolean}>`
    top: 50%;
    left: 15%;
    transform: translate(-50%, -50%);
    position: absolute;
    width: 25px;
    
     &:after, &:before, div {
        background: #000;
        content: "";
        display: block;
        height: 2px;
        border-radius: 3px;
        margin: 7px 0;
        transition: 0.5s;
    }
    
    ${({$isOpen}) => $isOpen && css`
        &:before {
            transform: translateY(9px) rotate(135deg);
        }
        &:after {
            transform: translateY(-10px) rotate(-134deg);
        }
        div {
            transform: scale(0);
        }`
}
}
`

export const PanelBody = styled.div`
`
export const PanelCatalog = styled.div<{$isOpen: boolean}>`
    width: 100%;
    position: absolute;
    left: 0;
    top: 100%;
    background: #FFFF;
    box-shadow: 1px 2px 3px #e1e1e185;
    transition-property: clip;
    transition-duration: 0.8s;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    clip: ${({$isOpen}) => $isOpen ? 'rect(auto, auto, 20rem, auto)' : ' rect(auto, auto, 0, auto)'};
    overflow: ${({$isOpen}) => $isOpen ? 'visible' : 'hidden'};
`

export const CatalogWrapper = styled.div`
    padding: 25px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const CatalogMenu = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    row-gap: 20px;
`

export const CatalogMenuItem = styled.div`
    font-size: 18px;
    color: ${baseTheme.colors.color};
    font-weight: 500;
    cursor: pointer;
`