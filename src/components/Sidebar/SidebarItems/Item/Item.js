import React from 'react'

import classes from './Item.scss'

const item = (props) => {
    let sidebarStyle = classes.title
    if(props.hover) {
        sidebarStyle = [classes.title,classes.expandSidebar].join(' ')
    }
    return (
        <li className={classes.itemContainer}>
            <div className={classes.icon}/>
            <div className={sidebarStyle}>
                <p>a</p>
                <p>b</p>
            </div>
        </li>
    )
}

export default item