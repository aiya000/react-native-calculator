import * as Data from './data'
import * as React from 'react'
import { Operation, Digit, Input } from './data'
import { StyleSheet, View, Button } from 'react-native'

interface Props {
  onPressKey(pressed: Input): void
}

const styles: any = StyleSheet.create({
  row: {
    flexDirection: 'row',
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
        <Button title={Data.show(keys[0])} onPress={() => this.props.onPressKey(keys[0])} />
        <Button title={Data.show(keys[1])} onPress={() => this.props.onPressKey(keys[1])} />
        <Button title={Data.show(keys[2])} onPress={() => this.props.onPressKey(keys[2])} />
        <Button title={Data.show(keys[3])} onPress={() => this.props.onPressKey(keys[3])} />
      </View>
    )
  }
}
