import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { RootReducer } from "./Root.reducer";
import { rootSaga } from "./Root.saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: RootReducer,
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);
