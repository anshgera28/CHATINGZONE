// import { configureStore } from "@reduxjs/toolkit";
// import userSlice from "./userSlice.js";

// const store = configureStore({
//     reducer: {
//         user: userSlice.reducer
//     }
// })

// export default store


// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js"; // ✅ Use any name, but it's the reducer directly

const store = configureStore({
    reducer: {
        user: userReducer // ✅ No need to access .reducer
    }
});

export default store;
