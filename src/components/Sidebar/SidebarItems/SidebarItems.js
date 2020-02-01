import React from 'react';

import classes from './SidebarItems.scss';
import Item from './Item/Item'

const sidebarItems = (props) => {
    const item = []
    for(let i = 0;i<10;i++) {
        item.push(<Item/>)
    }
    return (
        <div className={classes.itemContainer}>
            <lu>
                {item}
            </lu>
        </div>
    );
}

export default sidebarItems;