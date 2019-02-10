


/*
    This code is not used, because have been moved and now use "Saga Middleware"

*/

const logMiddleware = ({getState, dispatch}) => (next) => (action) => {
    console.log(`What happened : ${ action.type}`);

    next(action);
}

export default logMiddleware;