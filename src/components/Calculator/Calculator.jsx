import React, { useReducer } from 'react'
import DigitButton from '../DigitButton/DigitButton'
import OperationButton from '../operationButton/OperationButton'
import './calculator.css'
export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  ADD_OPERATION: 'choose-opertaion',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'

}
function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.digit === "0" && state.currentOperand === "0") {
        alert("Aylo");
      }
      if(payload.digit === "." && (state.currentOperand).include('.')) {
       alert("aylo");
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""} ${payload.digit}`
      }
    case ACTIONS.ADD_OPERATION:
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""} ${payload.operation}`
      }

    case ACTIONS.CLEAR:
      return {}

    default:
      return { ...state };
  }


}
function Calculator() {
  const [{ previousOperand, currentOperand, operation }, dispatch] = useReducer(reducer, {})
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
              <button className='basis-1/2 design_btn grey_btn' type='button' onClick={() => dispatch({ type: ACTIONS.CLEAR })}>AC</button>
              <button className='basis-1/4 design_btn grey_btn' type='button'>DEL</button>

              <OperationButton myStyle='basis-1/4 design_btn orange_btn' operation='÷' dispatch={dispatch} />
              {/* <button className='basis-1/4 design_btn orange_btn' type='button'></button>*/}
            </div>
            <div className="flex flex-row">
              <DigitButton myStyle='basis-3/12 design_btn' digit='7' dispatch={dispatch} />
              <DigitButton myStyle='basis-3/12 design_btn' digit='8' dispatch={dispatch} />
              <DigitButton myStyle='basis-3/12 design_btn' digit='9' dispatch={dispatch} />
              <OperationButton myStyle='basis-3/12 design_btn orange_btn' operation='x' dispatch={dispatch} />

            </div>
            <div className="flex flex-row">
              <DigitButton myStyle='basis-3/12 design_btn' digit='4' dispatch={dispatch} />
              <DigitButton myStyle='basis-3/12 design_btn' digit='5' dispatch={dispatch} />
              <DigitButton myStyle='basis-3/12 design_btn' digit='6' dispatch={dispatch} />
              <OperationButton myStyle='basis-3/12 design_btn orange_btn' operation='-' dispatch={dispatch} />

            </div>
            <div className="flex flex-row">
              <DigitButton myStyle='basis-3/12 design_btn' digit='1' dispatch={dispatch} />
              <DigitButton myStyle='basis-3/12 design_btn' digit='2' dispatch={dispatch} />
              <DigitButton myStyle='basis-3/12 design_btn' digit='3' dispatch={dispatch} />
              <OperationButton myStyle='basis-3/12 design_btn orange_btn' operation='+' dispatch={dispatch} />

            </div>
            <div className="flex flex-row">
              <DigitButton myStyle='basis-1/2 design_btn' digit='0' dispatch={dispatch} />
              <DigitButton myStyle='basis-1/4 design_btn' digit='.' dispatch={dispatch} />

              <button className="basis-1/4 design_btn orange_btn" type='button'>=</button>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Calculator