import { StyledHeader, HeaderTitle, HeaderLinks } from "./header.styles"
import Image from "next/image"
import Pokemon from '@public/images/pokemon.png'
import HeaderButton from "./Button"

export default function Header() {
    return (
        <StyledHeader>
            <HeaderTitle>
                <Image src={Pokemon} width={150} height={80} alt="Pokemon" unoptimized />
            </HeaderTitle>
            <HeaderLinks>
                <HeaderButton title="Github" />
                {/* <HeaderButton title="Favorites" />
                <HeaderButton title="Settings" />
                <HeaderButton title="Fight"/> */}
            </HeaderLinks>
        </StyledHeader>
    )
}