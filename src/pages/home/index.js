import React, { useContext } from 'react';
import ListLinks from '../../components/list_links';
import SwitchTheme from '../../components/switchteme';
import { GlobalContext } from '../../services/context';
import Header from '../../components/header';

export default function HomePage() {
    const {state :{currentTheme}} = useContext(GlobalContext);
    
    return (<>
        <Header />
    
        <div style={{'background': currentTheme.background}}>
            <SwitchTheme />
            <h1>HOME</h1>
            <ListLinks />
        </div>
    </>);
}