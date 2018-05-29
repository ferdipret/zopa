/**
 * When working with colours we often want to adjust the colour's lightness
 * based on element states. So we'll create a function which will allow
 * us to define color functions with a lightness modifier
 *
 * USAGE: const darkOlive = createColor(75, 50, 25) - This will define a
 * colour function with a base of hsl(75, 50%, 25%)(l) the `l` is the
 * lightness modifier. We can adjust lightness by passing a percentage as a
 * number value. Where 100(%) is completely white, -100(%) is completely
 * black and 0 is the defined colour's default lightness
 *
 * @param {int} h - the hue value
 * @param {int} s - the saturation value
 * @param {int} l - the lightness value
 *
 * @returns {function}
 */
export const createColor = (h, s, l) => (m = 0) =>
  !m
    ? `hsl(${h}, ${s}%, ${l}%)`
    : `hsl(${h}, ${s}%, ${l + ((m > 0 ? 100 - l : l) * m) / 100}%)`

export default {
  primary: l => createColor(245, 95, 61)(l),
  danger: l => createColor(353, 98, 41)(l),
  chartStrokePrimary: l => createColor(39, 100, 58)(l),
  chartStrokeSecondary: l => createColor(240, 11, 93)(l),
  alphaGrey: (l = 50) => `hsla(0, 0%, 0%, ${l / 100})`,

  labelText: l => createColor(230, 34, 17)(l),
  labelHelper: l => createColor(0, 0, 29)(l),
  greyInputBorder: l => createColor(233, 11, 85)(l),
}
