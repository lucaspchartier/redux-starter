import store from "./source";

store.dispatch({
    type: "bugAdded",
    payload: {
        description: "Bug1"
    }
});

store.dispatch({
    type: "bugRemoved",
    id: 1
});

console.log(store.getState());