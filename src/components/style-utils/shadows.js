import color from './colors'

export default {
  input: {
    default: `0 1px 0 0 ${color.primary()}`,
    danger: `0 1px 0 0 ${color.danger()}`,
  },

  button: {
    default: `0 2px 4px 0  ${color.alphaGrey()};`,
    hover: `0 1px 2px 0  ${color.alphaGrey()};`,
    active: `0 0px 1px 0  ${color.alphaGrey()};`,
  },
}
