import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp

// // Actions
// const HELLO = 'HELLO'

// // Reducers
// export default function initialState(state={}, action={}) {
//   switch(action.type) {
//     default: return state;
//   }
// }

// // Action Creator
// export function hello() {
//   return { type: HELLO }
// }