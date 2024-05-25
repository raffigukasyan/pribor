import {createStore} from "redux";

const store = createStore(function (state, action) {
    if(action.type === "get-catalog") {
        return {
            ...state,
            category: [...state.category, action.payload.category]
        }
    }
}, {
    category: [
        {
            id: 1,
            name: 'TTT'
        },
        {
            id: 2,
            name: 'QQQ'
        }
    ]
})