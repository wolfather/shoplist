import { themes } from "../theme";

export const initialState = {
    themes,
    currentTheme: themes[0].alias,
    shopcart: [],
    currentItem: {}
};
