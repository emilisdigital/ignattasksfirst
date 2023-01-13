const initState = {
    color: 'some'
};

type InitStateType = typeof initState
type ActionType = changeThemeACType

export const themeReducer = (state = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case "CHANGE-TEMA": {
            return {color: action.color}
        }
        default: return state;
    }
};

export const changeThemaAC = (color: string) => ({ type: 'CHANGE-TEMA', color } as const); // fix any
type changeThemeACType = ReturnType<typeof changeThemaAC>