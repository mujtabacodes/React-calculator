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
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: payload.digit
        }
      }
      if ((payload.digit) === "0" && (state.currentOperand) === "0") {
        return state;
      }
      if (payload.digit === "." && (state.currentOperand) == null) {
        return state;
      }
      if (payload.digit === "." && (state.currentOperand).includes(".")) {
        return state;
      }


      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`
      }

    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {

        return state;
      }
      if (state.previousOperand == null) {
        return {
          ...state,
          previousOperand: state.currentOperand,
          operation: payload.operation,
          currentOperand: null
        }
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null

      }

    case ACTIONS.CLEAR:
      // console.log("clearing");
      return {}
    case ACTIONS.EVALUATE:
      if (state.previousOperand == null || state.currentOperand == null || state.operation == null) {
        return state;
      }

      return {
        ...state,
        overwrite: true,
        operation: null,
        currentOperand: evaluate(state),
        previousOperand: null

      }
    case ACTIONS.DELETE_DIGIT:
      if(state.overwrite){
        return{
          ...state,
          overwrite:false,
          currentOperand:""
        }
      }
     if(state.currentOperand == null) return state;
     if(state.currentOperand.length===1) {
      return{
        ...state,
        currentOperand:""
      }
     }
     return{
      ...state,
      currentOperand:state.currentOperand.slice(0,-1)
     }
    default:
      return { ...state };
  }
  function evaluate({ previousOperand, currentOperand, operation }) {
    let prev = parseFloat(previousOperand);
    let curr = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(curr)) return ""
    let result = "";
    switch (operation) {
      case '+':
        result = prev + curr;
        break;
      case '-':
        result = prev - curr;
        break;
      case '÷':
        result = prev / curr;
        break;
      case 'x':
        result = prev * curr;

        break;

      default:
        break
    }
    return result.toString();
  }


}

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us",{
  maximumFractionDigits:0,
})
function formateOperand(operand){
  if(operand==null) return;
  const [integer,decimal]=operand.split('.');
  if(decimal==null) return INTEGER_FORMATTER.format(integer);
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
}

function Calculator() {
  const [{ previousOperand, currentOperand, operation }, dispatch] = useReducer(reducer, {})
  return (
    <>
      <div className=" container">
        <div className="cal-main">
          <div className="display_screen">
            <div className="previous_value">{formateOperand(previousOperand)} {operation}</div>
            <div className="current_value text-4xl">{formateOperand(currentOperand)}</div>
          </div>
          <div className="cal-buttons bg-black  pb-10 rounded-xl rounded-t-none pl-5 pr-5">
            <div className="flex flex-row pt-10">
              <button className='basis-1/2 design_btn grey_btn' type='button' onClick={() => dispatch({ type: ACTIONS.CLEAR })}>AC</button>
              <button className='basis-1/4 design_btn grey_btn' type='button'
                onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
              >DEL</button>

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

              <button className="basis-1/4 design_btn orange_btn" type='button'
                onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
              >=</button>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Calculator