//This is a middleware!!!

export default function({ dispatch }) {
    //See design pic

    // when next will run, it will return a function
    // when action will run, it will return the anonymous function

    //equels to
    // return function(next) {
    //     return function(action) {
    //         console.log(action);
    //         next(action);
    //     }
    // }
    return next => action => {
        // Checking if action has payload or it is a promise!
        if (!action.payload || !action.payload.then) {
            // Paying this forward
            return next(action);
        }

        action.payload
            .then(function(response) {
                //Create a new action with the old type,
                //BUT replace the promise with the response data
                const newAction = {...action, payload:response}
                //Send it through the whole process of rendering again
                //Meaning, going through the whole middlewares again
                dispatch(newAction);
            });
    }
}