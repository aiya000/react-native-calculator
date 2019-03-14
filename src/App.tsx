import * as React from 'react'
import * as data from './data'
import * as nullable from './data/null'
import { KeyPad } from './KeyPad'
import { Operation, NumericOperation, Digit, Input } from './data'
import { StyleSheet, Text, View } from 'react-native'

/**
 * Represents calculator's the one of expression.
 *
 * ```typescript
 * // 1 / 3
 * {applyee: 1, apply: Operation.Div, applyer: 3}
 * ```
 */
export interface State {
  /**
   * A displayed calculated result.
   */
  applyee: number

  applyer: number
  apply: NumericOperation | null
}

/**
 * A shorthand to `State`.
 */
function state(
  applyee: number,
  applyer: number,
  apply: NumericOperation | null,
) {
  return {applyee, applyer, apply}
}

const initialState: State = {
  applyee: 0,
  applyer: 0,
  apply: null,
}

function resolveInput(self: State, x: Input): State {
  if (data.isOperation(x)) {
    return resolveOperation(self, x)
  } else if (data.isDigit(x)) {
    return resolveDigit(self, x)
  } else {
    throw Error(`Unknown input: ${x}`)
  }
}

function resolveOperation(self: State, x: Operation): State {
  switch (x) {
    case Operation.Clear:
      return initialState
    case Operation.Resolve:
      return nullable.fold(self.apply,
        (apply) => {
          const result = data.toFunction(apply)(self.applyee, self.applyer)
          return state(result, 0, null)
        },
        () => state(self.applyer, 0, null),
      )
    default:
      if (self.apply !== null) {
        const result = data.toFunction(self.apply)(self.applyee, self.applyer)
        return state(result, 0, x)
      } else {
        return state(self.applyee, self.applyer, x)
      }
  }
}

function resolveDigit(self: State, x: Digit): State {
  const applyer = Number(String(self.applyer) + data.show(x))
  return state(self.applyee, self.applyer, self.apply)
}

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  applyeeText: {
    fontSize: 40,
    backgroundColor: 'silver',
    borderColor: 'black',
  },
})

export default class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = initialState
  }

  public render() {
    return (
      <View style={styles.container}>
        <View style={styles.text}>
          <Text style={styles.applyeeText}>{this.state.applyee}</Text>
          <Text style={styles.applyText}>
            { nullable.map(this.state.apply, data.show) }
          </Text>
          <Text style={styles.applyerText}>{this.state.applyer}</Text>
        </View>
        <KeyPad onPressKey={(x) => this.resolve(x)}/>
      </View>
    )
  }

  private resolve(x: Input) {
    this.setState(
      resolveInput(this.state, x)
    )
  }
}
