import * as Input_ from './data'
import * as React from 'react'
import { Operation, Digit, Input } from './data'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'

interface Props {
  onPressKey(pressed: Input): void
}

const styles: any = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  padText: {
    fontSize: 40,
    padding: 25,
  },
})

export class KeyPad extends React.Component<Props, {}> {
  public render() {
    return (
      <View>
        {this.makeRow([1, 2, 3, Operation.Add])}
        {this.makeRow([4, 5, 6, Operation.Sub])}
        {this.makeRow([7, 8, 9, Operation.Multi])}
        {this.makeRow([Operation.Clear, 0, Operation.Resolve, Operation.Div])}
      </View>
    )
  }

  private makeRow(keys: [Input, Input, Input, Input]): React.ReactNode {
    return (
      <View style={styles.row}>
        <TouchableHighlight onPress={() => this.props.onPressKey(keys[0])}>
          <Text style={styles.padText}>{Input_.show(keys[0])}</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.onPressKey(keys[1])}>
          <Text style={styles.padText}>{Input_.show(keys[1])}</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.onPressKey(keys[2])}>
          <Text style={styles.padText}>{Input_.show(keys[2])}</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.onPressKey(keys[3])}>
          <Text style={styles.padText}>{Input_.show(keys[3])}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
