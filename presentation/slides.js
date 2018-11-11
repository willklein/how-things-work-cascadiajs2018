import React from 'react'
import { Slide, Text, Heading } from 'spectacle'
import { MDXProvider } from '@mdx-js/tag'
import components from './components'
import theme from './theme'
// import { redBright } from 'ansi-colors'

// import createTheme from "spectacle-theme-sober";
// const theme = createTheme();

// DEFAULT LAYOUT

export const DefaultSlide = ({ children, ...rest }) => (
  <Slide bgColor="#3C2E4F" {...rest}>
    <MDXProvider components={darkComponents}>{children}</MDXProvider>
  </Slide>
)

// DARK LAYOUT

const darkComponents = {
  ...components,
  h1: ({ children }) => (
    <Heading size={1} textColor={theme.screen.colors.primary}>
      {children}
    </Heading>
  ),
  h2: ({ children }) => (
    <Heading size={2} textColor={theme.screen.colors.primary}>
      {children}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading size={3} textColor={theme.screen.colors.primary}>
      {children}
    </Heading>
  ),
  h4: ({ children }) => (
    <Heading size={4} textColor={theme.screen.colors.primary}>
      {children}
    </Heading>
  ),
  h5: ({ children }) => (
    <Heading size={5} textColor={theme.screen.colors.primary}>
      {children}
    </Heading>
  ),
  h6: ({ children }) => (
    <Heading size={6} textColor={theme.screen.colors.primary}>
      {children}
    </Heading>
  ),
  p: ({ children }) => <Text textColor="white">{children}</Text>
}

const lightComponents = {
  h1: ({ children }) => (
    <Heading size={1} textColor={theme.screen.colors.primary}>
      {children}
    </Heading>
  ),
  h2: ({ children }) => (
    <Heading size={2} textColor={theme.screen.colors.primary}>
      {children}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading size={3} textColor={theme.screen.colors.primary}>
      {children}
    </Heading>
  ),
  h4: ({ children }) => (
    <Heading size={4} textColor={theme.screen.colors.primary}>
      {children}
    </Heading>
  ),
  h5: ({ children }) => (
    <Heading size={5} textColor={theme.screen.colors.primary}>
      {children}
    </Heading>
  ),
  h6: ({ children }) => (
    <Heading size={6} textColor={theme.screen.colors.primary}>
      {children}
    </Heading>
  ),
  p: ({ children }) => <Text textColor="white">{children}</Text>
}

const whiteComponents = {
  h1: ({ children }) => (
    <Heading size={1} textColor="white">
      {children}
    </Heading>
  ),
  h2: ({ children }) => (
    <Heading size={2} textColor="white">
      {children}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading size={3} textColor="white">
      {children}
    </Heading>
  ),
  h4: ({ children }) => (
    <Heading size={4} textColor="white">
      {children}
    </Heading>
  ),
  h5: ({ children }) => (
    <Heading size={5} textColor="white">
      {children}
    </Heading>
  ),
  h6: ({ children }) => (
    <Heading size={6} textColor="white">
      {children}
    </Heading>
  ),
  p: ({ children }) => <Text textColor="white">{children}</Text>
}

export const DarkSlide = ({ children, ...rest }) => (
  <Slide bgColor="#3C2E4F" {...rest}>
    <MDXProvider components={darkComponents}>{children}</MDXProvider>
  </Slide>
)

export const LightSlide = ({ children, ...rest }) => (
  <Slide bgColor={theme.screen.colors.primary} {...rest}>
    <MDXProvider components={lightComponents}>{children}</MDXProvider>
  </Slide>
)

// CODE LAYOUT

export const CodeSlide = ({ children, ...rest }) => (
  <Slide bgColor="#1d1f21" {...rest}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Slide>
)

export const ProfileSlide = ({ children, ...rest }) => (
  <Slide bgImage="family.jpg" {...rest}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Slide>
)

export const TreeSlide = ({ children, ...rest }) => (
  <Slide bgImage="tree.png" {...rest}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Slide>
)

export const DrillSlide = ({ children, ...rest }) => (
  <Slide bgImage="drill-press.jpg" {...rest}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Slide>
)

export const LatheSlide = ({ children, ...rest }) => (
  <Slide bgImage="lathe.jpg" {...rest}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Slide>
)

export const ToolWallSlide = ({ children, ...rest }) => (
  <Slide bgImage="tool-wall.jpg" {...rest}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Slide>
)

export const WorkshopSlide = ({ children, ...rest }) => (
  <Slide bgImage="workshop.jpg" {...rest}>
    <MDXProvider components={lightComponents}>{children}</MDXProvider>
  </Slide>
)

export const MachineSlide = ({ children, ...rest }) => (
  <Slide bgImage="printing-machine.jpg" bgDarken={0.8} {...rest}>
    <MDXProvider components={lightComponents}>{children}</MDXProvider>
  </Slide>
)

export const WorkshopTitleSlide = ({ children, ...rest }) => (
  <Slide bgImage="workshop.jpg" bgDarken={0.4} {...rest}>
    <Title />

    <p textColor={theme.screen.colors.primary}>
      <strong>Will Klein</strong>
    </p>

    <p textColor={theme.screen.colors.primary}>
      @willslab
    </p>
  </Slide>
)

export const TitleSlide = ({ children, ...rest }) => (
  <Slide bgImage="tool-wall.jpg" bgDarken={0.8} {...rest}>

    <Title />

    <p textColor={theme.screen.colors.primary}>
      <strong>Will Klein</strong>
    </p>

    <p textColor={theme.screen.colors.primary}>
      @willslab
    </p>
  </Slide>
)

export const TitleImageSlide = ({ children, ...rest }) => (
  <Slide bgImage="tool-wall.jpg" bgDarken={0.2} />
)

export const Title = () => (
  <Heading size={2} textColor={theme.screen.colors.primary}>
    How Linters, Compilers & Other Cool Things Work
  </Heading>
)

export const ExplorerSlide = ({ children, ...rest }) => (
  <Slide>
    <iframe height="700" width="1000" src="http://localhost:8080" />
  </Slide>
)

export const KungFuSlide = ({ children, ...rest }) => (
  <Slide bgImage="kungfu.gif" />
)

export const NeoSlide = ({ children, ...rest }) => (
  <Slide bgImage="neoasts.webp" bgDarken={0.3}>
    <MDXProvider components={whiteComponents}>{children}</MDXProvider>
  </Slide>
)