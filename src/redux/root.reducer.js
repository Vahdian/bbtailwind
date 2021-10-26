import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userDataReducer from "./userData/userData.reducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: [
        "shoppingList"
    ]
}

const rootReducer = combineReducers({
    userData: userDataReducer
})

export default persistReducer(persistConfig, rootReducer)