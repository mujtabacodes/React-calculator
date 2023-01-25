import {ACTIONS} from '../Calculator/Calculator'
export default function OperationButton({myStyle,dispatch,operation})
{
    return <button className={myStyle} onClick={()=>dispatch({type:ACTIONS.CHOOSE_OPERATION,payload:{operation} })}>{operation}</button>
}