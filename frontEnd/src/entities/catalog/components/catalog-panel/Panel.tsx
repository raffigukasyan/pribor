import {
    PanelBody,
    PanelBurger,
    PanelButton,
    PanelCatalog,
    CatalogWrapper,
    CatalogMenu,
    CatalogMenuItem
} from "./PanelStyled.ts";
import {useState} from "react";
import {Container} from "../../../../shared/styles/components.ts";

export const Panel = (): JSX.Element => {

    const [isOpen, setIsOpen] = useState<boolean>(true)
    return <PanelBody>
        <PanelButton onClick={() => setIsOpen(!isOpen)}>
            <PanelBurger $isOpen={isOpen}>
                <div></div>
            </PanelBurger>
            Каталог товаров
        </PanelButton>
        <PanelCatalog $isOpen={isOpen}>
            <Container>
                <CatalogWrapper>
                    <CatalogMenu>
                        <CatalogMenuItem>fsdfsdfsdf</CatalogMenuItem>
                        <CatalogMenuItem>adsad</CatalogMenuItem>
                        <CatalogMenuItem>hgfhfghfgh</CatalogMenuItem>
                        <CatalogMenuItem>treterterter</CatalogMenuItem>
                        <CatalogMenuItem>hgfhfghfgh</CatalogMenuItem>
                        <CatalogMenuItem>treterterter</CatalogMenuItem>
                    </CatalogMenu>
                </CatalogWrapper>
            </Container>
        </PanelCatalog>
    </PanelBody>
}