import React from 'react'
import styled from 'styled-components'

import { Text, Link, Image, Container, Flex, Box } from '../elements'

const NavText = styled(Text)`
  display: inline-block;
  &:hover {
    color: white;
  }
`

NavText.defaultProps = {
  ...Text.defaultProps,
  fontSize: [0],
  fontFamily: 'mono',
  color: 'purpleLight'
}

const Header = () => (
  <Box pt={[2, 4]} px={3}>
    <Container>
      <Flex
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
      >
        <Link href='/'>
          <Image width={'32px'} src='/images/logo.png' alt='logo' />
        </Link>
        <Flex>
          <Link
            mr={[3, 4]}
            href='https://urlint.us17.list-manage.com/subscribe?u=21b554e959530699e44273f9c&id=9650e15cc3'
          >
            <NavText>Subscribe</NavText>
          </Link>
          <Link mr={[3, 4]} href='mailto:hello@urlint.co'>
            <NavText>Contact</NavText>
          </Link>
          <Link href='https://changes.now.sh/urlint'>
            <NavText>Changelog</NavText>
          </Link>
        </Flex>
      </Flex>
    </Container>
  </Box>
)

export default Header
