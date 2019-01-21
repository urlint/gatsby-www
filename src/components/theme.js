export const breakpoints = [32, 48, 64, 80].map(n => n + 'em')

export const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

export const colors = {
  purpleLight: '#E0DDF6',
  purple: '#4736CA',
  purpleDark: '#27224F',
  green: '#50e3c2',
  black: '#000000',
  white: '#FFFFFF',
  yellow: '#ffe079',
  yellowDark: '#ffc533',
  grayLight: '#f0f0f0',
  gray: '#d9d9d9',
  grayDark: '#8f8f8f'
}

export const fontWeights = {
  light: 300,
  regular: 400,
  bold: 800
}

export const fonts = {
  sans:
    '-apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif',
  mono: 'Consolas, monaco, monospace'
}

export const lineHeights = [1, 1.25, 1.5]

export const shadows = {
  small: '0 0 4px rgba(0, 0, 0, .125)',
  large: '0 0 24px rgba(0, 0, 0, .125)'
}

export const radii = [0, 2, 4, 6, 8]

export const fontSizes = [15, 18, 20, 24, 30, 44, 72]

export const maxWidths = [
  1,
  2,
  4,
  8,
  12,
  16,
  20,
  24,
  28,
  32,
  36,
  40,
  44,
  48,
  64,
  72,
  82,
  96
].map(n => n + 'em')

export const transition = {
  short: '.1s cubic-bezier(.25,.8,.25,1)',
  medium: '.35s cubic-bezier(.25,.8,.25,1)',
  long: '.45s cubic-bezier(.4, 0, .2, 1)'
}

export default {
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  maxWidths,
  radii,
  shadows,
  space,
  transition
}
