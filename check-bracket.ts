export class Bracket {
  check(s: String): Boolean {
    const stack: Array<String> = []
    for (let i: number = 0; i < s.length; i++) {
      const x = s[i]
      if (x === '(') {
        stack.push(x)
        continue
      }
      if (stack.length === 0) return false
      if (x === ')') stack.pop()
    }
    return (stack.length === 0)
  }
}