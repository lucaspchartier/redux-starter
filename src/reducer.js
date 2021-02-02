let lastId = 0;

const reducer = (state = [], action) => {
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
    }
};