const CHANGE_MAX_VALUE = 'CHANGE_MAX_VALUE'
const CHANGE_START_VALUE = 'CHANGE_START_VALUE'
const CHANGE_DISPLAY_VALUE = 'CHANGE_DISPLAY_VALUE'


const initialState = {
    maxValue: 0,
    startValue: 0,
    displayValue: "enter values and press 'set'" as number | string
}
export const mainReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case CHANGE_MAX_VALUE: {
            return {
                ...state,
                maxValue: action.maxValue
            }

        }
        case CHANGE_START_VALUE: {
            return {
                ...state,
                startValue: action.startValue
            }
        }
        case CHANGE_DISPLAY_VALUE: {
            return {
                ...state,
                displayValue: action.displayValue
            }
        }
        default:
            return state
    }
}
// ActionCreators
export const setStartValue = (startValue: number) => ({type: 'CHANGE_START_VALUE', startValue} as const)
export const setMaxValue = (maxValue: number) => ({type: 'CHANGE_MAX_VALUE', maxValue} as const)
export const setDisplayValue = (displayValue: number | string) => ({
    type: 'CHANGE_DISPLAY_VALUE',
    displayValue
} as const)


//types
export type initialStateType = typeof initialState
type setStartValueType = ReturnType<typeof setStartValue>
type setMaxValueType = ReturnType<typeof setMaxValue>
type setDisplayValueType = ReturnType<typeof setDisplayValue>
type ActionsTypes = setStartValueType | setMaxValueType | setDisplayValueType

