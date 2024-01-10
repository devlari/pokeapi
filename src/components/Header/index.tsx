import { StyledHeader, Title, HeaderTitle, HeaderLinks } from "./header.styles"
import Image from "next/image"
import Pokemon from '@public/images/pokemon.png'
import { GearSix, Star } from "@phosphor-icons/react"
import HeaderButton from "./Button"

export default function Header() {
    return (
        <StyledHeader>
            <HeaderTitle>
                <Image src={Pokemon} width={150} height={80} alt="Pokemon"/>
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