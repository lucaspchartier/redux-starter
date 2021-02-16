import * as actions from "./actionTypes";

export const bugAdded = description => ({
    type: actions.BUG_ADDED,
    payload: {
        description: "Bug1"
    }
});

export const bugResolved = () => ({
    type: actions.BUG_RESOLVED,
});

export const bugRemoved = description => ({
    type: actions.BUG_REMOVED,
    id: 1
});