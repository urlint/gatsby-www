import React from 'react'
import {
  Button as ButtonBase,
  Link as LinkBase,
  Image,
  Text as TextBase,
  Flex,
  Box
} from 'rebass'
import styled from 'styled-components'
import { fonts, colors } from '../theme'
import { Link as GatsbyLink } from 'gatsby'
import { color, space, height, width, style } from 'styled-system'

// Since DOM elements <a> cannot receive activeClassName,
// destructure the prop here and pass it only to GatsbyLink
const withLink = ChildComponent => ({
  children,
  to,
  activeClassName,
  ...props
}) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const isInternal = /^\/(?!\/)/.test(to)
  const rel = isInternal ? null : 'noopener noreferrer'
  const target = isInternal ? '_self' : '_blank'

  // Use Gatsby Link for internal links, and <a> for propss
  if (isInternal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        rel={rel}
        target={target}
        {...props}
      >
        {children}
      </GatsbyLink>
    )
  }

  return (
    <ChildComponent href={to} rel={rel} target={target} {...props}>
      {children}
    </ChildComponent>
  )
}

const Container = styled('div')`
  margin: auto;
  position: relative;
  width: 100%;
  max-width: 980px;
`

const Text = props => <TextBase as='p' {...props} />

const Gradient = styled('div')`
  background: linear-gradient(${colors.purpleDark}, ${colors.black} 100%);
`

const H1 = props => (
  <Text
    as='h1'
    fontFamily='sans'
    letterSpacing='-1px'
    fontWeight='bold'
    fontSize={[5, 6]}
    {...props}
  />
)

const H2 = props => (
  <Text
    as='h2'
    fontFamily='sans'
    fontWeight='light'
    fontSize={[3, 4]}
    {...props}
  />
)

const Lead = props => (
  <Text
    lineHeight={2}
    fontFamily='sans'
    fontWeight='light'
    fontSize={[3, 4]}
    {...props}
  />
)

const Link = withLink(LinkBase)

const ButtonWrapper = styled(ButtonBase)`
  box-shadow: 0 4px 14px 0 rgba(54, 33, 223, 0.39);
  transition: all 0.22s ease 0s;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    box-shadow: 0 6px 20px 0 rgba(54, 33, 223, 0.23);
    filter: brightness(130%);
  }
`

ButtonWrapper.defaultProps = {
  ...ButtonBase.defaultProps,
  color: 'white',
  bg: 'purple',
  radii: 4,
  py: '15px',
  px: '20px'
}

const Button = props => (
  <ButtonWrapper>
    <Text
      as='div'
      fontSize={2}
      fontWeight='regular'
      fontFamily='sans'
      style={{ display: 'flex', alignItems: 'center' }}
      {...props}
    />
  </ButtonWrapper>
)

const transform = style({
  prop: 'transform',
  cssProperty: 'transform'
})

const Video = styled('video')(height, width, space)

Video.propTypes = {
  ...width.propTypes,
  ...height.propTypes,
  ...space.propTypes
}

const Svg = styled('svg')(
  { as: 'svg', fill: 'currentColor' },
  color,
  space,
  height,
  width,
  transform
)

Svg.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...color.propTypes
}

export {
  Box,
  Button,
  Container,
  Flex,
  Gradient,
  H1,
  H2,
  Image,
  Lead,
  Link,
  Svg,
  Text,
  Video
}
