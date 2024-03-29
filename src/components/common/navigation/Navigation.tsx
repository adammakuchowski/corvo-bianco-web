import {Link} from 'react-scroll'

import {merriweather} from '@/fonts/fonts'
import {NavigationOptions} from '@/types/types'

import {
  MenuContainer,
  PagesContainer,
  ListWrapper,
  PageItem
} from './NavigationStyled'

interface NavigationProps {
  fontSize?: string;
  options: NavigationOptions[];
  activePage?: number;
  setActivePage: (value: number) => void;
}

const Navigation = ({fontSize = '18px', options, activePage, setActivePage}: NavigationProps): JSX.Element => {
  const switchPage = (index: number): void => {
    setActivePage(index)
  }

  return (
    <MenuContainer>
      <PagesContainer>
        <ListWrapper>
          {options.map((option, index) => (
            <Link key={index} to={option.sectionName ?? ''} smooth={true} duration={500}>
              <PageItem
                className={merriweather.className}
                style={{fontSize}}
                key={index}
                activePage={index === activePage}
                onClick={() => { switchPage(index) }}
              >
                {option.name}
              </PageItem>
            </Link>
          ))}
        </ListWrapper>
      </PagesContainer>
    </MenuContainer>
  )
}

export default Navigation
