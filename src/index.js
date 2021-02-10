import store from "./source";

const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState());
});

store.dispatch({
    type: "bugAdded",
    payload: {
        description: "Bug1"
    }
});

unsubscribe();

store.dispatch({
    type: "bugRemoved",
    id: 1
});

console.log(store.getState());