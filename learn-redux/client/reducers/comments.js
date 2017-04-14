function postComments(state=[], action) {
  switch (action.type ) {
    case 'ADD_COMMENT':
      return [
        ...state,
        {
          text: action.comment,
          user: action.author,
        },
      ];
    case 'REMOVE_COMMENT': {
      const index = action.i;
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1, state.length)
      ];
    }
    default:
      return state;
  }
}


function comments(state = [], action) {
    if(typeof(action.postId !== 'undefined')) {
      return {
        ...state,
        [action.postId]: postComments(state[action.postId], action),
      }
    }
    return state;
}

export default comments;