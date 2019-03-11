import * as React from 'react'
import { KeyPad } from './KeyPad'
import { Operation, Digit, Input } from './data'
import { StyleSheet, Text, View } from 'react-native'

interface State {
  /**
   * A displayed calculated result.
   */
  result: number

  /**
   * User input state.
   *
   * e.g.
   * When a user inputs 4, 2, and +,
   * this has `[42, +]`.
   *
   * Or when a user inputs 4, 2, +, 10, =,
   * this has `[null, null]`.
   */
  stack: [number | null, Operation | null]
}

const initialState: State = {
  result: 0,
  stack: [null, null],
}

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  resultText: {
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
        <Text style={styles.resultText}>{this.state.result}</Text>
        <KeyPad onPressKey={this.resolve}/>
      </View>
    )
  }

  private resolve(x: Input) {
    this.state.stack.push(x)
  }
}
