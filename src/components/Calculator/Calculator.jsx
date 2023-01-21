import React, {useReducer} from 'react'
import DigitButton from '../DigitButton/DigitButton'
import './calculator.css'
export const ACTIONS={
  ADD_DIGIT:'add-digit',
  ADD_OPERATION:'choose-opertaion',
  CHOOSE_OPERATION:'choose-operation',
  CLEAR:'clear',
  DELETE_DIGIT:'delete-digit',
  EVALUATE:'evaluate'

}
function reducer(state,{type,payload}){

}
function Calculator() {
const [{previousOperand,currentOperand,operation}, dispatch] = useReducer(reducer,{})
  return (
    <>   
      <div className=" container">
        <div className="cal-main">
          <div className="display_screen">
            <div className="previous_value">{previousOperand} {operation}</div>
            <div className="current_value text-4xl">{currentOperand}</div>
          </div>
          <div className="cal-buttons bg-black  pb-10 rounded-xl rounded-t-none pl-5 pr-5">
            <div className="flex flex-row pt-10">
              <button className='basis-1/2 design_btn grey_btn' type='button'>AC</button>
              <button className='basis-1/4 design_btn grey_btn' type='button'>DEL</button>
              <button className='basis-1/4 design_btn orange_btn' type='button'>÷</button>
            </div>
            <div className="flex flex-row">
            <DigitButton style='basis-3/12 design_btn' digit='7' dispatch={dispatch}/>
              {/* <button className='' type='button'>7</button>*/}
              <button className='basis-3/12 design_btn' type='button'>8</button>
              <button className='basis-3/12 design_btn' type='button'>9</button>
              <button className='basis-3/12 design_btn orange_btn' type='button'>x</button>
            </div>
            <div className="flex flex-row">
              <button className='basis-3/12 design_btn' type='button'>4</button>
              <button className='basis-3/12 design_btn' type='button'>5</button>
              <button className='basis-3/12 design_btn' type='button'>6</button>
              <button className='basis-3/12 design_btn orange_btn' type='button'>-</button>
            </div>
            <div className="flex flex-row">
              <button className='basis-3/12 design_btn' type='button'>1</button>
              <button className='basis-3/12 design_btn' type='button'>2</button>
              <button className='basis-3/12 design_btn' type='button'>3</button>
              <button className='basis-3/12 design_btn orange_btn' type='button'>+</button>
            </div>
            <div className="flex flex-row">
              <button class="basis-1/2 design_btn" type='button'>0</button>
              <button class="basis-1/4 design_btn" type='button'>.</button>
              <button class="basis-1/4 design_btn orange_btn" type='button'>=</button>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Calculator