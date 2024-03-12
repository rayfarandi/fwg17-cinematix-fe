import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import auth from "./auth";
import profile from "./profile";
import order from "./order";
// import transfer from "./transfer";
// import verifyPin from "./verifyPin";

const authConfig = {
    key: 'auth',
    storage
}

const reducer = combineReducers({
    auth: persistReducer(authConfig, auth),
    profile,
    order,
    // transfer,
    // verifyPin
})

export default reducer