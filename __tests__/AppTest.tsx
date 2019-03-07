import 'jest'
import * as React from 'react'
import App from '../src/App'

// Note: test renderer must be required after react-native.
import * as Renderer from 'react-test-renderer'

it('calculates 1 + 1 via UI', () => {
  Renderer.create(<App />)
})
