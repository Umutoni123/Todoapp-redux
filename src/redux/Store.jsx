import { configureStore } from "@reduxjs/toolkit";
import Todoreducer from "./Todoreducer";
export default configureStore({
    reducer: {
        todos: Todoreducer
    }
})