import store from "./source";
import * as actions from "./actionTypes";

// 1. state = reducer(state, action);
// 2. notify subscribers

const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState());
});

store.dispatch({
    type: actions.BUG_ADDED,
    payload: {
        description: "Bug1"
    }
});

unsubscribe();

store.dispatch({
    type: actions.BUG_REMOVED,
    id: 1
});

console.log(store.getState());