export const SET_MIN_VALUE = 'SET_MIN_VALUE'
export const SET_MAX_VALUE = 'SET-MAX-VALUE'
export const SET_START_VALUE = 'SET_START_VALUE'
export const SET_DISPLAY_VALUE = 'SET_DISPLAY_VALUE'
// export const SET_LOCALSTORAGE_COUNTS = 'SET-LOCALSTORAGE-COUNTS'


const getValuesFromLocalStorage = (): { minValue: number, maxValue: number } => {
    let minValue = 0
    let maxValue = 0

    try {
        minValue = Number(localStorage.getItem("minValue"))
        maxValue = Number(localStorage.getItem("maxValue"))
    } catch {
        return {minValue, maxValue}
    }
    return {minValue, maxValue}
}

const initialState = {
    minCount: getValuesFromLocalStorage().minValue as number,
    maxCount: getValuesFromLocalStorage().maxValue as number,
    maxValue: 0,
    startValue: 0,
    valueOnDisplay: "enter values and press 'set'" as number | string

}

export const counterReducer = (state: CounterStateType = initialState, action: any): CounterStateType => {
    switch (action.type) {
        case SET_MIN_VALUE:
        case SET_MAX_VALUE:
        case   SET_START_VALUE:

        default:
            return state
    }

}


//types
export type CounterStateType = typeof initialState
// export type ActionsTypes =