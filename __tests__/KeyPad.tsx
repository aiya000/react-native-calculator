import * as React from 'react' // needed by react-test-renderer
import * as Renderer from 'react-test-renderer'
import App from '../src/App'
import { Input } from '../src/data'
import { KeyPad } from '../src/KeyPad'
import { ReactTestInstance } from 'react-test-renderer'
import { View, TouchableHighlight, Text } from 'react-native'

export interface Pads {
  '1': ReactTestInstance, '2': ReactTestInstance, '3': ReactTestInstance, '+': ReactTestInstance,
  '4': ReactTestInstance, '5': ReactTestInstance, '6': ReactTestInstance, '-': ReactTestInstance,
  '7': ReactTestInstance, '8': ReactTestInstance, '9': ReactTestInstance, '*': ReactTestInstance,
  'C': ReactTestInstance, '0': ReactTestInstance, '=': ReactTestInstance, '/': ReactTestInstance,
}

export type Button = keyof Pads

function makePads(app: ReactTestInstance): Pads {
  const rows = app
    .findByType(KeyPad)
    .findAllByType(View)[0]
    .findAllByType(View)
  const row1 = rows[0].findAllByType(TouchableHighlight)
  const row2 = rows[1].findAllByType(TouchableHighlight)
  const row3 = rows[2].findAllByType(TouchableHighlight)
  const row4 = rows[3].findAllByType(TouchableHighlight)

  return {
    '1': row1[0], '2': row1[1], '3': row1[2], '+': row1[3],
    '4': row2[0], '5': row2[1], '6': row2[2], '-': row2[3],
    '7': row3[0], '8': row3[1], '9': row3[2], '*': row3[3],
    'C': row4[0], '0': row4[1], '=': row4[2], '/': row4[3],
  }
}

function pushButtons(app: ReactTestInstance, button: Button[]): ReactTestInstance {
  const mapping = makePads(app)
  button.map((label) => {
    const x = mapping[label]
    console.log(`${label} defines? ${x !== undefined}`)
    return x.props.onPress()
  })
  return app
}

export function pushed(button: Button[]): ReactTestInstance {
  return pushButtons(
    Renderer.create(<App />).root,
    button
  )
}
