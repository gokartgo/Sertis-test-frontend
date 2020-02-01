import React from 'react'

import classes from './Item.scss'

const item = (props) => {
    return (
        <li className={classes.itemContainer}>
            <div className={classes.icon}/>
            <div className={classes.title}>
                <p>a</p>
                <p>b</p>
            </div>
        </li>
    )
}

export default item