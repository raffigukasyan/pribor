import {Container, HeaderLink} from "../../app/styles/components.ts";
import Logo from "../../ui/Icon/Logo.tsx";
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
                <Container>
                    <Logo />
                </Container>
            </HeaderBottomStyled>

        </HeaderStyled>
    )
}