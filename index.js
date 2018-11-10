import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Redbox from 'redbox-react'
import { Deck, Slide } from 'spectacle'
// import components from './presentation/components'
import slides, { transitions } from './presentation/index.mdx'
import theme from './presentation/theme'

require('normalize.css')

const CustomErrorReporter = ({ error }) => <Redbox error={error} />

CustomErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired
}

ReactDOM.render(
  <AppContainer errorReporter={CustomErrorReporter}>
    <Deck
      theme={theme}
      controls={false}
      progress="bar"
    >
      {slides.map((S, i) => {
        return <S key={`slide-${i}`} />
      })}
    </Deck>
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept(() => {
    const newTheme = require('./presentation/theme').default
    const newSlides = require('./presentation/index.mdx').default
    ReactDOM.render(
      <AppContainer errorReporter={CustomErrorReporter}>
        <Deck
          theme={newTheme}
          controls={false}
          progress="bar"
        >
          {newSlides.map((S, i) => {
            return <S key={`slide-${i}`} />
          })}
        </Deck>
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
