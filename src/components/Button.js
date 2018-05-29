import styled from 'styled-components'
import shadow from './style-utils/shadows'
import color from './style-utils/colors'
import media from './style-utils/media'

export default styled.button`
  background-color: ${color.primary()};
  box-shadow: ${shadow.button.default};
  border: none;
  border-radius: 24px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  height: 48px;
  margin: 60px 0 40px;
  transition: box-shadow 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms,
    background-color 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  width: 100%;

  ${media.desktop`
    margin-top: 189px;
  `};

  &:hover {
    background-color: ${color.primary(-3)};
    box-shadow: ${shadow.button.hover};
  }

  &:active {
    background-color: ${color.primary(-6)};
    box-shadow: ${shadow.button.active};
  }
`
