import React from 'react'
import style from "./calculator.module.scss"
import { calculatorButtonsData } from './calculatorData'
const Calculator = () => {
  const [value, setValue] = React.useState("0")

  type Ref = HTMLInputElement
  const refOutput = React.createRef<Ref>()

  const tapeNumber = (value:string) =>{
    const currentValue = value
    const output:any = refOutput.current
    setValue(currentValue)

    if(output.value === "0"){
      output.value = ""
    }
    output.value += currentValue
  }




  return (
    <div className={style.calculator}>
        <div className={style.container}>
          <div className={style.output}>
            <input ref={refOutput} type="text" defaultValue={value} />
          </div>
            <div className={style.buttons}>
              {
              calculatorButtonsData.val.map((obj) => <button onClick={() => tapeNumber(obj)} className={style.button} key={obj}>{obj}</button>)
              }
            </div>
        </div>
    </div>
  )
}

export default Calculator