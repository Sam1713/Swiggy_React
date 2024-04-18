import { configureStore } from "@reduxjs/toolkit";
import cartRecuder from "./cartSlice"
const appStore=configureStore({
    reducer:{
       cart:cartRecuder
    }
});
export default appStore;
