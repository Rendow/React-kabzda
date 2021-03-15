type ActionType = {
    type: string
}
export const ToggleCollapsed = 'TOGGLE-COLLAPSED'

export type StateType = {
    collapsed: boolean
}
export const reducer = (state: StateType, action: ActionType):StateType => {
    switch (action.type){
        case ToggleCollapsed:
            const stateCopy = {
                ...state,
                collapsed: !state.collapsed
            }
            return stateCopy
        default:
            return state
}}