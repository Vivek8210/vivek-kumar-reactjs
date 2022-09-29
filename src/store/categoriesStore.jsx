import {createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const setcategoriesStore = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    filterCat:'',
    status: "STATUSES.IDLE",
  },
  reducers: {
    setcategories(state, action) {
      state.categories =action.payload ;
      
    },
    setStatus(state, action) {
         state.status = action.payload;
      },
    setFilterCate(state,action){
        state.filterCat=action.payload
      }
    
  },
 
});
export const { setcategories, setStatus,setFilterCate } = setcategoriesStore.actions;
export default setcategoriesStore.reducer;

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1kc2hha2lyaHVzc2FpbjI5OEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vbXNoYWtpcjA4MiIsImlhdCI6MTY2NDAxODIyMiwiZXhwIjoxNjY0NDUwMjIyfQ.uT1CvQerUU6z7RHB0UJ98VwqbEl1lC2iv_bf887pw7A";

export function fetchCategories() {

  return async function fetchCategoriesThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch(
        "https://upayments-studycase-api.herokuapp.com/api/categories",
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      console.log(data.categories)
        dispatch(setcategories(data.categories));
        dispatch(setStatus(STATUSES.IDLE));
    } catch (err) {
      console.log(err);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
