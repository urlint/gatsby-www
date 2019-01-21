import React from 'react'

import { Section, Head, Layout } from '../components/patterns'
import styled, { keyframes } from 'styled-components'
import {
  Svg,
  Text,
  Video,
  Container,
  Button,
  Gradient,
  H1,
  Lead,
  Flex,
  Box
} from '../components/elements'
import { ThemeProvider } from 'styled-components'

import theme from '../components/theme'

const blinker = keyframes`
  from {
    opacity: 1.0;
  }
  to {
    opacity: 0.0;
  }
`

const BlinkCursor = styled('span')`
  background-color: ${theme.colors.white};
  animation-name: ${blinker};
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(1, 0, 0, 1);
  animation-duration: 1s;
  display: inline-block;
  width: 1px;
  height: 14px;
  border-radius: 3px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`

const GitHubIcon = props => (
  <Svg
    stroke='currentColor'
    fill='currentColor'
    strokeWidth={0}
    viewBox='0 0 16 16'
    height='1em'
    width='1em'
    {...props}
  >
    <path
      fillRule='evenodd'
      d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z'
    />
  </Svg>
)

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Gradient>
      <Layout>
        <Container>
          <Section pt={3} pb={5} px={3}>
            <Box mb={5}>
              <H1 color='white' pt={4} my={3} textAlign='center'>
                Keep your links up to date.
              </H1>
              <Lead px={[3, 4]} mt={0} textAlign='center' color='purpleLight'>
                Detect every broken link into your webs and ensure they are
                reachable before your customers do.
              </Lead>
              <Flex
                flexDirection={['column', 'row']}
                alignItems={['center', 'inherit']}
                justifyContent='center'
              >
                <Flex>
                  <Text
                    fontFamily='mono'
                    mr={[0, 4]}
                    fontSize={2}
                    color='white'
                  >
                    <span>$ </span>
                    <span>npx urlint </span>
                    <BlinkCursor />
                  </Text>
                </Flex>
                <Button>
                  <Text as='span' mr={'5px'}>
                    Install on GitHub
                  </Text>
                  <GitHubIcon />
                </Button>
              </Flex>
            </Box>
            <Video width='100%' poster='/images/demo.jpg' autoPlay loop muted>
              <source src='/images/demo.mp4' type='video/mp4' />
            </Video>
          </Section>
        </Container>
      </Layout>
    </Gradient>
  </ThemeProvider>
)

export default IndexPage
