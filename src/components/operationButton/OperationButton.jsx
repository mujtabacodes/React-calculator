import {ACTIONS} from '../Calculator/Calculator'
export default function OperationButton({myStyle,dispatch,operation})
{
    return <button className={myStyle} onClick={()=>dispatch({type:ACTIONS.ADD_OPERATION,payload:{operation} })}>{operation}</button>
}