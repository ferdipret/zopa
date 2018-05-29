import styled from 'styled-components'
import color from './style-utils/colors'

export default styled.div`
  color: ${color.labelText()};
  font-family: Helvetica;
  font-size: ${props => (props.main ? '32px' : '16px')};
  font-weight: normal;
  margin-bottom: 20px;
  letter-spacing: -1px;
  line-height: 40px;
`
