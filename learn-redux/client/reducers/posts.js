// a reducer takes two things
// 
// 1. the action (info about what happened)
// 2. copy of the current state

function posts(state = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      return [
        ...state.slice(0, action.index),
        {
          ...state[action.index],
          likes: state[action.index].likes + 1,
        },
        ...state.slice(action.index + 1, state.length),
      ]
    default:
      return state;
  }
}

export default posts;