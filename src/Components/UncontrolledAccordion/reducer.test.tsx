import {reducer, StateType, ToggleCollapsed} from "./reducer";


test('reducer should change value to opposite value ', () => {
//data
    const state:StateType = {
        collapsed:false
    }
    //action
   const newState = reducer(state,{type:ToggleCollapsed})

 expect(newState.collapsed).toBe(true)
})
