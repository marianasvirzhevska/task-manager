const middleware = (store) => (next) => (action) =>{

  if( action.type !== 'PROMISE'){
    return next(action);
  } else {
    const [startAction, successAction, failureAction] = action.actions;
    store.dispatch({
      type: startAction
    });
    return action.promise.then( (data) => store.dispatch({
      type: successAction,
      payload: data
    }) ), (error) => store.dispatch({
      type: failureAction,
      error: error
    });
  }
};

export default middleware;
