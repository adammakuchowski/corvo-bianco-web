import {BsFacebook} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {RiYoutubeFill} from 'react-icons/ri'

import {IconComponent} from '@/types/types'

import {
  ContentWrapper,
  HeaderContentWrapper,
  SocialMediaCardContainer
} from './SocialMediaCardStyled'
import IconButton from '../../buttons/icon_button/IconButton'

interface SocialMediaCardProps {
  headerText: string;
}

const SocialMediaCard = ({headerText}: SocialMediaCardProps): JSX.Element => {
  const openPage = (address: string): Window | null => window.open(address)

  const socialMedias: IconComponent[] = [
    {
      iconComponent: <BsFacebook/>,
      iconAction: () => openPage('https://facebook.com/')
    },
    {
      iconComponent: <GrInstagram/>,
      iconAction: () => openPage('https://www.instagram.com/')
    },
    {
      iconComponent: <AiFillTwitterCircle/>,
      iconAction: () => openPage('https://twitter.com/')
    },
    {
      iconComponent: <RiYoutubeFill/>,
      iconAction: () => openPage('https://www.youtube.com/')
    }
  ]

  return (
    <SocialMediaCardContainer>
      <HeaderContentWrapper>{headerText}</HeaderContentWrapper>
      <ContentWrapper>
        {socialMedias.map((icon, index) => (
          <IconButton key={index} iconComponent={icon.iconComponent} iconAction={icon.iconAction}/>
        ))}
      </ContentWrapper>
    </SocialMediaCardContainer>
  )
}

export default SocialMediaCard
