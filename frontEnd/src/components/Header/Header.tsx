import {Container, HeaderLink} from "../../styles/components.ts";
import {
    HeaderBottomStyled,
    HeaderLinkWrapper,
    HeaderStyled,
    HeaderTopStyled,
    HeaderTopWrapper
} from "./HeaderStyled.ts";



export default function Header(): JSX.Element {
    return (
        <HeaderStyled>
            <HeaderTopStyled>
                <Container>
                    <HeaderTopWrapper>
                        <HeaderLink>Ростов-на-Дону</HeaderLink>
                        <HeaderLinkWrapper>
                            <HeaderLink>Сертификаты</HeaderLink>
                            <HeaderLink>Условия доставки и оплаты</HeaderLink>
                            <HeaderLink>Контакты</HeaderLink>
                            <HeaderLink>Прайс</HeaderLink>
                            <HeaderLink>Сервис</HeaderLink>
                        </HeaderLinkWrapper>
                            <HeaderLink>dsdsd</HeaderLink>
                    </HeaderTopWrapper>
                </Container>
            </HeaderTopStyled>
            <HeaderBottomStyled>

            </HeaderBottomStyled>

        </HeaderStyled>
    )
}