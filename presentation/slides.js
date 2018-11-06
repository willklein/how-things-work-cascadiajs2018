import React from "react";
import { Slide, Text, Heading } from "spectacle";
import { MDXProvider } from "@mdx-js/tag";
import components from "./components";
import theme from "./theme";

// import createTheme from "spectacle-theme-sober";
// const theme = createTheme();

// DEFAULT LAYOUT

export const DefaultSlide = ({ children, ...rest }) => (
  <Slide bgColor="#282A39" {...rest}>
    <MDXProvider components={darkComponents}>{children}</MDXProvider>
  </Slide>
);

// DARK LAYOUT

const darkComponents = {
  ...components,
  h2: ({ children }) => (
    <Heading size={2} textColor={theme.screen.colors.primary}>
      {children}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading size={3} textColor={theme.screen.colors.quaternary}>
      {children}
    </Heading>
  ),
  h4: ({ children }) => (
    <Heading size={4} textColor={theme.screen.colors.quaternary}>
      {children}
    </Heading>
  ),
  h5: ({ children }) => (
    <Heading size={5} textColor={theme.screen.colors.quaternary}>
      {children}
    </Heading>
  ),
  h6: ({ children }) => (
    <Heading size={6} textColor={theme.screen.colors.quaternary}>
      {children}
    </Heading>
  ),
  p: ({ children }) => <Text textColor="white">{children}</Text>
};

const lightComponents = {
  h1: ({ children }) => (
    <Heading size={1} textColor={theme.screen.colors.primary}>
      {children}
    </Heading>
  ),
  h2: ({ children }) => (
    <Heading size={2} textColor={theme.screen.colors.quaternary}>
      {children}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading size={3} textColor={theme.screen.colors.quaternary}>
      {children}
    </Heading>
  ),
  h4: ({ children }) => (
    <Heading size={4} textColor={theme.screen.colors.quaternary}>
      {children}
    </Heading>
  ),
  h5: ({ children }) => (
    <Heading size={5} textColor={theme.screen.colors.quaternary}>
      {children}
    </Heading>
  ),
  h6: ({ children }) => (
    <Heading size={6} textColor={theme.screen.colors.quaternary}>
      {children}
    </Heading>
  ),
  p: ({ children }) => <Text textColor="white">{children}</Text>
};

export const DarkSlide = ({ children, ...rest }) => (
  <Slide bgColor="#282A39" {...rest}>
    <MDXProvider components={darkComponents}>{children}</MDXProvider>
  </Slide>
);

export const LightSlide = ({ children, ...rest }) => (
  <Slide bgColor="#70627E" {...rest}>
    <MDXProvider components={lightComponents}>{children}</MDXProvider>
  </Slide>
);

// CODE LAYOUT

export const CodeSlide = ({ children, ...rest }) => (
  <Slide bgColor="#1d1f21" {...rest}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Slide>
);

export const ProfileSlide = ({ children, ...rest }) => (
  <Slide bgImage="family.jpg" {...rest}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Slide>
);

export const TreeSlide = ({ children, ...rest }) => (
  <Slide bgImage="tree.png" {...rest}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Slide>
);
