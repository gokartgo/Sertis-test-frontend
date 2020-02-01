import React from 'react'

import classes from './Menu.scss'

const menu = (props) => {
    return (
        <div className={classes.menuContainer}>
            <a className={classes.active}>Activity</a>
            <a>Users</a>
            <a>Group</a>
        </div>
    )
}

export default menu