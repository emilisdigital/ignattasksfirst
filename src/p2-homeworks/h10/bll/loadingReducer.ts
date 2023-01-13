
type loadingACType = ReturnType<typeof loadingAC>

type ActionType = loadingACType
type InitStateType = typeof initState

const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case 'IS-LOADING': {
            return {...state, isLoading: !action.isDone}
        }
        default: return state
    }
}

export const loadingAC = (isDone: boolean) => ({ type: 'IS-LOADING', isDone } as const) // fix any