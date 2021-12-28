import { ADD_ITEM_TO_CART, CHANGE_CURRENT_THEME } from '../../constants/theme';
import { initialState } from '../../state/initial_state';

export const themeReducer = (state = initialState, action) => {
    console.log('STATE', state);
    console.log('==>', action);

    switch (action.type) {
        case CHANGE_CURRENT_THEME:
            const currentTheme = findThemeByAlias(state);
            return {...state, currentTheme: currentTheme(action) };

        case ADD_ITEM_TO_CART:
            const _shopcart = addProductInCart(state)(action);
            return {...state, shopcart: _shopcart };

        default: return {...state};
    }
};

export const findThemeByAlias = state => action => (
    state.themes.find(theme => theme.alias === action.payload)
);

export const findProductInShopcartById = state => action => (
    state.shopcart.find(item => item.id === action.payload.id)
);

export const addProductInCart = state => action => {
    let _shopcart = state.shopcart.length ? state.shopcart : [];

    const {id, qtdy} = action.payload;
    if (_shopcart.length) {
        const productFound = findProductInShopcartById(state)(action);

        if(productFound === undefined) {
            _shopcart.push({id, qtdy});
        } else {
            const newProduct = _shopcart.map(item => item.id === id ? {...item, qtdy} : item);

            _shopcart = newProduct;
        }
    } else {
        _shopcart.push({id, qtdy});
    } 

    return _shopcart;
};
