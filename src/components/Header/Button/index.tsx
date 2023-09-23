import { GearSix, Star } from "@phosphor-icons/react"
import Image from "next/image";
import { Link } from './header-button.styles';

type HeaderButtonProps = {
    title: string;
}

export default function HeaderButton({ title }: HeaderButtonProps) {
    const IconFight = '/icons/boxing-glove.png'
    const href = title === 'Favorites' ? '/favoritos' : title === 'Settings' ? '/configuracoes' : title === 'Fight' ? '/pokerinha' : '/'

    return (
        <Link href={href}>
            {title === 'Favorites' && <Star size={45} color="#110303" /> }
            {title === 'Settings' && <GearSix size={45} color="#110303" /> }
            {title === 'Fight' && <Image src={IconFight} alt="Boxing Gloves" width={45} height={45} />}
        </Link>
    )
}