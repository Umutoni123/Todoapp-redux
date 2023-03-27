import { createSlice } from "@reduxjs/toolkit";
const todoSlice= createSlice({
    name: "todo",
    initialState: [
        {
            id: 1,
            title:"todo1",
            completed:"False"
        },
        {
            id: 2,
            title:"todo1",
            completed:"False"
        },
        {
            id: 3,
            title:"todo1",
            completed:"False"
        }
    ],
    reducer:
        {
            addTodo: (state,action)=>{
                const newTodo={
                    id: Date.now(),
                    title: action.payload.title,
                    completed: false
                };
                state.push(newTodo)
            }
        }
    
})
export const {addTodo} = todoSlice.action;
export default todoSlice.reducer;