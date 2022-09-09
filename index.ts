import { Bracket } from "./check-bracket"

const main = () =>{
  const newBracket = new Bracket()
  console.log(newBracket.check("()"))
}

main()