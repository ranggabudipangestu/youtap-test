import { Bracket } from "../check-bracket"

const newBracket = new Bracket()

describe("Testing Bracket Combination", ()=>{
  test('testing "()" Combination', () => expect(newBracket.check("()")).toEqual(true))
  test('testing ")(" Combination', () => expect(newBracket.check(")(")).toEqual(false))
  test('testing "()()" Combination', () => expect(newBracket.check("()()")).toEqual(true))
  test('testing "" Combination', () => expect(newBracket.check("")).toEqual(true))
  test('testing "((()))" Combination', () => expect(newBracket.check("((()))")).toEqual(true))
  test('testing "((()" Combination', () => expect(newBracket.check("((()")).toEqual(false))
})