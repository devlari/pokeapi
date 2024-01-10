import GearSix from "@phosphor-icons/react/GearSix";
import Star from "@phosphor-icons/react/Star";
import GithubLogo from "@phosphor-icons/react/GithubLogo";
import Image from "next/image";
import { Link } from './header-button.styles';

type HeaderButtonProps = {
    title: string;
}

export default function HeaderButton({ title }: HeaderButtonProps) {
    const IconFight = '/icons/boxing-glove.png'

    let href = '/'
    switch (title) {
        case 'Favorites':
            href = '/favoritos'
            break;

        case 'Settings':
            href = '/configuracoes'
            break;

        case 'Fight':
            href = '/pokerinha'
            break;

        case 'Github':
            href = 'https://github.com/devlari/pokeapi'
            break;
    }
    
    return (
        <Link href={href} target={title == 'Github' ? '_blank' : '_parent'}>
            {title === 'Github' && <GithubLogo size={45} color="#FFC900" /> }
            {title === 'Favorites' && <Star size={45} color="#FFC900" /> }
            {title === 'Settings' && <GearSix size={45} color="#FFC900" /> }
            {title === 'Fight' && <Image src={IconFight} alt="Boxing Gloves" width={45} height={45} />}
        </Link>
    )
}