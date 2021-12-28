import React, { useContext } from "react";
import { CHANGE_CURRENT_THEME } from "../../constants/theme";

import { GlobalContext } from "../../services/context";

export default function SwitchTheme(props) {
    const ctx = useContext(GlobalContext);
    console.log('switch: ', ctx);
    
    return(<>
        {ctx.state.themes.map((theme, themeIndex) => (
            <button key={themeIndex} 
                style={{'background': theme.background, 'color': theme.foreground}} 
                onClick={() => {
                    ctx.dispatch({
                        type: CHANGE_CURRENT_THEME, 
                        payload: theme.alias
                    });
                }}>
                {theme.alias}
            </button>
        ))}
    </>);
}