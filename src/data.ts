export enum Operation {
  Clear = 'Clear',
  Resolve = 'Resolve',
  Add = 'Add',
  Sub = 'Subb',
  Multi = 'Multi',
  Div = 'Div',
}

function toString(x: Operation): string {
  switch (x) {
    case Operation.Clear:
      return 'C'
    case Operation.Resolve:
      return '='
    case Operation.Add:
      return '+'
    case Operation.Sub:
      return '-'
    case Operation.Multi:
      return '*'
    case Operation.Div:
      return '/'
  }
}

export type NumericOperation
  = Operation.Add
  | Operation.Sub
  | Operation.Multi
  | Operation.Div

/**
 * To appliable form.
 */
export function toFunction(f: NumericOperation): (x: number, y: number) => number {
  switch (f) {
    case Operation.Add:
      return (x, y) => x + y
    case Operation.Sub:
      return (x, y) => x - y
    case Operation.Multi:
      return (x, y) => x * y
    case Operation.Div:
      return (x, y) => x / y
  }
}

export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

/**
 * User inputs
 */
export type Input = Operation | Digit

export function isOperation(x: Input): x is Operation {
  return typeof(x) === 'number'
}

export function isDigit(x: Input): x is Digit {
  return !isOperation(x)
}

export function show(x: Input): string {
  if (typeof(x) === 'number') {
    return x + ''
  } else if (typeof(x) === 'string') {
    return toString(x)
  }
  throw Error('TypeScript must expose the when expression instead of switch!')
}
