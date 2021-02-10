let lastId = 0;

export default function reducer(state = [], action) {
    switch (action.type) {
        case "bugAdded":
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];
        case "bugRemoved":
            state.filter(bug => bug.id !== action.payload.id);
        default:
            return state;
    }
};