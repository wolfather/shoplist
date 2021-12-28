import React, { useState, useEffect } from 'react';


import { List, ListItem, ListLinkItems } from './style';

import productFactory from '../../services/products_factory';

export default function ListLinks(props) {
    const [links, setLinks] = useState([]);
    
    useEffect(() => {
        const listLinks = productFactory({qtdy: Math.round(Math.random() * 100)});
        
        setLinks(listLinks);
    }, []);

    return(<div>
        <List>
            { links.map((link, index) => (
            <ListItem key={index}>
                <ListLinkItems to={link.link} >{link.name}</ListLinkItems>
            </ListItem>)) }
        </List>
    </div>)
}