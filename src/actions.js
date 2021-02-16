import * as actions from "./actionTypes";

export const bugAdded = description => ({
    type: actions.BUG_ADDED,
    payload: {
        description: "Bug1"
    }
});

export const bugResolved = id => ({
    type: actions.BUG_RESOLVED,
    payload: {
        id: id,
        resolved: true
    }
});

export const bugRemoved = description => ({
    type: actions.BUG_REMOVED,
    id: 1
});