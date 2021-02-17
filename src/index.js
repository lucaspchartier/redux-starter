import store from "./source";
import * as bugActions from "./actions";

// 1. state = reducer(state, action);
// 2. notify subscribers

const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState());
});

store.dispatch(bugActions.bugAdded("Bug 1"));

unsubscribe();

store.dispatch(bugActions.bugResolved(1));

console.log(store.getState());

store.dispatch(bugActions.bugRemoved(1));