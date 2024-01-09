import { StyledHeader, Title, HeaderTitle, HeaderLinks } from "./header.styles"
import Image from "next/image"
import Pokeball from '@public/images/pokeball.png'
import { GearSix, Star } from "@phosphor-icons/react"
import HeaderButton from "./Button"

export default function Header() {
    return (
        <StyledHeader>
            <HeaderTitle>
                <Image src={Pokeball} width={50} height={50} alt="Pokebola"/>
                <Title>Pokédex</Title>
            </HeaderTitle>
            {/* <HeaderLinks>
                <HeaderButton title="Favorites" />
                <HeaderButton title="Settings" />
                <HeaderButton title="Fight"/>
            </HeaderLinks> */}
        </StyledHeader>
    )
}