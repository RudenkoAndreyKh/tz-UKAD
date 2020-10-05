import React, { createContext, useReducer } from 'react';
import { ActionTypes } from './action-types';

const initialState: any = {
    weatherInfo: {
        
    }
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }: any) => {

    const [state, dispatch]: any = useReducer((state: any, action: { type: string, payload: any }) => {
        switch (action.type) {
            case ActionTypes.UPDATE_WEATHER_INFO:
                return { ...state, weatherInfo: { ...state.weatherInfo, ...action.payload } }
            default:
                throw new Error();
        };
    }, initialState);

    return <Provider value={{ state, dispatch }}> {children} </Provider>;
};

export { store, StateProvider }
