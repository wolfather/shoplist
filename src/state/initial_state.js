import { themes } from "../theme";

export const initialState = {
    themes,
    currentTheme: themes[0].alias,
    shopcart: [{id: '4', qtdy: 2}, {id: '44', qtdy: 12}],
    currentItem: {}
};
