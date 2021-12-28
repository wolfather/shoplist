import React, { useReducer } from 'react';
import { initialState } from '../state/initial_state';
import { themeReducer } from './theme_reducer';

export default function() {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    
}
