import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import { countReducer } from "./reducer";


export const store = createStore(countReducer)

export const  AppProvider = ({children}) => (
    <Provider store={store}>
        {children}
    </Provider>
)