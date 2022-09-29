import {  createSlice } from "@reduxjs/toolkit";

export const StateUse = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
  
});

const productStore = createSlice({
  name: "product",
  initialState: {
    data: [],
    filter:'',
    status: "StateUse.IDLE",
  },
  reducers: {
    setProducts(state, action) {
      state.data =action.payload ;
      
    },
    setStatus(state, action) {
         state.status = action.payload;
      },
      setFilter(state,action){
        state.filter=action.payload
      }
    
  },
 
});
export const { setProducts, setStatus,setFilter } = productStore.actions;
export default productStore.reducer;

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1kc2hha2lyaHVzc2FpbjI5OEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vbXNoYWtpcjA4MiIsImlhdCI6MTY2NDAxODIyMiwiZXhwIjoxNjY0NDUwMjIyfQ.uT1CvQerUU6z7RHB0UJ98VwqbEl1lC2iv_bf887pw7A";

export function fetchProducts(payload) {

  return async function fetchProductThunk(dispatch, getState) {
    dispatch(setStatus(StateUse.LOADING));
    try {
      const res = await fetch(
        "https://upayments-studycase-api.herokuapp.com/api/products",
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
        dispatch(setProducts(data.products));
        dispatch(setStatus(StateUse.IDLE));
    } catch (err) {
      console.log(err);
      dispatch(setStatus(StateUse.ERROR));
    }
  };
}
