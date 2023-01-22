import {ACTIONS} from '../Calculator/Calculator'
export default function DigitButton({myStyle,dispatch,digit})
{
    return <button className={myStyle} onClick={()=>dispatch({type:ACTIONS.ADD_DIGIT,payload:{digit} })}>{digit}</button>
}