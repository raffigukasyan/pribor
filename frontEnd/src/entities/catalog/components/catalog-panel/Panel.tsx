import {
    PanelBody,
    PanelBurger,
    PanelButton,
    PanelCatalog,
    CatalogMenu,
    CatalogMenuItem, CatalogMenuItemLink, CatalogMenuItemSubMenu, CatalogMenuItemTitle
} from "./PanelStyled.ts";
import {useState} from "react";
import {Container} from "../../../../shared/styles/components.ts";

export const Panel = (): JSX.Element => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    return <PanelBody>
        <PanelButton onClick={() => setIsOpen(!isOpen)}>
            <PanelBurger $isOpen={isOpen}>
                <div></div>
            </PanelBurger>
            Каталог товаров
        </PanelButton>
        <PanelCatalog $isOpen={isOpen}>
            <Container>
                <CatalogMenu>
                    <CatalogMenuItem>
                        <CatalogMenuItemTitle>Товары нашего производства</CatalogMenuItemTitle>
                    </CatalogMenuItem>
                    <CatalogMenuItem>
                        <CatalogMenuItemTitle>О борудование для лабораторий зерноперерабатывающих
                            производств</CatalogMenuItemTitle>
                        <CatalogMenuItemSubMenu>
                            <CatalogMenuItemLink>определение влажности зерна и продуктов его
                                переработки</CatalogMenuItemLink>
                            <CatalogMenuItemLink>оборудование для определения качества зерна и
                                муки</CatalogMenuItemLink>
                            <CatalogMenuItemLink>определение количества и качества клейковины</CatalogMenuItemLink>
                            <CatalogMenuItemLink>определение качества крупяных культур</CatalogMenuItemLink>
                            <CatalogMenuItemLink>отбор проб и определение примесей</CatalogMenuItemLink>
                            <CatalogMenuItemLink>мельницы лабораторные</CatalogMenuItemLink>
                        </CatalogMenuItemSubMenu>
                    </CatalogMenuItem>
                    <CatalogMenuItem>
                        <CatalogMenuItemTitle>Оборудование для хлебопекарного производства</CatalogMenuItemTitle>
                    </CatalogMenuItem>
                    <CatalogMenuItem>
                        <CatalogMenuItemTitle>Лабораторное оборудование общего назначения</CatalogMenuItemTitle>
                    </CatalogMenuItem>
                    <CatalogMenuItem>
                        <CatalogMenuItemTitle>Медицинское оборудование</CatalogMenuItemTitle>
                    </CatalogMenuItem>
                    <CatalogMenuItem>
                        <CatalogMenuItemTitle>treterterter</CatalogMenuItemTitle>
                    </CatalogMenuItem>
                </CatalogMenu>
            </Container>
        </PanelCatalog>
    </PanelBody>
}