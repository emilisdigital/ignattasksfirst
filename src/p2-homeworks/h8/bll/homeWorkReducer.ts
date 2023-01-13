import {UserType} from "../HW8";

type sortUpACType = ReturnType<typeof sortUpAC>
type sortDownACType = ReturnType<typeof sortDownAC>
type checkACType = ReturnType<typeof checkAC>
type ageMinToMaxACType = ReturnType<typeof ageMinToMaxAC>

type ActionType = sortUpACType | sortDownACType | checkACType
| ageMinToMaxACType

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case "SORT-UP": {
            return [...state.sort( (a, b) => {
                return a.name.localeCompare(b.name)
            } )]
        }
        case "SORT-DOWN": {
            return [...state.sort( (a, b) => {
                return b.name.localeCompare(a.name)
            } )]
        }
        case "CHECK": {
            return state.filter(people => people.age > 18)
        }
        case "AGE-MIN-TO-MAX": {
            return [...state.sort((a, b) => {
                return a.age > b.age ? 1 : -1
            })]
        }
        default: return state
    }
}

export const sortUpAC = () => ({type: 'SORT-UP'} as const)
export const sortDownAC = () => ({type: 'SORT-DOWN'} as const)
export const checkAC = () => ({type: 'CHECK'} as const)

export const ageMinToMaxAC = () => ({type: 'AGE-MIN-TO-MAX'} as const)