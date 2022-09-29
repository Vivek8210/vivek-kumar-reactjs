import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartStore'
import productReducer from './productStore'
import categoryReducer from './categoriesStore'

const store=configureStore({
    reducer: {
        cart:cartReducer,
        product:productReducer,
        category:categoryReducer,
    }
})
export default store;