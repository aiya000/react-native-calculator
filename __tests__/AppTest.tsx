import 'jest'
import * as keyPad from './KeyPad'

it('calculates 1 + 1 to 2', () => {
  const app = keyPad.pushed(['1', '+', '1', '='])
  expect(app.instance.state.result).toBe(2)
})

it('calculates + 1 to 1', () => {
  const app = keyPad.pushed(['+', '1', '='])
  expect(app.instance.state.result).toBe(1)
})

it('calculates 1 + 1 + 1 to 3', () => {
  const app = keyPad.pushed(['1', '+', '1', '+', '1', '='])
  expect(app.instance.state.result).toBe(2)
})

it('calculates + 42 to 42', () => {
  const app = keyPad.pushed(['+', '4', '2', '='])
  expect(app.instance.state.result).toBe(42)
})

it('determines the result 2 with 1 + 1 + without =', () => {
  const app = keyPad.pushed(['1', '+', '1', '+'])
  expect(app.instance.state.result).toBe(2)
})

it('passes an unnecessary input + of +-1=', () => {
  const app = keyPad.pushed(['+', '-', '1', '='])
  expect(app.instance.state.result).toBe(-1)
})

it('clears the result with C', () => {
  const app = keyPad.pushed(['1', 'C'])
  expect(app.instance.state.result).toBe(0)
})

it('throws no exception with divide by zero', () => {
  const app = keyPad.pushed(['1', '/', '0'])
  expect(app.instance.state.result).toBe(NaN)
})
