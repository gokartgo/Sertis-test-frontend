import React from 'react';

import classes from './Sidebar.scss';
import Header from './Header/Header';
import SidebarItems from './SidebarItems/SidebarItems'

const sidebar = (props) => {
    return (
        <div className={classes.sidebarContainer}>
            <Header />
            <nav>
                <SidebarItems/>
            </nav>
        </div>
    );
};

export default sidebar;