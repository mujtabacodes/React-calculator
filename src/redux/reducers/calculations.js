import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentOperand: null,
    previousOperand: null,
    operation: null,
};

export const calculations = createSlice({
    name: "calculations",
    initialState,
    reducers: {
        ADD_DIGIT: (state, action) => {
            if (state.overwrite) {
                return {
                    ...state,
                    overwrite: false,
                    currentOperand: action.payload.digit,
                };
            }
            if (action.payload.digit === "0" && state.currentOperand === "0") {
                return state;
            }
            if (action.payload.digit === "." && state.currentOperand == null) {
                return state;
            }
            if (action.payload.digit === "." && state.currentOperand.includes(".")) {
                return state;
            }

            return {
                ...state,
                currentOperand: `${state.currentOperand || ""}${action.payload.digit}`,
            };
        },
        CHOOSE_OPERATION: (state, action) => {
            if (state.currentOperand == null && state.previousOperand == null) {
                return state;
            }
            if(state.currentOperand == null){
                return state;
            }
            if (state.previousOperand == null) {
                return {
                    ...state,
                    previousOperand: state.currentOperand,
                    operation: action.payload.operation,
                    currentOperand: null,
                
                };
            }
            
            return {
               
                ...state,
                previousOperand: evaluate(state),
                operation: action.payload.operation,
                currentOperand: null,
            };
          
        },
        CLEAR: (state) => {
            return {};
        },
        EVALUATE: (state) => {
            if (
                state.previousOperand == null ||
                state.currentOperand == null ||
                state.operation == null
            ) {
                return state;
            }

            return {
                ...state,
                overwrite: true,
                operation: null,
                currentOperand: evaluate(state),
                previousOperand: null,
            };
        },
        DELETE_DIGIT: (state) => {
            if (state.overwrite) {
                return {
                    ...state,
                    overwrite: false,
                    currentOperand: "",
                };
            }
            if (state.currentOperand == null) return state;
            if (state.currentOperand.length === 1) {
                return {
                    ...state,
                    currentOperand: "",
                };
            }
            return {
                ...state,
                currentOperand: state.currentOperand.slice(0, -1),
            };
        },
    },
});

function evaluate({ previousOperand, currentOperand, operation }) {
    let prev = parseFloat(previousOperand);
    
    let curr = parseFloat(currentOperand);
   if(isNaN(curr)||isNaN(prev)){ 
   return "";

   };
    // if(curr===isNaN) return "";
    let result = "";
    switch (operation) {
        case "+":
            result = prev + curr;
            break;
        case "-":
            result = prev - curr;
            break;
        case "÷":
            result = prev / curr;
            break;
        case "x":
            result = prev * curr;
            break;

        default:
            break;
    }
    return result.toString();
}



// Action creators are generated for each case reducer function
export const { ADD_DIGIT, CHOOSE_OPERATION, CLEAR, EVALUATE, DELETE_DIGIT } =
    calculations.actions;

export default calculations.reducer;
