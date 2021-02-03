let lastId = 0;

export default reducer = (state = [], action) => {
    switch (action.type) {
        case "bugAdded":
            [
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