import {Link} from 'react-scroll'

import {DisabledIconButtonContainer, IconButtonContainer} from './IconButtonStyled'

interface IconButtonProps {
  iconComponent: any;
  iconAction?: () => void;
  fontSize?: string;
  sectionName?: string;
  disabled?: boolean;
  color?: string;
}

interface DisabledIconButtonProps {
  iconComponent: any;
  fontSize?: string;
}

const DisabledIconButton = ({iconComponent, fontSize}: DisabledIconButtonProps): JSX.Element => (
  <DisabledIconButtonContainer style={{fontSize}}>
    {iconComponent}
  </DisabledIconButtonContainer>
)

const IconButton = ({
  iconComponent,
  iconAction,
  sectionName,
  fontSize = '20px',
  disabled = false
}: IconButtonProps): JSX.Element => {
  const onIconAction = (): void => {
    if (!iconAction) return

    iconAction()
  }

  return (
    <Link to={sectionName ?? ''} smooth={true} duration={500}>
      {disabled
        ? <DisabledIconButton iconComponent={iconComponent} fontSize={fontSize} />
        : <IconButtonContainer onClick={onIconAction} style={{fontSize}}>
          {iconComponent}
        </IconButtonContainer>
      }
    </Link>
  )
}

export default IconButton
