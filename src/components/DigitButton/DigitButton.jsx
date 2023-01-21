import {ACTIONS} from '../Calculator/Calculator'
export default function DigitButton({style,dispatch,digit})
{
    return <button className={style} onClick={()=>dispatch({type:ACTIONS.ADD_DIGIT,payload:{digit} })}>{digit}</button>
}