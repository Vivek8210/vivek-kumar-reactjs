import { createSlice } from '@reduxjs/toolkit'

const cartStore = createSlice({
    name: 'cart',
    initialState:[],
    reducers:{
        add(state,action){
            state.push(action.payload);
        },
        remove(state,action){
            return state.filter(el=>el._id!==action.payload);
        }
    }
});
export const {add,remove} =cartStore.actions;
export default cartStore.reducer;