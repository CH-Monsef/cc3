import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "./CardSlice";
import UserSlice from "./UserSlice";


export const store = configureStore({
    reducer: {
        user: UserSlice.reducer,
        todo: CardSlice.reducer
    }
})

export default store;