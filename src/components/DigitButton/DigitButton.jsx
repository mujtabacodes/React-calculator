import {ADD_DIGIT} from '../.././redux/reducers/calculations';

export default function DigitButton({myStyle,dispatch,digit})
{
    return <button className={myStyle} 
    onClick={()=>{
        // console.log("Idr to button aah raha"+digit)
        dispatch(ADD_DIGIT({digit}))}}>{digit}
    </button>
}

