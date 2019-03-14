export function map<A, B>(x: A | null, f: (_: A) => B): B | null {
  if (x === null) {
    return null
  }
  return f(x)
}

export function fold<A, B>(x: A | null, ifPresent: (_: A) => B, ifNotPresent: () => B): B {
  return map(x, ifPresent) || ifNotPresent()
}
