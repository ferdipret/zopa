import { css } from 'styled-components'

const sizes = {
  tablet: 768,
  desktop: 1024,
}

export default Object.keys(sizes).reduce((acc, label) => {
  const emSize = sizes[label] / 16
  acc[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return acc
}, {})
