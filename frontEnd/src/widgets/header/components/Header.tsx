import {Container, Link} from "../../../shared/styles/components.ts";
import {
    HeaderBottomStyled, HeaderBottomWrapper,
    HeaderLinkWrapper,
    HeaderStyled,
    HeaderTopStyled,
    HeaderTopWrapper
} from "./HeaderStyled.ts";

import {Logo} from "../../../shared/components/index.ts";
import {Panel} from "../../../entities/catalog/index.ts";

import {CATEGORY_LINKS} from "../../../shared/consts/index.ts";
import {ICategoryLinks} from "../../../shared/types/index.ts";

const navigationLinks = CATEGORY_LINKS.map((link:ICategoryLinks, idx:number):JSX.Element => {
    return (
        <Link key={idx} >{link.title}</Link>
    )
})

export const Header  = () =>  {

    return (
        <HeaderStyled>
            <HeaderTopStyled>
                <Container>
                    <HeaderTopWrapper>
                        <Link>Ростов-на-Дону</Link>
                        <HeaderLinkWrapper>
                            {navigationLinks}
                        </HeaderLinkWrapper>
                            <Link>dsdsd</Link>
                    </HeaderTopWrapper>
                </Container>
            </HeaderTopStyled>
            <HeaderBottomStyled>
                <Container>
                    <HeaderBottomWrapper>
                        <Logo />
                        <Panel />
                    </HeaderBottomWrapper>
                </Container>
            </HeaderBottomStyled>

        </HeaderStyled>
    )
}